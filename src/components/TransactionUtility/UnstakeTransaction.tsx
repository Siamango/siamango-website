import * as anchor from "@project-serum/anchor";
import * as web3 from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import bs58 from "bs58";

const unstakeTransaction = async (connection:anchor.web3.Connection, mint : string, wallet:any) =>
{
    if (!wallet.publicKey) throw new WalletNotConnectedError();
    if (!wallet.signTransaction) throw new WalletNotConnectedError();
    //console.log(mint);
    var fromWallet = web3.Keypair.fromSecretKey(bs58.decode(process.env.REACT_APP_STAKING_WALLET_PRIVATE_KEY!));

    var myToken = new Token(
       connection,
        new web3.PublicKey(mint),
        TOKEN_PROGRAM_ID,
        fromWallet
    );
    // Create associated token accounts for my token if they don't exist yet
    var fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
        fromWallet.publicKey
    );

    var toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
        wallet.publicKey
    )
    // Add token transfer instructions to transaction
    var transaction = new web3.Transaction()
        .add(
        Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            toTokenAccount.address,
            fromWallet.publicKey,
            [],
            1
        )
    );
    
    // Sign transaction, broadcast, and confirm
    /*var signature = await web3.sendAndConfirmTransaction(
        props.connection,
        transaction,
        [fromWallet]
    );*/
    const blockHash = await connection.getRecentBlockhash();
    transaction.recentBlockhash = await blockHash.blockhash;
    transaction.feePayer = wallet.publicKey; 
    transaction.partialSign(fromWallet);

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
        console.error("Error: " + e);
    }

    return false;
    
}
export default unstakeTransaction;