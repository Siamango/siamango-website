import trat from '../../assets/images/team/trat.jpg';
import guizz from '../../assets/images/team/guizz.jpg';
import nik from '../../assets/images/team/nik.jpg';
import giammy from '../../assets/images/team/giammy.jpg';
import { Container, Card, Content, ImgBox } from "./CardElements";

const CardSection = () =>
{
    return(

            <Container>
                <Card className="card">
                    <ImgBox className="imgBox">
                        <div style={{background:"#000",borderRadius:"5px", height:"250px",  border:"2px solid #888"}}> 
                            <div style={{width:"fit-content", position:"relative", margin:"auto"}}><img src={trat} alt="trat"/></div>
                        </div>
                        <h1>Trat</h1>
                    </ImgBox>
                    <Content className="content">
                        <h2>Backend Developer</h2>
                        <p>The only one who actually knows how the f*** The Cloud works and what goes on on the blockchain.</p>
                        <a href="https://twitter.com/tratteo" target="_blank" > <i className="fab fa-twitter" ></i></a>
                    </Content>
                </Card>
                <Card className="card">
                    <ImgBox className="imgBox">
                        <div style={{background:"#000",borderRadius:"5px", height:"250px",  border:"2px solid #888"}}> 
                            <div style={{width:"fit-content", position:"relative", margin:"auto"}}><img src={guizz} alt="guizz"/></div>
                        </div>
                        <h1>Guizzo</h1>
                    </ImgBox>
                    <Content className="content">
                        <h2>Frontend Developer</h2>
                        <p>The one who knows how to mess up with frontend stuff, made this pretty cool website</p>
                    </Content>
                </Card>
                <Card className="card">
                    <ImgBox className="imgBox">
                        <div style={{background:"#000",borderRadius:"5px", height:"250px",  border:"2px solid #888"}}> 
                            <div style={{width:"fit-content", position:"relative", margin:"auto"}}><img src={nik} alt="nik"/></div>
                        </div>
                        <h1>Nik</h1>
                    </ImgBox>
                    <Content className="content">
                        <h2>Backend Developer<br/>Social Media Manager</h2>
                        <p>Has lost his mental sanity scraping the Solana docs and promoting the Collective on socials</p>
                        <a href="https://twitter.com/CryptoNickyy?t=DnvdA7sFxObeX1vwPBG8-A&s=08" target="_blank"> <i className="fab fa-twitter" ></i></a>
                    </Content>
                </Card>
                <Card className="card">
                    <ImgBox className="imgBox">
                        <div style={{background:"#000",borderRadius:"5px", height:"250px",  border:"2px solid #888"}}> 
                            <div style={{width:"fit-content", position:"relative", margin:"auto"}}><img src={giammy} alt="giammy"/></div>
                        </div>
                        <h1>Giammy</h1>
                    </ImgBox>
                    <Content className="content">
                        <h2>Artist</h2>
                        <p>Has been locked in the basement drawing Cloudies for months</p>
                    </Content>
                </Card>
            </Container>
            
    );
}

export default CardSection;

/*
<ImgBox className="imgBox">
    <img src={nft1}/>
    <h1>Guizzo</h1>
</ImgBox>
*/