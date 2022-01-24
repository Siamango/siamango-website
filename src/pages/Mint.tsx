import * as anchor from "@project-serum/anchor";
import styled from "styled-components/macro";
import MintSection from "../components/Mint";
import img from "../assets/images/logo-compressed.png";
import video from "../assets/videos/videoSfondo.mp4"
export interface MintPageProps
{
    candyMachineId?: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    txTimeout: number;
    rpcHost: string;
}

const MintPageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MintPage = (props:MintPageProps)=>
{
    return(
        <div > 
            <video className="video-background" loop autoPlay muted playsInline> 
                <source src={video} type="video/mp4" />
                Browser not supported
            </video>
            <MintPageContainer>
                <img id="logo" alt ="" src={img} style={{height:"50%", objectFit:"none"}}></img>
                <h1 style={{fontSize:"70px", textAlign:"center", textShadow:"rgb(0, 219, 255) -3px 0px 0px, rgb(0, 219, 255) -4px 0px 5px"}}>WHITELISTED PRE-SALE MINT</h1>
                <MintSection {...props} />
            </MintPageContainer>
        </div>
    );
}

export default MintPage;