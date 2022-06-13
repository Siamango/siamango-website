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
`;

export const LeftElement = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const WeaponsContent = styled.div`
    width: 90%;
    height: 300px;
    background-color: black;
    transform-origin: top right;
    transform: skewX(-25deg);
    display: flex;
    flex-direction: row;
    justify-content: center;

    & img 
    {
        transform: skewX(25deg);
        margin: 40px;
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
    justify-content: center;

    & img 
    {
        transform: skewX(25deg);
        margin: 40px;
    }
`;

export const PassiveTitle = styled.div`
    color: white;
    text-align: end;
    font-size: 4em;
    margin-bottom: 50px;
    margin: 20px;
`;
