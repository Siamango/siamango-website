import { env } from "process";
import { useEffect, useState } from "react";
import { VoteButton, VoteContainer, VotesBar, VoteSection } from "./votesElements";


export interface VotesSectionProps
{
    vote1:any;
    vote2:any;
    wallet:any;
    tokenCount:number;
}

const VotesSection = (props:VotesSectionProps)=>{

    const [voted, setVoted] =useState(true);
   

    return(
        <VoteContainer>
            <VoteSection color="#21ebff">
                <h1 style={{color:"#21ebff"}}>Reward</h1>
                <p style={{margin:"20px"}}>What is reward</p>
                {
                    true?//props.wallet.connected && props.tokenCount>0?
                        <VoteButton href="#" color="#21ebff" border_color="#21ebff" shadow_color="#21ebff">Vote for Reward</VoteButton>
                    :   
                        <div> Sorry you don't have permission to vote</div>
                }
            </VoteSection>
            <VoteSection color="#cd3594">
                <h1 style={{color:"#cd3594"}}>Floor</h1>
                <p style={{margin:"20px"}}>What is floor</p>
                {
                    true?//props.wallet.connected && props.tokenCount>0?
                        <VoteButton href="#"  color="#cd3594" border_color="#cd3594" shadow_color="#cd3594">Vote for Floor</VoteButton>
                    :
                        <div> Buy owr NFT to vote</div>
                }
            </VoteSection>
            <VotesBar vote1={props.vote1} vote2={props.vote2}/>
        </VoteContainer>
    );
}

export default VotesSection;