
import { WalletButton, CollectiveBody, LinkToHome, Box, } from "../components/Collective/CollectiveElements";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import logo from "../assets/images/logo-compressed.png";


export interface RewardProps
{
    connection: anchor.web3.Connection;
    children?:any;
}

const Reward = (props: RewardProps) => {

    //const [whitelisted, setWithelisted] = useState(false);
    //const [collectionRes, setCollectionRes] = useState("");
    const [memberRes, setMemberRes] = useState("");
    
    const [balance, setBalance] = useState<number>();

    const wallet = useWallet();


    useEffect( () => {
        (async () => {
            if (wallet?.publicKey) {
              const balance = await props.connection.getBalance(wallet.publicKey);
              setBalance(balance / LAMPORTS_PER_SOL);
            }
          })();
        if(wallet.connected)
        {
            const address = wallet.publicKey?.toBase58();

            fetch(`https://neonclouds.net:5555/api/organization/members?address=`+address,{
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }}).then(response => response.json())
            .then(data => setMemberRes(JSON.stringify(data)));

        }
    }, [wallet.publicKey]);
    
    return (
        <CollectiveBody>
            <LinkToHome href="https://neonclouds.net"><img src={logo} alt="" style={{position:"fixed", top:"-20px", left:"0", width:"300px"}}/></LinkToHome>
            
            <WalletButton wallet={wallet} balance={balance}/>

            <Box>
                <span>
                    <div style={{textAlign:"center", marginTop:"150px"}}>
                        <h1>Promised:</h1>
                        <p style={{fontSize:"8em"}}>
                            {wallet.connected && memberRes!==""?JSON.parse(memberRes).promised:"#"}
                        </p>
                        <h1>Whitelisted:</h1>
                        <p style={{fontSize:"8em"}}>
                            {wallet.connected && memberRes!==""?JSON.parse(memberRes).whitelisted?"YES":"NO":"#"}
                        </p>
                    </div>
                </span>
            </Box>
            
            
        </CollectiveBody>
    );
};

/*const tickTranslate = (tick:any) =>
{
    var epochTicks = 621355968000000000,    // the number of .net ticks at the unix epoch
    ticksPerMillisecond = 10000,        // there are 10000 .net ticks per millisecond
    jsTicks = 0,                        // ticks in javascript environment
    jsDate,                             // Date in javascript environment
    input = parseInt(tick);

    jsTicks = (input - epochTicks) / ticksPerMillisecond;
    jsTicks -= 3600000;
    jsDate = new Date(jsTicks);

    return jsDate;
} */

export default Reward;  

