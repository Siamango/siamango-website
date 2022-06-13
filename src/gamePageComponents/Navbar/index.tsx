import { Header, Nav, VideoBg } from "./NavbarElements";
import video from "../../assets/videos/game.mp4";
import { useEffect } from "react";

const HeaderNavbar = () =>
{
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
            logo.style.fontSize="15vw";
            logo.style.transform="translate(-50%,-50%)";
            logo.style.left="50%";
            logo.style.color="#fff";
            ul.style.opacity="0";
            ul.style.transform="translateX(100px)";
            video.style.opacity="0.5";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <Header id="header">
                <VideoBg id="video" autoPlay loop muted src={video}/>
                <a href="#" id="logo">Roug Duel.</a>
                <Nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Palyer</a></li>
                        <li><a href="#">Stats</a></li>
                    </ul>
                </Nav>
            </Header>
            <div style={{height:"80px"}}/>
        </>);
}

export default HeaderNavbar;