import styled from "styled-components";
import logo from "../assets/images/logo-compressed.png";
import GlitchText from "../components/Glitch";

const Page404Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    //text-align: center;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    justify-content: center;
    align-items: center;
`;

const Page404 = ()=>
{
    return(
        <Page404Container>
            <img src={logo} alt="NEON CLOUDS" style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}/>
            <div style={{ marginLeft:"auto", marginRight:"auto"}} ><GlitchText fontSize="4em">Page non found</GlitchText></div>
        </Page404Container>);
} 

export default Page404;