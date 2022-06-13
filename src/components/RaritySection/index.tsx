import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import {  Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "../InfoSection/InfoElements";
import { RarityForm, RarityFormDiv, SearchButton } from "./RarityElements";
import img from "../../assets/images/Cloudies8.gif";
import GlitchText from "../Glitch";


const RaritySection = () => {

    const [rarityData, setRarity] = useState("");
    const [loading, setLoading] = useState(false);
    const getRarity = (e:any)=>
    {
        e.preventDefault();
        setLoading(true);
        fetch(`https://neonclouds.net:4242/api/collection/info?id=`+e.target.id.value,{
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }}).then(response => response.json())
        .then(data => 
            {
                if(JSON.stringify(JSON.parse(JSON.stringify(data)).rarity)==="null")
                {
                    setRarity("Err");
                    console.log("Errore");
                }
                else
                    setRarity(JSON.stringify(data));
                 
                console.log(data);
                //console.log(JSON.stringify(JSON.parse(JSON.stringify(data)).rarity)); 
                setLoading(false)
            });
    }
    
    return (
        <InfoContainer lightBg={false} id = "RaritySectionContainer">
            <InfoWrapper >
                <InfoRow imgStart={true}>
                    <Column1 id={"rarityCol1"}>
                        <TextWrapper id={"rarityText"}>
                            <TopLine >Rarity</TopLine>
                            <Heading lightText={true}>
                                Check rarity of your cloudy
                            </Heading> 
                            {
                                rarityData!=="" && !loading && rarityData!=="Err"
                                ?
                                    <Subtitle darkText={false} style={{color:"#cd3594"}}>
                                        Name: <span style={{fontStyle:"italic", color:"#fff"}}>{JSON.parse(JSON.stringify(JSON.parse(rarityData).metadata)).name}</span>
                                        <br/>
                                        Top Percentage:<span style={{fontStyle:"italic", color:"#fff"}}> {JSON.parse(JSON.stringify(JSON.parse(rarityData).rarity)).top_percentage.toFixed(2)} %</span>
                                    </Subtitle>
                                :   rarityData===""
                                    ?    ""
                                    :   rarityData === "Err"
                                        ?   <Subtitle darkText={false}>
                                                Errore: Cloudy non trovato
                                            </Subtitle>
                                        :  <CircularProgress/>
                            }
                            
                            <RarityFormDiv>
                                <RarityForm onSubmit={getRarity}>
                                        <input type="text" name="id" placeholder="Search your #cloudy"/>
                                    <SearchButton > Check</SearchButton>
                                </RarityForm> 
                            </RarityFormDiv>
                        </TextWrapper>
                    </Column1>
                    
                    <Column2>  
                        <ImgWrap >
                            {
                                rarityData!=="" && !loading && rarityData!=="Err"
                                ?
                                    <Img src={JSON.parse(JSON.stringify(JSON.parse(rarityData).metadata)).image} alt="ART IMAGE"/>
                                :   rarityData===""
                                    ?   <Img src={img} alt="ART IMAGE"/>
                                    :   rarityData === "Err"
                                        ?   <GlitchText fontSize={"90px"}>??</GlitchText>
                                        :  <CircularProgress/>
                            }
                        </ImgWrap>
                    </Column2>
                        
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default RaritySection;