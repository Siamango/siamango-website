import GlitchText from '../../components/Glitch';
import { InfoRow, Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img, BtnWrap} from './InfoElements';
import './prova.css';

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
        //<InfoContainer lightBg={props.lightBg} id = {props.id}>
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
                        <Subtitle darkText={props.darkText}>
                            {props.subtitle}
                        </Subtitle>
                    </TextWrapper>
                </Column1>
                
                <Column2>  
                    <ImgWrap id={props.id+"IMG"}>
                        <div id="imgInfo"></div>
                    </ImgWrap>
                </Column2>
                    
            </InfoRow>
        //</InfoContainer>
    )
}

export default InfoSection;

//<Img src={props.img} alt="ART IMAGE" style={{filter: "drop-shadow(-5px 5px 10px #a8141d)"}}/>