import { LeftElement, PassiveContent, PassiveTitle, RightElement, WeaponsSectionContainer, WeaponsContent, WeaponsTitle } from "./WeaponsElements";
import weapon0 from "../../assets/images/weapons/club.png";
import weapon1 from "../../assets/images/weapons/crawbar.png";
import passive from "../../assets/images/passive/luckybastard.png";
import { useEffect, useState } from "react";

const WeaponsSection = () =>
{

    return (
        <WeaponsSectionContainer>
            <LeftElement>
                <WeaponsContent>
                    <img src={weapon0}/>
                    <img src={weapon1}/>
                </WeaponsContent>
                <WeaponsTitle>Choose the weapons for the battle</WeaponsTitle>
            </LeftElement>
            <RightElement>
                <PassiveTitle>
                    Choose your passive ability
                </PassiveTitle>
                <PassiveContent>
                    <img src={passive}/>
                </PassiveContent>
            </RightElement>
        </WeaponsSectionContainer>
    );
}

export default WeaponsSection;