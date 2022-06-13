
import InfoSection from "../gamePageComponents/InfoSection";
import IntroSection from "../gamePageComponents/IntroSection";
import HeaderNavbar from "../gamePageComponents/Navbar";
import {gameInfo} from "../gamePageComponents/InfoSection/Data";
import PlayerSection from "../gamePageComponents/PlayerSection";
import Footer from "../gamePageComponents/Footer";
import GameFaqSection from "../gamePageComponents/Faq";
import BetaSection from "../gamePageComponents/BetaSection";
import WeaponsSection from "../gamePageComponents/weaponsSection";

const GamePage = () => {

  return (
    <div className="Home" id="home" style={{minHeight:"101vh"}}>
      <HeaderNavbar/>
      <IntroSection/>
      <InfoSection {...gameInfo}/>
      <PlayerSection/>
      <WeaponsSection/>
      <BetaSection/>
      <GameFaqSection/>
      <Footer/>
    </div>
  );
};

export default GamePage;