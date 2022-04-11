import { useState } from "react";
import Countdown from "react-countdown";
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";
import { Counter, CounterContainer } from "./CountdownElements";
import img from "../../assets/images/glitchCloudy.gif"
import GlitchText from "../Glitch";
import solLogo from "../../assets/images/solanaLogo.png"
import {CollectiveButton2} from "../CollectiveSections/CollectiveSectionElements"

const CountdownSection = ()=>
{

    const [countdownFinished, setFinished] = useState(false);

    const mintDate = new Date('2022-04-29T21:00:00Z');
    const now = new Date();

    if(!countdownFinished && mintDate < now )
    {
        setFinished(true);
    }

    return(
        <InfoContainer lightBg={false} id = {"presale"}>
            <InfoWrapper style={{paddingTop:"50px"}}>
                <InfoRow imgStart={true}>
                    <Column1 id={"presaleCol"}>
                        <TextWrapper id={"presaleText"}>
                            <TopLine >Free mint</TopLine>
                            <Heading lightText={true}>
                               <GlitchText> Don't miss your free Cloudy! </GlitchText>
                            </Heading>
                            <Subtitle darkText={false}>
                            Free mint of 1250 Cloudy for gen0 Cloudy holders.
                            </Subtitle>
                            <TopLine >Opening</TopLine>
                            26th April 2022 <br/> Price: 0 Sol <img src={solLogo} style={{width:"16px"}} alt="SolLogo"></img><br/><br/>
                            ⚠️ Be sure to have at least 0.015 SOL in order to make up for CM fees ⚠️ 
                            
                            <BtnWrap style={{marginTop:"20px"}}>
                                {
                                    countdownFinished
                                    ?   <CollectiveButton2 to="/mint"> GO TO MINT</CollectiveButton2>
                                    :   <Countdown
                                            date={mintDate}
                                            onMount={({ completed }) => completed }
                                            onComplete={() => {setFinished(true)}}
                                            renderer={renderCounter}
                                        />
                                }
                                
                            </BtnWrap> 
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap id={"presaleIMG"}>
                            <Img src={img} alt="ART IMAGE"/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
}
/*<div style={{textAlign:"center", padding:"40px 0px"}}>
            <h1 style={{color:"black", marginBottom:"50px"}}>Whitelist pre-sale opening</h1>
            <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
            />
        </div> */
const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <CounterContainer>
            <Counter>
            <span></span>
                <section>
                    <p>{days}</p>
                    <p><small>DAYS</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{hours}</p>
                    <p><small>HOURS</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{minutes}</p>
                    <p><small>MINUTES</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{seconds}</p>
                    <p><small>SECONDS</small></p>
                </section>
                <span></span>
            </Counter>
        </CounterContainer>
    );
  };

export default CountdownSection;