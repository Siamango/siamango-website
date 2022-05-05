import { web3 } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { getAssociatedTokenAddress } from "./GetAssosiatedTokenAddress";
import { getAccountInfo } from "./GetAccountInfo";
import { ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from "./GetOrCreateAssosiatedTokenAccount";
const WL_TOKEN_MINT = new web3.PublicKey(process.env.REACT_APP_TOKEN!);

export async function cleanTransaction(connection: anchor.web3.Connection, wallet: WalletContextState) 
{
    if (!wallet.publicKey)
        throw new WalletNotConnectedError();
    if (!wallet.signTransaction)
        throw new WalletNotConnectedError();

    let transaction = new web3.Transaction();
    const auxAccountsToken = (await connection.getTokenAccountsByOwner(wallet.publicKey, { mint: WL_TOKEN_MINT }));
    const wlAmount = await connection.getTokenAccountBalance(auxAccountsToken.value[0].pubkey);

    console.log("aux:"+auxAccountsToken.value[0].pubkey);

    const toTokenAccount = await myGetOrCreateAssosiateTokenAcccount(connection, wallet, transaction);

    console.log("to:"+toTokenAccount?.address);

    transaction.add(
        Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            auxAccountsToken.value[0].pubkey,
            toTokenAccount!.address,
            wallet.publicKey,
            [],
            wlAmount.value.uiAmount!
        ),
        Token.createCloseAccountInstruction(
            TOKEN_PROGRAM_ID,
            auxAccountsToken.value[0].pubkey,
            wallet.publicKey,
            wallet.publicKey,
            [] // multisig
        )
    );
    
    transaction.feePayer = wallet.publicKey!;

    try {
        const signature = await wallet.sendTransaction(transaction, connection);
        console.log("signature: " + signature);
        const response = await connection.confirmTransaction(signature, 'processed');
        console.log('response', response);

        if (response.value.err === null) {
            return true;
        }
    }
    catch (e) {
        console.error("Error: " + e);
    }

    return false;
}

const myGetOrCreateAssosiateTokenAcccount = async (connection:anchor.web3.Connection, wallet:WalletContextState, transaction:web3.Transaction) =>
{
    const associatedToken = await getAssociatedTokenAddress(WL_TOKEN_MINT, wallet.publicKey!, false, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID);

    // This is the optimal logic, considering TX fee, client-side computation, RPC roundtrips and guaranteed idempotent.
    // Sadly we can't do this atomically.
    let account;
    try 
    {
        account = await getAccountInfo(connection, associatedToken, undefined , TOKEN_PROGRAM_ID)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } 
    catch (error: any) 
    {
        // TokenAccountNotFoundError can be possible if the associated address has already received some lamports,
        // becoming a system account. Assuming program derived addressing is safe, this is the only case for the
        // TokenInvalidAccountOwnerError in this code path.
        if (error.message === 'TokenAccountNotFoundError' || error.message === 'TokenInvalidAccountOwnerError') 
        {
            // As this isn't atomic, it's possible others can create associated accounts meanwhile.
            try 
            {
                transaction.add(
                    Token.createAssociatedTokenAccountInstruction(
                        wallet.publicKey!,
                        associatedToken,
                        wallet.publicKey!,
                        WL_TOKEN_MINT,
                        TOKEN_PROGRAM_ID,
                        ASSOCIATED_TOKEN_PROGRAM_ID
                    )
                )
            } 
            catch (error: unknown) 
            {
                // Ignore all errors; for now there is no API-compatible way to selectively ignore the expected
                // instruction error if the associated account exists already.
                console.log(error);
            }
        } 
        else 
        {
            throw error
        }
    }

    return account;
}
