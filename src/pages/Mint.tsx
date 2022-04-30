import styled from "styled-components/macro";
import {MintSection, MintProps} from "../components/MintSection";
import img from "../assets/images/logo-compressed.png";
import video from "../assets/videos/glitch.mp4";

const MintPageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000aa;

    img
    {
        height: 50%;
    }

    #title
    {
        font-size: 70px;
        text-align: center;
        text-shadow:rgb(0, 219, 255) -3px 0px 0px, rgb(0, 219, 255) -4px 0px 5px;
    }

    @media screen and (max-width: 900px)
    {
        img
        {
            width: 150%;
            height: auto;
            object-fit: cover;
        }
        #title
        {
            font-size: 50px;
        }
    }

`;

const MintPage = (props:MintProps)=>
{
    return(
        <div >
            <video className="video-background" loop autoPlay muted playsInline> 
                <source src={video} type="video/mp4" />
                Browser not supported
            </video>
            <MintPageContainer>
                    <img id="logo" alt ="" src={img}></img>
                    <div id="title" >
                        FREE MINT
                    </div>
                    <MintSection {...props} />
            </MintPageContainer>
        </div>
    );
}

export default MintPage;