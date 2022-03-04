
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
import unstakeTransaction from "../components/TransactionUtility/UnstakeTransaction";

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
            getMetaStakedNFTs()
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
    
    const getMetaStakedNFTs = async () => 
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
        const response = await fetch(`https://neonclouds.net:4242/api/staking?owner=`+wallet.publicKey,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin" : "*",
                "Api-Key": process.env.REACT_APP_API_KEY!,
            }});
 
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
    
        const records = await response.json();

        setStakeMint(records);
    }

    const stake = (mint:string) =>
    {
        stakeTransaction(
            props.connection,
            mint,
            wallet,
        ).then(async (res)=>
            {
                if(res)
                {
                    const addres = wallet.publicKey;
    
                    const params = "{ \"owner\":\""+addres+"\" , \"mint\":\""+ mint+"\"}";
    
                    await fetch("https://neonclouds.net:4242/api/staking/", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "access-control-allow-origin" : "*",
                            "Api-Key":process.env.REACT_APP_API_KEY!
                        },
                        body: params,
                        })
                        .catch(error => {
                            window.alert("ADD ERROR:"+error);
                            return;
                        });
    
                    setNFTS( nfts.filter(nft => {return  JSON.parse(JSON.stringify(nft)).info.mint !== mint.toString() } ));
                    getStakedNFTsOnDB();
                    setTimeout(()=>{getNFTs(); },20000);

                }

            }

        );
    }

    const unstake = (mint:string)=>
    {
        unstakeTransaction(
            props.connection,
            mint,
            wallet,
        ).then(async (res)=>
            {
                if(res)
                {
                    await fetch(`https://neonclouds.net:4242/api/staking?mint=`+mint,{
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "access-control-allow-origin" : "*",
                            "Api-Key": process.env.REACT_APP_API_KEY!,
                        }}).catch(error => {
                            window.alert("ADD ERROR:"+error);
                            return;
                        });

                    getStakedNFTsOnDB();
                    
                }
            }
        );
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
                            <a onClick={()=>stake( JSON.parse(JSON.stringify(nft)).info.mint)
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
                            <a onClick={()=>unstake(JSON.parse(JSON.stringify(nft)).info.data.mint)}><img src={JSON.parse(JSON.stringify(nft)).meta.image} width="130px"/></a>
                        );   
                    })
                :
                    "empty"
            }
            
        </CollectiveBody>
    );
};

export default TransactionTest;  