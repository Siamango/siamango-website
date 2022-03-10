
import { WalletButton, LinkToHome, } from "../components/Collective/CollectiveElements";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";
import * as web3 from "@solana/web3.js";
import * as metadata from "@metaplex-foundation/mpl-token-metadata";

import logo from "../assets/images/logo-compressed.png";

import mintList from "../assets/hashlist.json";
import stakeTransaction from "../components/TransactionUtility/StakeTransaction";
import unstakeTransaction from "../components/TransactionUtility/UnstakeTransaction";
import NFTCard from "../components/Staking/NFTCard";
import { StakingBody } from "../components/Staking/StakingPageElements";
import { NFTCardContainer } from "../components/Staking/NFTCard/NFTCardElements";
import GlitchText from "../components/Glitch";
import { Snackbar } from "@material-ui/core";

export interface RewardProps
{
    connection: anchor.web3.Connection;
    children?:any;
}

interface AlertState 
{
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
}

const TransactionTest = (props: RewardProps) => {
    
    const [balance, setBalance] = useState<number>();
    const [walletNfts, setNFTS] = useState([{}]);
    const [stakeNfts, setStakeNfts] = useState([{}]);
    const [stakeMint, setStakeMint] = useState([]);
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
      });

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
        console.log(walletNfts.length);
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
    
                    setNFTS( walletNfts.filter(nft => {return  JSON.parse(JSON.stringify(nft)).info.mint !== mint.toString() } ));
                    getStakedNFTsOnDB();
                    setTimeout(()=>{getNFTs(); },20000);

                    setAlertState({
                        open: true,
                        message: 'Congratulations! Stake succeeded!',
                        severity: 'success',
                      });

                }
                else
                {
                    setAlertState({
                        open: true,
                        message: 'Stake failed! Please try again!',
                        severity: 'error',
                      });
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

                    setTimeout(()=>{getNFTs(); },20000);

                    setAlertState({
                        open: true,
                        message: 'Congratulations! Unstake succeeded! (Wait ~20 sec to see your nft inside wallet)',
                        severity: 'success',
                      });

                }
                else
                {
                    setAlertState({
                        open: true,
                        message: 'Unstake failed! Please try again!',
                        severity: 'error',
                      });
                }
            }
        );
    }

    return (
        <StakingBody>
            <LinkToHome href="https://neonclouds.net"><img src={logo} alt="" style={{position:"fixed", top:"-20px", left:"0", width:"300px"}}/></LinkToHome>
            
            <WalletButton wallet={wallet} balance={balance}/>

            <NFTCardContainer>
                <h1 style={{color:"#009fff"}}>NFT INSIDE WALLET</h1>
                {
                    JSON.stringify(walletNfts[0]) !== "{}" && walletNfts.length>0?
                    (
                        walletNfts.map(nft => {
                            console.log(nft);
                            return(<NFTCard nft={nft} onClick={()=>stake( JSON.parse(JSON.stringify(nft)).info.mint)} label="Stake"/>);
                        })
                    )
                    :
                    (
                        <GlitchText fontSize="40px">Empty wallet</GlitchText>
                    )
                }

                <h1 style={{color:"#009fff"}}>NFT STAKED</h1>
                {
                    JSON.stringify(stakeNfts[0]) !== "{}" && stakeNfts.length>0?
                        stakeNfts.map(nft=>{
                            return(<NFTCard nft={nft} onClick={()=>unstake(JSON.parse(JSON.stringify(nft)).info.data.mint)} label="Unstake"/>);
                        })
                    :
                        <GlitchText fontSize="40px">No NFT staked</GlitchText>
                }
            </NFTCardContainer>


            <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({ ...alertState, open: false })}
                
            >
                <Alert
                    onClose={() => setAlertState({ ...alertState, open: false })}
                    severity={alertState.severity}
                    style={alertState.severity==="error"?{backgroundColor:"red"}:{backgroundColor:"green"}}
                >
                    {alertState.message}
                </Alert>
            </Snackbar>
        </StakingBody>
    );
};

export default TransactionTest;  