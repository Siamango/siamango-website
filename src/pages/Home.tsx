import * as anchor from "@project-serum/anchor";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import { DAOgameData, deflationaryMechanismData, fundInvestmentData, mintData, passiveIncomeData, projectData, rarityData, teamData  } from "../components/InfoSection/Data";
//import CardSection from "../components/Cards/";
import TimeLine from "../components/TimeLine";
//import MintSection from "../components/Mint";
import CollectiveSection from "../components/CollectiveSections";
import FloatingCollective from "../components/FloatingButton";
import FaqSection from "../components/Faq";
import LoreSection from "../components/LoreSection";
import ListedSection from "../components/ListedSection";
import RaritySection from "../components/RaritySection";
import NextGenSection from "../components/NewInfoSection/NextGenGame";
import MenuSection from "../components/MenuSection";
import PassiveIncomeSection from "../components/NewInfoSection/PassiveIncome";
import DaoGameSection from "../components/NewInfoSection/DAOGame";
import FundInvestmentsSection from "../components/NewInfoSection/FundInvestments";
import DeflationarySection from "../components/NewInfoSection/DeflacitionariMechanism";


export interface HomeProps {
  connection: anchor.web3.Connection;
}

const Home = (props: HomeProps) => {

  return (
    <div className="Home" id="home" style={{background:"#f9f9f9"}}>
      <Navbar connection={props.connection}/>
      <HeroSection />
      <MenuSection/>
      <InfoSection {...mintData}/>
      <PassiveIncomeSection {...passiveIncomeData}/>
      <DaoGameSection {...DAOgameData}/>
      <NextGenSection/>
      <FundInvestmentsSection {...fundInvestmentData}/>
      <DeflationarySection {...deflationaryMechanismData}/>
      <LoreSection/>
      
      <ListedSection/>
      <TimeLine />
      <InfoSection {...teamData}/>
      <FaqSection/>
      
      <Footer/>
    </div>
  );
};

export default Home;
//<FloatingCollective/>