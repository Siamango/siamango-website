import video from "../../assets/videos/Trailer.mp4"
import img from "../../assets/images/yasuke_idle.gif"
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";

const NextGenSection = ()=> 
{
    return (
        <InfoContainer lightBg={true} id = "game" style={{marginTop:"100px"}}>
            <InfoWrapper >
                <InfoRow imgStart={true}>
                    <Column1 id={"gameCol"}>
                        <TextWrapper id={"gameText"}>
                            <TopLine >Crypto Gaming</TopLine>
                            <Heading lightText={false}>
                                Powering the next-gen crypto game
                            </Heading>  
                                <Subtitle darkText={true}>
                                    Neon Clouds Collective are supporting and developing a next-gen P2E/PVP game in the Solana metaverse.
                                    Neon Clouds holders will be rewarded an exclusive in game currency, airdrops of rewards and more.
                                    Stay tuned 😎
                                </Subtitle>
                                <video loop autoPlay muted controls width="100%"> 
                                <source src={video} type="video/mp4" />
                            </video>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap id={"gameIMG"}>
                            <Img src={img} alt="ART IMAGE"/>
                        </ImgWrap>
                    </Column2>
                    </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        
    );
}

export default NextGenSection;