import * as anchor from "@project-serum/anchor";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import { projectData, teamData  } from "../components/InfoSection/Data";
//import CardSection from "../components/Cards/";
import TimeLine from "../components/TimeLine";
//import MintSection from "../components/Mint";
import CollectiveSection from "../components/CollectiveSections";
import FloatingCollective from "../components/FloatingButton";
import FaqSection from "../components/Faq";
import LoreSection from "../components/LoreSection";
import ListedSection from "../components/ListedSection";
import CountdownSection from "../components/CountdownSection";
import NextGenSection from "../components/NextGenGame";


export interface HomeProps {
  connection: anchor.web3.Connection;
}

const Home = (props: HomeProps) => {

  return (
    <div className="Home" id="home" style={{background:"#f9f9f9"}}>
      <Navbar connection={props.connection}/>
      <HeroSection />
      <InfoSection {...projectData}/>
      <CountdownSection />
      <ListedSection/>
      <LoreSection/>
      <CollectiveSection/>
      <NextGenSection/>
      <TimeLine />
      <InfoSection {...teamData}/>
      
      <FaqSection/>
      <FloatingCollective/>
      <Footer/>
    </div>
  );
};

export default Home;
//<InfoSection {...mintData}/>