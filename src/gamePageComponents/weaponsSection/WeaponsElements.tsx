import styled from "styled-components";

export const WeaponsSectionContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

export const RightElement = styled.div`
    width: 50%;
    background: black;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    & h2 
    {
        color: #d2d2d2;
        margin: 20px;
        text-align: end;
    }
`;

export const LeftElement = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & h2 
    {
        color: #2e2e2e;
        margin: 20px;
        text-align: start;
    }
`;

export const WeaponsContent = styled.div`
    position: relative;
    width: 90%;
    height: 300px;
    background-color: black;
    transform-origin: top right;
    transform: skewX(-25deg);
    display: flex;
    flex-direction: row;
    justify-content: end;
    overflow: hidden;
    z-index: 1;

    & .weaponsGroup
    {
        transform-origin: top right;
        transform: skewX(25deg);
        animation: animatewaeapons 15s linear infinite;
        position: relative;

        width: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin: auto;
        height: 256px;

        @keyframes animatewaeapons
        {
            0%{
                transform: translateX(0px) skewX(25deg);
            }
            
            100%{
                transform: translateX(1896px) skewX(25deg);
            }


        }
    }

    & img
    {
        margin-right: 60px;
    }

    & .blur
    {
        position: absolute;
        right: 400px;
        width: 700px;
        height: 300px;
        background: #000000;
        box-shadow: 100px 0 30px #000;
        transform: skewX(25deg);
        z-index: 3;
    }

   
`;

export const WeaponsTitle = styled.div`
    color: black;
    text-align: start;
    font-size: 4em;
    margin-top: 50px;
    margin: 20px;
`;

export const PassiveContent = styled.div`
    width: 90%;
    height: 300px;
    background-color: white;
    transform-origin: bottom left;
    transform: skewX(-25deg);
    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow: hidden;
    z-index: 1;

    & .passiveGroup
    {
        transform-origin: bottom left;
        transform: skewX(25deg);
        animation: animatepassive 15s linear infinite;
        position: relative;

        width: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin: auto;
        margin-left: 100px;
        height: 256px;

        @keyframes animatepassive
        {
            0%{
                transform: translateX(0px) skewX(25deg);
            }
            
            100%{
                transform: translateX(-2212px) skewX(25deg);
            }


        }
    }

    & img
    {
        margin-right: 60px;
    }

    & .blur
    {
        position: absolute;
        left: 400px;
        width:600px;
        height: 300px;
        background: #ff0000;
        box-shadow: -110px 0 10px #ff0000;
        transform: skewX(25deg);
        z-index: 3;
    }
`;

export const PassiveTitle = styled.div`
    color: white;
    text-align: end;
    font-size: 4em;
    margin-bottom: 50px;
    margin: 20px;
`;
