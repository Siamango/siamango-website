import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../../InfoSection/InfoElements";
import styled from "styled-components/macro";

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

const FundInvestmentsSection = (props:InfoProps)=> 
{
    return (
        <InfoContainer lightBg={props.lightBg} id ={props.id} >
            <InfoWrapper style={{height:"fit-content", paddingTop:"50px", paddingBottom:"50px"}}>
                <InfoRow imgStart={props.imgStart}>
                    <Column1 id={props.id+"Col"}>
                        <TextWrapper id={props.id+"Text"}>
                            <TopLine>Investments</TopLine>
                            <Heading lightText={props.lightText}>
                                Community Fund
                            </Heading> 
                                <Subtitle darkText={props.darkText}>
                                    <UL>
                                        <li>Charged by 58% of the secondary market royalties</li>
                                        <li>Investments in the crypto space</li>
                                        <li>Managed by the DAO <br/>(The Collective)</li>
                                    </UL>
                                    
                                </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>  
                        <ImgWrap style={{}}>
                            <Img src={props.img} alt="ART IMAGE" style={{width:"75%", border:"0px solid #009fff", borderRadius:"30px", padding:"30px"}} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                <div id="passiveIncome" style={{display:"block" , color:"#000", fontSize:"20px"}}>
                    The fund will power all the activities in our ecosystem.
                    The <span style={{color:"#cd3594"}}>long term sustainability</span> of the community fund is achieved thorugh investments in the crypto space.
                    This will increase passive income and the fund's value over time, resulting in <span style={{color:"#cd3594"}}>more possibilities and rewards for holders</span>.
                    Periodically, holders will be able to select investments options, deciding among different investments profiles with different risk levels.
                </div>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default FundInvestmentsSection;