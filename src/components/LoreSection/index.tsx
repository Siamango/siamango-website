//import { LoreContainer, LoreText, LoreWrapper } from "./LoreElements";

import styled from "styled-components/macro";
import { Column1, Column2, Heading, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";

const LoreContainer = styled.div`

    color: #fff;
    background: linear-gradient(-45deg, #7400ff, #d835f5, #239dd5);
    
    transform-origin: top left;
    
    background-size: 400% 400%;
    //transform: skewY(-10deg);
    transform-origin: top left;

    animation: animateBack 18s ease infinite;

    @keyframes animateBack
    {
        0% {
        background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    @media screen and (max-width: 768px)
    {
        //height: 1000px;
        padding: 100px 0;
    }
`;

const SpacerDiv = styled.div`
    height:40px;
    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;
const LoreSection = ()=>
{
    return( 
        <LoreContainer  id = "lore">
            <InfoWrapper style={{height:"fit-content", padding:"50px 24px"}}>
                <InfoRow imgStart={false}>
                    <Column1 >
                        <TopLine>Lore</TopLine>
                        <Heading lightText={true}>
                            The Story
                        </Heading >
                        <TextWrapper style={{fontSize:"1.2rem", textAlign:"justify"}}>
                                Nostalgic for better times, a group of people decided life would be better spent in a world where it's always summer and the sun is always setting.
                                They decided to all upload their consciousness to their ideal world at the same time.
                                During the long awaited day of the upload, there was a heavy storm, something they wouldn't have to deal with once they were in their new world.
                                When the time came, at the exact same time the upload was happening, lightning struck the building where the citizens of the new utopia were gathered.
                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper style={{fontSize:"1.2rem", textAlign:"justify"}}>
                            <SpacerDiv/>
                                Fortunately the lightning didn't stop the upload from happening like you see in those cheesy Sci-Fi movies... Wait... OMG something's wrong....
                                AARRGHH WHAT HAPPENED TO MY FACE ?! I DID NOT SIGN UP FOR THIS! Isn't there a way out? And what is up with that weird looking cloud???
                                Oh well, at least the weather is nice. I'm going to need some sunglasses.
                            
                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </LoreContainer>);
}

export default LoreSection;