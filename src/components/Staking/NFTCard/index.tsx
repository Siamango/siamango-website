
import { useState } from "react";
import { Box, Content, ImgBx, StakingButton } from "./NFTCardElements";

interface NFTCardProps
{
    nft:any;
    label:any;
    onClick:any; 
}
const NFTCard = (props:NFTCardProps) =>
{
    const [rarityData, setRarity] = useState("");
    const [loading, setLoading] = useState(true);
    const name:string = JSON.parse(JSON.stringify(props.nft)).meta.name;
    const [req, setReq] = useState(false);
    if(!req)
    {
        setReq(true);
        fetch(`https://neonclouds.net:5555/api/collection/info?id=`+name.substring(name.indexOf("#")+1),{
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
                    
                //console.log(data);
                //console.log(JSON.stringify(JSON.parse(JSON.stringify(data)).rarity)); 
                setLoading(false)
            });
    }


    return(
        <Box>
            <ImgBx className="imgBx">
                <img src={JSON.parse(JSON.stringify(props.nft)).meta.image}/>
                <h2>{JSON.parse(JSON.stringify(props.nft)).meta.name}</h2>
            </ImgBx>
            <Content className="content">
                {
                    props.label==="Stake"
                        ?   <StakingButton onClick={props.onClick} color="#21ebff" border_color="#21ebff" shadow_color="#21ebff">{props.label}</StakingButton>
                        :   <StakingButton onClick={props.onClick}  color="#cd3594" border_color="#cd3594" shadow_color="#cd3594">{props.label}</StakingButton>

                }

                <h2> Rarity:<br/>
                    {   rarityData!=="" && !loading && rarityData!=="Err"
                        ?   JSON.parse(JSON.stringify(JSON.parse(rarityData).rarity)).top_percentage.toFixed(2)
                        :   ""
                    } %

                    <br/><br/>$CLOUD<br/>at day:<br/>3

                </h2>
                
            </Content>
        </Box>
    );
}

export default NFTCard;