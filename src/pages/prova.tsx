
import { WalletButton, CollectiveBody, LinkToHome, } from "../components/Collective/CollectiveElements";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import * as anchor from "@project-serum/anchor";
import * as web3 from "@solana/web3.js";
import * as metadata from "@metaplex-foundation/mpl-token-metadata";

import logo from "../assets/images/logo-compressed.png";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from "../components/TransactionUtility/GetOrCreateAssosiatedTokenAccount";

import mintList from "../assets/hashlist.json";
import bs58 from "bs58";
import stakeTransaction from "../components/TransactionUtility/StakeTransaction";

export interface RewardProps
{
    connection: anchor.web3.Connection;
    children?:any;
}

const TransactionTest = (props: RewardProps) => {
    
    const [balance, setBalance] = useState<number>();
    const [nfts, setNFTS] = useState([{}]);
    const [stakeNfts, setStakeNfts] = useState([{}]);
    const [stakeMint, setStakeMint] = useState([]);

    const wallet = useWallet();

    

    const unstakeTransaction = async (mint:string) =>
    {
        if (!wallet.publicKey) throw new WalletNotConnectedError();
        if (!wallet.signTransaction) throw new WalletNotConnectedError();
        console.log(mint);
        var fromWallet = web3.Keypair.fromSecretKey(bs58.decode(process.env.REACT_APP_PRIVATE_KEY!));

        var myToken = new Token(
            props.connection,
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
        const blockHash = await props.connection.getRecentBlockhash();
        transaction.recentBlockhash = await blockHash.blockhash;
        transaction.feePayer = wallet.publicKey; 
        transaction.partialSign(fromWallet);

        const signature = await wallet.sendTransaction(transaction, props.connection);
        const response = await props.connection.confirmTransaction(signature, 'processed');
        console.log('response', response);

        if(response.value.err===null)
          {
            const addres = wallet.publicKey;

            const params = "{ \"owner\":\""+addres+"\" , \"mint\":\""+ mint+"\"}";

            await fetch("http://localhost:5000/record/"+mint, {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                },
                body: params,
            })
            .catch(error => {
                window.alert(error);
                return;
            });

            setNFTS( nfts.filter(nft => {return  JSON.parse(JSON.stringify(nft)).info.mint !== mint.toString() } ));
            getStakedNFTsOnDB();
            setTimeout(()=>{getNFTs(); },20000);

          }
        
    }

    useEffect( () => {
        (async () => {
            if (wallet?.publicKey) {
                const balance = await props.connection.getBalance(wallet.publicKey);
                setBalance(balance / web3.LAMPORTS_PER_SOL);
                
                getNFTs();
                getStakedNFTsOnDB();
            }
          })();
    }, [wallet.publicKey]);

    useEffect(()=>{ 
        //if(stakeNfts.length>0)
            getStakedNFTs()
    },[stakeMint]);

    const getNFTs = async () => {
        if (!wallet.publicKey) return;

        var nftsmetadata:metadata.MetadataData[] = await metadata.Metadata.findDataByOwner(props.connection, wallet.publicKey);

        var loadData:any[];
        loadData= JSON.parse(JSON.stringify(mintList));

        //check if is our collection
        //nftsmetadata = nftsmetadata.filter(metadata => {return loadData.includes(metadata.mint) })

        const nftsBinded = nftsmetadata.map( async info => {
            var meta = "";
            //console.log(info);
            await fetch( JSON.parse(JSON.stringify(info.data)).uri).then(response => response.json()).then(data => {  meta=data});
            
            return {info , meta};
        })

        setNFTS(await Promise.all(nftsBinded));
    }
    
    const getStakedNFTs = async () => 
    {
        if (!wallet.publicKey) return;

        const staked = stakeMint.map(async nft => {
            
            var info = await metadata.Metadata.findByMint(props.connection, new web3.PublicKey(JSON.parse(JSON.stringify(nft)).mint));
            //console.log(data);
            var meta = "";
            await fetch( info.data.data.uri).then(response => response.json()).then(data => {  meta=data});
            return{info, meta};
        });
        //console.log(await Promise.all(staked));
        setStakeNfts(await Promise.all(staked));
    }

    const getStakedNFTsOnDB = async ()=>
    {
        const response = await fetch(`http://localhost:5000/record/`+wallet.publicKey);
 
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
    
        const records = await response.json();

        //console.log(records);

        setStakeMint(records);
    }

    return (
        <CollectiveBody>
            <LinkToHome href="https://neonclouds.net"><img src={logo} alt="" style={{position:"fixed", top:"-20px", left:"0", width:"300px"}}/></LinkToHome>
            
            <WalletButton wallet={wallet} balance={balance}/>

            INSIDE WALLET
            {
                JSON.stringify(nfts[0]) !== "{}" ?
                (
                    nfts.map(nft => {
                        return(
                            <a onClick={()=>stakeTransaction(
                                                props.connection,
                                                JSON.parse(JSON.stringify(nft)).info.mint,
                                                wallet,
                                            )
                            }>
                                <img src={JSON.parse(JSON.stringify(nft)).meta.image} width="130px"/>
                            </a>
                        );
                    })
                )
                :
                (
                    ""
                )
            }

            MINT STAKED
            {
                JSON.stringify(stakeNfts[0]) !== "{}"?
                    stakeNfts.map(nft=>{
                        //console.log(JSON.parse(JSON.stringify(nft)).info.data.mint);
                        return(
                            <a onClick={()=>unstakeTransaction(JSON.parse(JSON.stringify(nft)).info.data.mint)}><img src={JSON.parse(JSON.stringify(nft)).meta.image} width="130px"/></a>
                        );   
                    })
                :
                    "empty"
            }
            
        </CollectiveBody>
    );
};

export default TransactionTest;  