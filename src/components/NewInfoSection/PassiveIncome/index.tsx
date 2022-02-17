import styled from "styled-components";
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../../InfoSection/InfoElements";


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
        color:#000;
        font-size: 25px;
        margin-top: 30px;
        
    }
`;

const PassiveIncomeSection = (props:InfoProps) =>
{

    return (
        <InfoContainer lightBg={props.lightBg} id = {props.id}>
            <InfoWrapper style={{height:"fit-content", paddingBottom:"50px", paddingTop:"50px"}}>
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                            <TopLine >Rewards</TopLine>
                            <Heading lightText={props.lightText}>
                                Passive Income
                            </Heading> 
                                <Subtitle darkText={props.darkText}>
                                    <UL >
                                        <li>SOL airdrops directly to member wallets</li>
                                        <li>Various NFT collections airdrops</li>
                                        <li>Crypto airdrops</li>
                                    </UL>
                                </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>  
                        <ImgWrap>
                            <Img src={props.img} alt="ART IMAGE" style={{width:"65%"}}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                <div id="passiveIncome" style={{display:"block" , color:"#000", fontSize:"20px"}}>
                    Through the management of our DAO, holders will have decisional power on how to deploy the community funds. 
                    Periodically, the DAO will hold sessions in which members will be able to vote on how to distribute the earnings.
                </div>
            </InfoWrapper>
        </InfoContainer>);
}

export default PassiveIncomeSection;