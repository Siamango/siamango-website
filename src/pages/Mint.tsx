import * as anchor from "@project-serum/anchor";
import MintSection from "../components/Mint";
export interface MintPageProps
{
    candyMachineId: anchor.web3.PublicKey;
    config: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    treasury: anchor.web3.PublicKey;
    txTimeout: number;
}

const MintPage = (props:MintPageProps)=>
{
    return(<MintSection {...props} />);
}

export default MintPage;