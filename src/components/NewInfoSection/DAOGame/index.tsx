import styled from "styled-components/macro";
import GlitchText from "../../Glitch";
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../../InfoSection/InfoElements";
import img from "../../../assets/images/info/video-game.png"

export interface InfoProps{
    lightBg:any;
    id: any;
    imgStart:any;
    lightText:any;
    darkText: any;
    img: any;
    alt: any;
    dark:any;
}

const UL = styled.ul`

    margin-left: 25px;
    & li
    {
        color:#fff;
        font-size: 25px;
        margin-top: 30px;
        
    }
`;

const DaoGameSection = (props:InfoProps)=> 
{
    return (
        <>
        <InfoContainer lightBg={false} id ={props.id} >
            <InfoWrapper style={{height:"fit-content", paddingTop:"50px", paddingBottom:"50px"}}>
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                            <TopLine>Crypto Gaming</TopLine>
                            <Heading lightText={props.lightText}>
                                <GlitchText>DAO Game Development</GlitchText>
                            </Heading> 
                                <Subtitle darkText={props.darkText}>
                                Through The Collective, <span style={{color:"#009fff", width:"fit-content"}}>members will be able to help the team</span> test and develop games by influencing decisions regarding:
                                    <UL >
                                        <li>Gameplay</li>
                                        <li>Tokenomics</li>
                                        <li>Characters features, abilities and aspect</li>
                                        <li>Mechanics feeling</li>
                                        <li>Ranking system</li>
                                    </UL>
                                </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>  
                        <ImgWrap>
                            <Img src={img} alt="ART IMAGE" style={{width:"65%", }} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                <div id="passiveIncome" style={{display:"block" , color:"#fff", fontSize:"20px"}}>
                The Neon Clouds DAO (The Collective) is the <span style={{color:"#009fff", width:"fit-content"}}>first organization</span> that will take a key role in the development of our next-gen game in the Solana Metaverse.
                </div>
            </InfoWrapper>
        </InfoContainer>
        <InfoContainer lightBg={false} id = "game" >
            <InfoWrapper style={{height:"fit-content", paddingBottom:"10px"}}>
                <InfoRow imgStart={!props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                         
                        <TextWrapper id={props.id+"Text"}>
                                <Subtitle darkText={props.darkText}>
                                    <UL >
                                        <li>In game rewards</li>
                                        <li>Early access</li>
                                    </UL>
                                    
                                </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>  
                        <ImgWrap>
                            <Img src={props.img} alt="ART IMAGE" style={{width:"35%",filter: "drop-shadow(-1px 1px 5px rgb(255, 211, 33))"}} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
        
    );
}

export default DaoGameSection;