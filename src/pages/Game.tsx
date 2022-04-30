
import HeroSection from "../gamePageComponents/HeroSection";
import Footer from "../gamePageComponents/Footer";
import Navbar from "../gamePageComponents/Navbar";

const GamePage = () => {

  return (
    <div className="Home" id="home" style={{background:"#f9f9f9"}}>
      <Navbar/>
      <HeroSection />
      <Footer/>
    </div>
  );
};

export default GamePage;
//<InfoSection {...mintData}/>