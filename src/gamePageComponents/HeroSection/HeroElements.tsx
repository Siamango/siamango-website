import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:  0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Player = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & img
    {
        height: 1024px;
    }
`;