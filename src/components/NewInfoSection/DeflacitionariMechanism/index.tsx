import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../../InfoSection/InfoElements";
import styled from "styled-components/macro";
import map from "../../../assets/images/info/NeonCloudsMap.png"


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

const MapImg = styled.img`
    max-width: 1100px;

    @media screen and (max-width: 1100px)
    {
        width:90%;
    }
`;

const DeflationarySection = (props:InfoProps)=> 
{
    return (
        <InfoContainer lightBg={props.lightBg} id ={props.id} >
            <InfoWrapper style={{height:"fit-content", paddingTop:"50px"}}>
                <TopLine>The cloud</TopLine>
                <Heading lightText={props.lightText}>
                    Deflationary mechanism: The Cloud
                </Heading>
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                             
                            <Subtitle darkText={props.darkText}>
                                <UL>
                                    <li>Increase the floor price</li>
                                    <li>The Cloud expands thourgh secondary market royalties</li>
                                </UL>
                                
                            </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>  
                        <ImgWrap style={{}}>
                            <Img src={props.img} alt="ART IMAGE" style={{width:"100%"}}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                <div id="passiveIncome" style={{display:"block" , color:"#fff", fontSize:"20px"}}>
                The Cloud is a deflationary system that will zap (burn) elements of the collection having the lowest price on secondary marketplaces, reducing the supply.
                This will increase the floor price and thus the value of the collection.
                The Cloud is initialized with 10% of the minting revenue, and will expand thourgh secondary market royalties.
                <br/><br/>
                After enough mints will have been burned, a next-gen collection will be introduced into the market with a second minting process in which Neon Clouds holders will be automatically whitelisted.
                This introduces new value into the environment, <span style={{color:"#009fff", width:"fit-content"}}>rewarding diamond hands holders</span> and supplying the market with a fresh new form of art.
                </div>
                <MapImg src={map}/>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default DeflationarySection;