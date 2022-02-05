import styled from "styled-components/macro";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
const ConnectButton = styled(WalletDialogButton)``;

export const Counter = styled.span`
    //background-color: #ff73c920;
    color: #000;
    flex: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    //height: 100%;

    border: 2px solid #009fff;
    box-shadow: 0px 0px 10px #009fff, 0px 0px 30px #009fff;
    border-radius:15px;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    text-align:center;

    & p:first-child
    {
        font-size: 3em;
    }

    & section p
    {
        color:#fff;
        margin: 10px;
    }

    & section p small
    {
        color:#fff;
    }
    & span
    {
        font-size: 2em;
        color:#fff;
    }

    @media screen and (max-width: 900px)
    {
        & p:first-child
        {
            font-size: 2em;
        }
    }

`;

export const CounterContainer = styled.span`
    display: inline-block;
    color: #000;
    width: 800px;
    height: 10vh;
    //margin-bottom: 100px;


    @media screen and (max-width: 900px)
    {
        width: 80%;
    }
`;


export const MintContainer = styled.div`
    background-color: transparent;
    width: 100%;
    height: fit-content;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 150px;
`;

const H1 = styled.h1`
    color: red;
    font-size: 3rem;
`;

const MintButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const MintButtonA = styled.a`

    position: relative;
    display: inline-block;
    cursor: pointer;
    padding: 15px 30px;
    border: 2px solid #009fff; //#0f0
    margin: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size:30px;
    text-decoration:none;
    letter-spacing: 2px;
    color: #fff;
    
    //-webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    transition: 0.5s;

    &:hover{
        transition-delay: 1.5s;
        border: 2px solid #cd3594;
        color: #000;
        box-shadow: 0 0 10px #cd3594, 0 0 20px #cd3594;
    }

    &:nth-child(2){
        filter: hue-rotate(80deg);
    }

    &:before
    {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 4px;
        background: #cd3594;
        box-shadow: 5px -12px 0 #cd3594,5px 12px 0 #cd3594;
        transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
        transition-delay: 1s,0.5s,0s,0s;
    }

    &:hover:before
    {
        width: 50%;
        height: 102%;
        left: -2px;
        box-shadow: 5px 0 0 #cd3594, 5px 0 0 #cd3594;
        transition-delay: 0s,0s,0.5s,1s;
    }

    &:after
    {
        content: '';
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 4px;
        background: #cd3594;
        box-shadow: -5px -12px 0 #cd3594, -5px 12px 0 #cd3594;
        transition: width 0.5s, right 0.5s, height 0.5s, box-shadow 0.5s;
        transition-delay: 1s,0.5s,0s,0s;
    }

    &:hover:after
    {
        width: 60%;
        height: 101%;
        right: -2px;
        box-shadow: -5px 0 0 #cd3594, -5px 0 0 #cd3594;
        transition-delay: 0s,0s,0.5s,1s;
    }

`;

const MintButtonSpan = styled.span`
    position:relative;
    z-index:100;
`;

export interface MintButtonProps
{
    onclick?:any;
    children?:any;
}

export const MintButton = (props:MintButtonProps)=>
{
    return (
        <MintButtonContainer>
            <MintButtonA onClick={props.onclick}><MintButtonSpan>{props.children}</MintButtonSpan></MintButtonA>
        </MintButtonContainer>
    );
}

export interface ConnectProps
{
    children?:any;
}
export const ConnectToStart = (props:ConnectProps) => 
{
    return(
        <div>
            <h1 style={{marginBottom:"20px"}}>{props.children}</h1>
            <ConnectButton className='btn--outline' style={{border: "2px solid #cd3594", backgroundColor: "rgba(0,0,0,0.5)", marginRight:"10px"}}>Connect Wallet</ConnectButton>
        </div>
    );
}

export const SoldOut = () =>
{
    return(
        <div>
            <h2>You have been too slow</h2>
            <H1>Collection Sold Out!</H1>
        </div>
    );
}
