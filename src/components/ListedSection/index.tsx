import { Card, Container } from "../Cards/CardElements";
import solanalysis from "../../assets/images/listedSites/logo-full-whitetext.png"
import howrareis from "../../assets/images/listedSites/howrareis.png"
import nftcalendar from "../../assets/images/listedSites/nftcalendar-logo.png"
import nftgenie from "../../assets/images/listedSites/nftgenie-logo-long.png"
import radrugs from "../../assets/images/listedSites/radrugs.png"
import { ListedContainer, RADRUGSimg, SiteContainer, SiteContainerRADRUGS } from "./ListedElements";


const ListedSection = ()=>
{
    return(
        <ListedContainer>
            <SiteContainerRADRUGS>
                <a href="https://rankings.radrugs.io/" target="blank">
                    <RADRUGSimg src={radrugs} ></RADRUGSimg>
                </a>
                <a href="https://www.civic.com/solutions/verified-by-civic-pass/" target="blank">
                    <svg className="civic-logo-2021" width="80" height="28" viewBox="0 0 159 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.568 27.697c0-11.634 9.291-21.05 20.733-21.05 7.858 0 14.704 4.438 18.224 11.002a3.264 3.264 0 004.452 1.336c1.594-.875 2.186-2.893 1.32-4.506C46.678 5.864 37.67 0 27.301 0 12.215 0 .001 12.409.001 27.697c0 15.288 12.214 27.697 27.3 27.697 10.368 0 19.377-5.865 23.996-14.48.866-1.613.274-3.63-1.32-4.506a3.264 3.264 0 00-4.452 1.336C42.005 44.31 35.159 48.746 27.3 48.746c-11.442 0-20.733-9.415-20.733-21.05z" fill="#0f0"></path>
                        <path d="M32.293 24.373a5 5 0 01-1.642 3.716v7.917h-6.568v-7.917a5 5 0 01-1.642-3.716c0-2.753 2.206-4.985 4.926-4.985s4.926 2.232 4.926 4.985zM85.602 30.759c-.92 1.418-2.758 2.836-5.079 2.836-3.46 0-5.867-2.482-5.867-5.85 0-3.279 2.452-5.893 5.736-5.893 2.058 0 3.765 1.063 4.904 2.57l4.028-3.59c-1.97-2.57-5.254-4.298-8.932-4.298-6.48 0-11.429 4.963-11.429 11.212 0 6.204 4.817 11.167 11.385 11.167 3.984 0 7.137-1.462 9.633-4.83l-4.379-3.324zM99.178 16.977h-5.692V38.47h5.692V16.977zM92.61 9.355c0 2.083 1.664 3.678 3.722 3.678s3.722-1.595 3.722-3.678-1.664-3.678-3.722-3.678-3.722 1.595-3.722 3.678zM107.947 16.977h-5.911L111.8 38.47h3.941l9.765-21.493h-5.912l-5.823 13.117-5.824-13.117zM134.029 16.977h-5.692V38.47h5.692V16.977zm-6.568-7.622c0 2.083 1.664 3.678 3.722 3.678s3.722-1.595 3.722-3.678-1.664-3.678-3.722-3.678-3.722 1.595-3.722 3.678zM154.621 30.759c-.92 1.418-2.759 2.836-5.079 2.836-3.459 0-5.868-2.482-5.868-5.85 0-3.279 2.452-5.893 5.736-5.893 2.058 0 3.766 1.063 4.904 2.57l4.029-3.59c-1.971-2.57-5.255-4.298-8.933-4.298-6.48 0-11.428 4.963-11.428 11.212 0 6.204 4.817 11.167 11.385 11.167 3.984 0 7.137-1.462 9.633-4.83l-4.379-3.324z" fill="#0f0"></path>
                    </svg>
                </a>
            </SiteContainerRADRUGS>
            <Container style={{marginTop:"0", height:"auto"}}>
                <SiteContainer><a href="https://www.solanalysis.com/upcoming" target="blank"><img src={solanalysis} style={{height:"64px"}}></img></a></SiteContainer>
                <SiteContainer><a href="https://nftgenie.pro/nft.php?id=NTM=" target="blank"><img src={nftgenie} style={{height:"64px"}}></img></a></SiteContainer>
                <SiteContainer><a href="https://howrare.is/" target="blank"><img src={howrareis} style={{height:"64px"}}></img></a></SiteContainer>
                <SiteContainer><a href="https://nftcalendar.io/event/neon-clouds-collective/" target="blank"><img src={nftcalendar} style={{height:"64px"}}></img></a></SiteContainer>
            </Container>
        </ListedContainer>
    );
}

export default ListedSection;