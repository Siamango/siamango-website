import { useEffect, useState } from 'react';
import text from "../../assets/images/game/idle.gif";
import { HeroContainer } from './HeroElements';

function HeroSection() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => 
  {
    let logo = document.getElementById('player')!;
    //let button = document.getElementById('linkButton')!;
    setOffsetY(window.pageYOffset);
    const position = 2 - window.scrollY/500;
    //console.log(position);
    logo.style.opacity = position+"";
    //button.style.opacity = position+"";
  }


  useEffect(() => {
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  }, []);

  return (
    <HeroContainer>
      
      <h1 id="player" style={{transform: `translateY(${offsetY*0.6}px)`, }}>
        <img  alt ="" src={text} style={{width:"100%", height:"100%", zIndex:"-10"}}></img>
        <img  alt ="" src={text} style={{width:"100%", height:"100%", zIndex:"-10"}}></img>
      </h1>
      
      
    </HeroContainer>
  );
}

export default HeroSection;
