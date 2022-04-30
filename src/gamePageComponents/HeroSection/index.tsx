import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import text from "../../assets/images/logo-compressed.png";
import './HeroSection.css';

const ButtonLink = styled(Link)`
  position:relative;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 30px;
  border-radius: 10px;
  background: linear-gradient(45deg, #0162c8, #55e7fc);
  cursor: pointer;
  margin-bottom: -10vw;
  margin-top: 10vw;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  z-index: 1;

  &:hover
  {
    box-shadow: 0px 0px 35px -5px #55e7fc;
  }

  @media screen and (max-width: 720px )
  {
    margin: 60px;
    font-size: 16px;
  }

  @media screen and (max-width: 1200px )
  {
    margin: 60px;
    font-size: 20px;
  }

`;

function HeroSection() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => 
  {
    let logo = document.getElementById('logo')!;
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
    <div className='hero-container'>
      
      <h1 style={{transform: `translateY(${offsetY*0.6}px)`, }} >
        <img id="logo" alt ="" src={text} style={{width:"100%", height:"100%", zIndex:"-10"}}></img>
      </h1>
      
      
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
