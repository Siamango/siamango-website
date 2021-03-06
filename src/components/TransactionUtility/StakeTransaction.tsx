import * as anchor from "@project-serum/anchor";
import * as web3 from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { getOrCreateAssociatedTokenAccount } from "./GetOrCreateAssosiatedTokenAccount";

const stakeTransaction = async (connection:anchor.web3.Connection, mint : string, wallet:any) => 
{
    if (!wallet.publicKey) throw new WalletNotConnectedError();
    if (!wallet.signTransaction) throw new WalletNotConnectedError();
    const toPublicKey = new web3.PublicKey(process.env.REACT_APP_STAKING_WALLET!);//J62sXLPqpZmq4yfqvNDadJUj1i3nac1YXDYUoRxQPK4b

    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet.publicKey,
        new web3.PublicKey(mint),
        wallet.publicKey,
        wallet.signTransaction
    );
      
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet.publicKey,
        new web3.PublicKey(mint),
        toPublicKey,
        wallet.signTransaction
    );
    
    const transaction = new web3.Transaction().add(
        Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            toTokenAccount.address,
            wallet.publicKey,
            [],
            1 
        )
    );

    try
    {
        const signature = await wallet.sendTransaction(transaction, connection);
        const response = await connection.confirmTransaction(signature, 'processed');
        console.log('response', response);
    
        if(response.value.err===null)
        {
            return true;
        }
    }
    catch (e)
    {
        console.error("Error: "+e);
    }

    return false;
}

export default stakeTransaction;