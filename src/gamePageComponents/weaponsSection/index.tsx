import { LeftElement, PassiveContent, PassiveTitle, RightElement, WeaponsSectionContainer, WeaponsContent, WeaponsTitle } from "./WeaponsElements";
import weapon0 from "../../assets/images/weapons/club.png";
import weapon1 from "../../assets/images/weapons/crawbar.png";
import weapon2 from "../../assets/images/weapons/pipe wrench.png";
import weapon3 from "../../assets/images/weapons/rustypole.png";
import weapon4 from "../../assets/images/weapons/shovel.png";
import weapon5 from "../../assets/images/weapons/wrench.png";

import passive0 from "../../assets/images/passive/double_edged_sword.png";
import passive1 from "../../assets/images/passive/luckybastard.png";
import passive2 from "../../assets/images/passive/perfectstance.png";
import passive3 from "../../assets/images/passive/relentless.png";
import passive4 from "../../assets/images/passive/rocksolid.png";
import passive5 from "../../assets/images/passive/thefast.png";
import passive6 from "../../assets/images/passive/vampire.png";
import { useEffect, useState } from "react";

const WeaponsSection = () =>
{

    return (
        <WeaponsSectionContainer>
            <LeftElement>
                <WeaponsContent>
                    <div className="weaponsGroup">
                        <img src={weapon0}/>
                        <img src={weapon1}/>
                        <img src={weapon2}/>
                        <img src={weapon3}/>
                        <img src={weapon4}/>
                        <img src={weapon5}/>
                    </div>
                    <div className="weaponsGroup" style={{marginRight:"0"}}>
                        <img src={weapon0}/>
                        <img src={weapon1}/>
                        <img src={weapon2}/>
                        <img src={weapon3}/>
                        <img src={weapon4}/>
                        <img src={weapon5}/>
                    </div>
                </WeaponsContent>
                <WeaponsTitle>Choose the weapons for the battle</WeaponsTitle>
                <h2>Every weapons has their own stats for attack speed, damage, heavy and mana usage</h2>
            </LeftElement>
            <RightElement>
                <PassiveTitle>
                    Choose your passive ability
                </PassiveTitle>
                <h2>At the start of every single fight you have o choose you passive ability</h2>
                <PassiveContent>
                    <div className="passiveGroup">
                        <img src={passive0}/>
                        <img src={passive1}/>
                        <img src={passive2}/>
                        <img src={passive3}/>
                        <img src={passive4}/>
                        <img src={passive5}/>
                        <img src={passive6}/>
                    </div>
                    <div className="passiveGroup" style={{marginLeft:"0"}}>
                        <img src={passive0}/>
                        <img src={passive1}/>
                        <img src={passive2}/>
                        <img src={passive3}/>
                        <img src={passive4}/>
                        <img src={passive5}/>
                        <img src={passive6}/>
                    </div>
                </PassiveContent>
            </RightElement>
        </WeaponsSectionContainer>
    );
}

export default WeaponsSection;