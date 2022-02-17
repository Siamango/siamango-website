import { useEffect } from "react";
import { Link } from "react-scroll";
import { BoxContainer, MenuBox, MenuContainer } from "./MenuElements";
import reward from "../../assets/images/info/rewards.png"
import game from "../../assets/images/info/video-game.png"
import wallet from "../../assets/images/info/wallet.png"
import cloud from "../../assets/images/cloud_cropped.png"

const MenuSection = () =>
{

    const handleScroll = () => {
        const position =  -10 +window.scrollY/80;
        //console.log(height);
        let info = document.getElementById('menuContainer')!;
        let box = document.getElementById('boxcontainer')!;
        //console.log((position+10)/10);
        
        if(info.id==="menuContainer" && position<=0)
        {
            info.style.transform = "skewY("+position+"deg)";
            box.style.opacity = ((position+10)/10) + "";
        }
        else
        {
            info.style.transform = "skewY(0deg)";
            //infoCol.style.transform = "skewY(0deg)";
        }
    };

    useEffect(() => {
        let info = document.getElementById('menuContainer')!;
        let box = document.getElementById('boxcontainer')!;
        info.style.transform = "skewY(-10deg)";
        box.style.opacity = "0";
        //infoCol.style.transform = "skewY(10deg)";
        window.addEventListener('scroll', handleScroll, { passive: true });
        //window.addEventListener('resize', setButton, { passive: true });


        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  

    return(
        <MenuContainer className="container" id="menuContainer">
            
            <BoxContainer id="boxcontainer">
                <Link to="passiveIncome" smooth={true} duration={500} spy={true} offset={-80}>
                    <MenuBox className="box" color={true}>
                        <h1>
                            Passive Income
                        </h1>
                        <img src={reward} height="60"style={{marginRight:"30px"}} alt="passiveIncome"/>
                    </MenuBox>
                </Link>
                <Link to="game" smooth={true} duration={500} spy={true} offset={-80}>
                    <MenuBox className="box" id="box" color={false} >
                        <h1>
                            DAO Game Development
                        </h1>
                        <img src={game} height="60"style={{marginRight:"30px"}} alt="gameDAO"/>
                    </MenuBox>
                </Link>
                <Link to="investments" smooth={true} duration={500} spy={true} offset={-80}>
                    <MenuBox className="box" id="box3" color={true} >
                        <h1>
                            Community Fund
                        </h1>
                        <img src={wallet} height="60" style={{marginRight:"30px"}} alt="fund"/>
                    </MenuBox>
                </Link>
                <Link to="cloud" smooth={true} duration={500} spy={true} offset={-80}>
                    <MenuBox className="box" id="box4" color={false} >
                        <h1>
                            Deflationary Mechanism
                        </h1>
                        <img src={cloud} height="70" style={{marginRight:"20px"}} alt="deflactionary"/>
                    </MenuBox>
                </Link>
            </BoxContainer>
            
        </MenuContainer>
    );
}

export default MenuSection;