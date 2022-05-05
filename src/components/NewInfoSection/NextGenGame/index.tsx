import video from "../../../assets/videos/Trailer.mp4"
import img from "../../../assets/images/game/yasuke_idle.gif"
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper } from "../../InfoSection/InfoElements";

const NextGenSection = ()=> 
{
    return (
        <InfoContainer lightBg={false} id = "game" >
            <InfoWrapper style={{height:"fit-content", paddingBottom:"50px"}}>
                <Heading lightText={true}>
                    Powering next-gen crypto game
                </Heading> 
                <InfoRow imgStart={false}>
                    <Column1 id={"gameCol"}>
                        <TextWrapper id={"gameText"}>
                            <Subtitle darkText={false}>
                                The Collective DAO is supporting and <span style={{color:"#009fff", width:"fit-content"}}>developing the next-gen P2E/PVP game</span> in the Solana metaverse.
                                Neon Clouds holders will be rewarded with in game content, airdrops of rewards and more.
                            </Subtitle>
                            <video loop autoPlay muted controls width="100%"> 
                                <source src={video} type="video/mp4" />
                            </video>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap id={"gameIMG"} style={{paddingBottom:"60px"}}>
                            <Img src={img} alt="ART IMAGE" style={{transform: "scaleX(-1)", filter: "drop-shadow(-5px 5px 10px #a8141d)"}}/>
                        </ImgWrap>
                    </Column2>
                    </InfoRow>
                    <div id="passiveIncome" style={{display:"block" , color:"#fff", fontSize:"20px"}}>
                        Inspired by fast paced, roguelike hack and slash games, our game will be a PVP game in which players will be able to compete for <span style={{color:"#009fff", width:"fit-content"}}>in game rewards</span> and glory!
                    </div>
            </InfoWrapper>
        </InfoContainer>
        
    );
}

export default NextGenSection;