import { HeroBg, HeroContainer, HeroContent, Player, VideoBg,  } from './HeroElements';
import video from "../../assets/videos/game.mp4";
import player from "../../assets/images/game/idle.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function HeroSection() 
{
  return (
    <HeroContainer id="home">
      <HeroBg>
          <VideoBg autoPlay loop muted src={video} />
      </HeroBg>
      <HeroContent>
        <Player>
          <img src={player} />
          <img src={player} style={{transform:"scaleX(-1)"}}/>
        </Player>
        <FontAwesomeIcon icon={faChevronDown}/>
        <FontAwesomeIcon icon={faChevronDown}/>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
