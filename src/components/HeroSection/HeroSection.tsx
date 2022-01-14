import React, { useEffect, useState } from 'react';
import text from "../../assets/images/logo-compressed.png";
import './HeroSection.css';


function HeroSection() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => 
  {
    let logo = document.getElementById('logo')!;
    setOffsetY(window.pageYOffset);
    const position = 10 -window.scrollY/100;
    //console.log(position);

    logo.style.opacity = position+"";
  }
  
  

useEffect(() => {
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
}, [])

  return (
    <div className='hero-container'>
      
      <h1 style={{transform: `translateY(${offsetY*0.6}px)`, }} ><img id="logo" alt ="" src={text} style={{width:"100%", height:"100%"}}></img></h1>
      
    </div>
  );
}
/*<video className="video" loop autoPlay muted playsInline> 
          <source src={video} type="video/mp4" />
          Browser not supported
      </video>
      <p style={{transform: `translateY(${offsetY*0.5}px)`, opacity:`${offsetY===0?1:50/offsetY}`}} >What are you waiting for?</p>
      <div className='hero-btns' style={{transform: `translateY(${offsetY*0.4}px)`, opacity:`${offsetY===0?1:50/offsetY}`}}>
        <div className='btns'>
          <Button
            //buttonStyle='btn--outline'
            //buttonSize='btn--large'
            primary="true"
            dark="true"
            to="project"
            smooth={true} duration={500} spy={true} offset={-80}
          >
          GET STARTED
          </Button>
        </div> 
      </div> */

export default HeroSection;
