import { Header, Nav, VideoBg } from "./NavbarElements";
import video from "../../assets/videos/game.mp4";
import { useEffect, useState } from "react";
import { Link , animateScroll as scroll} from "react-scroll";

const HeaderNavbar = () =>
{

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleScroll = () => {
        console.log(window.scrollY);
        const header = document.getElementById('header')!;
        const logo = document.getElementById('logo')!;
        const video = document.getElementById('video')!;
        const ul = document.querySelector('ul')!;
        if(window.scrollY>0)
        {
            header.style.height="80px";
            logo.style.fontSize="2em";
            logo.style.transform="translate(0, -50%)";
            logo.style.left="100px";
            logo.style.color="#ac0000";
            ul.style.opacity="1";
            ul.style.transform="translateX(0)";
            video.style.opacity="0";
            
        }
        else
        {
            header.style.height="100vh";
            logo.style.fontSize="7vw";
            logo.style.transform="translate(-50%,-50%)";
            logo.style.left="50%";
            logo.style.color="#fff";
            ul.style.opacity="0";
            ul.style.transform="translateX(100px)";
            video.style.opacity="0.5";
        }
    };
    
    const closeMobileMenuItem = () => 
    {
      setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 1330) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <Header id="header">
                <VideoBg id="video" autoPlay loop muted src={video}/>
                <a href="#" id="logo">Rogue Duel.</a>
                <Nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Palyer</a></li>
                        <li><a href="#">Faqs</a></li>
                        <Link to='menuContainer' className='nav-links' onClick={closeMobileMenuItem}
                            smooth={true} duration={500} spy={true} offset={-200}>
                            Download
                        </Link>
                    </ul>
                </Nav>
            </Header>
            <div style={{height:"80px"}}/>
        </>);
}

export default HeaderNavbar;