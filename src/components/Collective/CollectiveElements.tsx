import styled from "styled-components/macro";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import { shortenAddress } from "../../candy-machine"; 
import { WalletDialogButton, WalletDisconnectButton } from "@solana/wallet-adapter-material-ui";

export const CollectiveBody = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
export const LinkToHome = styled.a`
`;

export const Box = styled.div`
    position: relative;
    width:50%;
    height: 80%;
    max-width: 500px;
    max-height: 700px;
    background: linear-gradient(315deg, #009fff, #0e1538, #cd3594);;

    &:before
    {
        content:"";
        position: absolute;
        top:-4px;
        left:-4px;
        right:-4px;
        bottom:-4px;
        transform:skewX(2deg) skewY(4deg);
        background:linear-gradient(315deg, #009fff, #0e1538, #cd3594);
    }

    &:after
    {
        content:"";
        position: absolute;
        top:-4px;
        left:-4px;
        right:-4px;
        bottom:-4px;
        background:linear-gradient(315deg, #009fff, #0e1538, #cd3594);
        filter: blur(50px);
    }

    & span
    {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: #131313;
        z-index:1;
    }
`;


const WalletButtonContainer = styled.div`
    position: fixed;
    top:50px;
    right: 50px;
`;
export interface WalletButtonProps{
    wallet:any;
    balance:any;
    OnDisconnect?:any;
}
export const WalletButton = (props:WalletButtonProps)=>
{
    return(
        <div style={{textAlign: "center", float:"left"}}>
            <WalletButtonContainer>
                {!props.wallet.connected
                    ?<WalletDialogButton className='btn--outline' style={{border: "2px solid #cd3594", backgroundColor: "rgba(0,0,0,0.5)", marginRight:"10px"}}>Connect Wallet</WalletDialogButton>
                    : <div className="dropdown">
                    <button className="walletLink">
                        <AccountBalanceWalletOutlinedIcon style={{marginRight:"10px", marginBottom: "-5px"}} />
                        {(shortenAddress(props.wallet.publicKey?.toBase58() || ""))}
                    </button>
                    
                    <div className="dropdown-menu">
                        <div style={{width:"100%", textAlign:"center"}}>Balance: {props.balance} SOL</div>
                        <div style={{width:"100%",height:"1px", backgroundColor:"white", marginBottom:"5px", marginTop:"5px" }}/>
                        <WalletDisconnectButton onClick={props.OnDisconnect} style={{backgroundColor:"#fd5252", boxShadow:"none"}}/>
                    </div>
                </div>}
            </WalletButtonContainer>
        </div>
    );
}


