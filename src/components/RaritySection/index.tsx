import { Button } from "../Button";
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";

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

const RaritySection = (props: InfoProps) => {
    
    return (
        <InfoContainer lightBg={props.lightBg} id = {props.id}>
            <InfoWrapper >
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                            <TopLine >{props.topLine}</TopLine>
                            <Heading lightText={props.lightText}>
                                {props.headline}
                            </Heading> 
                               
                            <Subtitle darkText={props.darkText}>
                                {props.subtitle}
                            </Subtitle>
                            
                            <BtnWrap>
                                <Button to={props.to}>  {props.buttonLabel}</Button>
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
        </InfoContainer>
    )
}

export default RaritySection;