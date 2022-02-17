
import GlitchText from '../Glitch';
import solLogo from "../../assets/images/solanaLogo.png"
import { InfoContainer, InfoWrapper, InfoRow, Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img, BtnWrap} from './InfoElements';
import CardSection from '../Cards';
import { Button } from '../Button';
import { CollectiveButton2 } from '../CollectiveSections/CollectiveSectionElements';

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
                            {
                                props.id==="project"
                                ?
                                    <Subtitle darkText={props.darkText}>
                                        {props.subtitle[0]}
                                            <br/><br/>
                                        {props.subtitle[1]}
                                            <br/><br/>
                                        <TopLine>Public Sale</TopLine> 1st February 2022 <br/> Price: 0.420 <img src={solLogo} style={{width:"16px"}} alt="SolLogo"></img>
                                    </Subtitle>
                                :   
                                    <Subtitle darkText={props.darkText}>
                                        {props.subtitle}
                                    </Subtitle>
                            }
                            
                            <BtnWrap>
                                {
                                    props.id==="rarity"  
                                    ?
                                        <Button to={props.to}>  {props.buttonLabel}</Button>
                                    :
                                        props.id==="collection"  
                                        ?
                                            <CollectiveButton2 to="/mint"> GO TO MINT</CollectiveButton2>
                                        :
                                            ""
                                }
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    
                    <Column2>  
                        <ImgWrap id={props.id+"IMG"}>
                            <Img src={props.img} alt="ART IMAGE" style={{filter: "drop-shadow(-1px 1px 4px #000)"}}/>
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