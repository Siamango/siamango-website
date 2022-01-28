import { useEffect } from 'react'
import GlitchText from '../Glitch';
import solLogo from "../../assets/images/solanaLogo.png"
import { InfoContainer, InfoWrapper, InfoRow, Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img, BtnWrap} from './InfoElements';
import CardSection from '../Cards';
import { Counter, CounterContainer } from '../Mint/MintElemtes';
import Countdown from 'react-countdown';

export interface InfoProps{
    lightBg:any;
    id: any;
    imgStart:any;
    topLine:any;
    lightText:any;
    headline: any;
    darkText: any;
    subtitle: any;
    buttonLabel: any;
    to: any;
    img: any;
    alt: any;
    primary:any;
    dark:any;
}

const InfoSection = (props: InfoProps) => {
    
    const handleScroll = () => {
        const position =  -10 +window.scrollY/80;
        //console.log(height);
        let info = document.getElementById('project')!;
        let infoCol = document.getElementById('projectCol')!;
        let infoImg = document.getElementById('projectIMG')!;
        let infoText = document.getElementById('projectText')!;
        //console.log((position+10)/10);
        
        //section.style.clipPath = "circle("+position+"px at center center)";
        if(info.id==="project" && position<=0)
        {
            info.style.transform = "skewY("+position+"deg)";
            infoCol.style.transform = "skewY("+(-position)+"deg)";
            infoImg.style.transform = "skewY("+(-position)+"deg)";
            infoImg.style.opacity = ((position+10)/10) + "";
            infoText.style.opacity = ((position+10)/10) + "";
        }
        else
        {
            info.style.transform = "skewY(0deg)";
            infoCol.style.transform = "skewY(0deg)";
            infoImg.style.transform = "skewY(0deg)";
        }
        
    };

    useEffect(() => {
        let info = document.getElementById('project')!;
        let infoCol = document.getElementById('projectCol')!;
        let infoImg = document.getElementById('projectIMG')!;
        let infoText = document.getElementById('projectText')!;
        info.style.transform = "skewY(-10deg)";
        infoCol.style.transform = "skewY(10deg)";
        infoImg.style.transform = "skewY(10deg)";
        infoImg.style.opacity= "0";
        infoText.style.opacity= "0";
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <InfoContainer lightBg={props.lightBg} id = {props.id}>
            <InfoWrapper >
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                            <TopLine >{props.topLine}</TopLine>
                            <Heading lightText={props.lightText}>
                                {props.lightBg
                                    ?props.headline
                                    :<GlitchText>{props.headline}</GlitchText>
                                }
                            </Heading> 
                            {props.id==="project"?
                                <Subtitle darkText={props.darkText}>
                                    {props.subtitle[0]}<br/><br/>{props.subtitle[1]}<br/><br/><TopLine>Public Sale</TopLine> 1st February 2022 <br/> Price: 0.420 <img src={solLogo} style={{width:"16px"}} alt="SolLogo"></img>
                                </Subtitle>
                                :   
                                <Subtitle darkText={props.darkText}>
                                    {props.subtitle}
                                </Subtitle>
                            }
                            
                            <BtnWrap>
                                {
                                    props.id==="collection"  
                                    ?
                                        <Countdown
                                            date={new Date(2022,1)}
                                            onMount={({ completed }) => completed }
                                            onComplete={() => {}}
                                            renderer={renderCounter}
                                        />
                                    :
                                        ""
                                }
                                
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    
                    <Column2>  
                        <ImgWrap id={props.id+"IMG"}>
                            <Img src={props.img} alt="ART IMAGE"/>
                        </ImgWrap>
                    
                    </Column2>
                        
                </InfoRow>
            </InfoWrapper>
            {props.id==="team"?
                <CardSection />
            :""}
        </InfoContainer>
    )
}

export default InfoSection;

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <CounterContainer>
            <Counter>
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
            </Counter>
        </CounterContainer>
    );
  };