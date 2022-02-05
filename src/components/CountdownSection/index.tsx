import { useState } from "react";
import Countdown from "react-countdown";
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";
import { Counter, CounterContainer } from "./CountdownElements";
import img from "../../assets/images/Cloudies7.gif"
import GlitchText from "../Glitch";
import solLogo from "../../assets/images/solanaLogo.png"
import {CollectiveButton2} from "../CollectiveSections/CollectiveSectionElements"

const CountdownSection = ()=>
{

    const [countdownFinished, setFinished] = useState(false);

    const mintDate = new Date('2022-01-29T21:00:00Z');
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
                            <TopLine >Whitelist</TopLine>
                            <Heading lightText={true}>
                               <GlitchText> Whitelist pre-sale opening </GlitchText>
                            </Heading>
                            <Subtitle darkText={false}>
                                If you are not whitelisted yet, go to our social pages and do not miss the chance to be whitelisted in order to buy a Cloudy before everybody and at a discouted price.
                            </Subtitle>
                            <TopLine >Presale</TopLine>
                            29th January 2022 <br/> Price: 0.35 <img src={solLogo} style={{width:"16px"}} alt="SolLogo"></img>

                            <BtnWrap style={{marginTop:"50px"}}>
                                {
                                    countdownFinished
                                    ?   <CollectiveButton2 to="/whitelistpresalemint"> GO TO MINT</CollectiveButton2>
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