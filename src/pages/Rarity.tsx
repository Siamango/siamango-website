
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { RarityMain, RarityContainer, RarityForm, RarityFormDiv, SearchButton } from "../components/Rarity/RarityElements";
import Navbar from "../components/Navbar";
import { Box, CollectiveBody } from "../components/Collective/CollectiveElements";
import GlitchText from "../components/Glitch";

const RarityPage = () => {

    const [rarityData, setRarity] = useState("");
    const [loading, setLoading] = useState(false);
    const getRarity = (e:any)=>
    {
        e.preventDefault();
        setLoading(true);
        fetch(`https://neonclouds.net:5555/api/collection/info?id=`+e.target.id.value,{
        method: "GET",
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }}).then(response => response.json())
        .then(data => {setRarity(JSON.stringify(data)); console.log(data); setLoading(false)});
        
        
    }
    
    return (
        <div style={{height:"100vh", background:"#000"}}>
            <Navbar/>
            <RarityContainer>
                <RarityMain>
                    <RarityFormDiv>
                        <RarityForm onSubmit={getRarity}>
                                <input type="text" name="id" placeholder="Search your cloudy #"/>
                            <SearchButton > Search your cloudy</SearchButton>
                        </RarityForm> 
                    </RarityFormDiv>
                    
                    {loading
                    ? <CircularProgress />
                    :  rarityData!==""
                        ?   
                            <CollectiveBody>
                                <Box>
                                    <span>
                                        <div style={{textAlign:"center", marginTop:"50px"}}>
                                            <img src={JSON.parse(JSON.stringify(JSON.parse(rarityData).metadata)).image} alt="Cloudy IMG" width="250px"/>
                                            <br/>
                                            Cloudy ID: {JSON.parse(rarityData).name}
                                            <GlitchText>ALL STATS COMING SOON</GlitchText>
                                        </div>
                                    </span>
                                </Box>
                            </CollectiveBody>
                        :   <CollectiveBody>
                                <h1>SEARCH YOUR CLOUDIE</h1>
                            </CollectiveBody>
                    }
                </RarityMain>
            </RarityContainer>
        </div>
    );
};

/*<br/>
                                            Rarity Level:
                                            <div style={{height:"10px", width: ((100-(JSON.parse(rarityData).rarityScore/1569)*100)).toString()+"%", background:"#fff", padding:"0px 10px"}}/>

                                            <br/>
                                             {JSON.parse(rarityData).rarityScore}/1569
                                            <br/>
                                            Top: {((JSON.parse(rarityData).rarityScore/1569)*100).toFixed(2)} %
                                            <br/>
                                            Background: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[0])).value}
                                            <br/>
                                            Skin: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[1])).value}
                                            <br/>
                                            Clothing: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[2])).value}
                                            <br/>
                                            Facial hair: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[3])).value}
                                            <br/>
                                            Eyes: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[4])).value}
                                            <br/>
                                            Head: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[5])).value}
                                            <br/>
                                            Glasses: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[6])).value}
                                            <br/>
                                            Mouth: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[7])).value}
                                            <br/>
                                            {  
                                                JSON.parse(rarityData).attributes.lenght===9
                                                ?
                                                    <>Earrings: {JSON.parse(JSON.stringify(JSON.parse(rarityData).attributes[8])).value}</>
                                                :   ""
                                            }*/

export default RarityPage;  

