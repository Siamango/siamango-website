import styled from "styled-components/macro";

export const VideoBg = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #000;
    opacity: 0.5;
`;

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    
    background: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 1s;
    
    & #logo
    {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        font-size: 15vw;
        color: #fff;
        font-weight: 700;
        transition: 1s;
        text-decoration: none;
        white-space: nowrap;
        
    }

`;

export const Nav = styled.nav`
    position: relative;
    display: flex;
    //margin-right: 100px;
    padding: 0 100px;
    z-index: 1;

    & ul
    {
        position: relative;
        display: flex;
        transition: 0.5s;
        transition-delay: 0.2s;
        transform: translateX(100px);
        opacity: 0;
    }

    & li 
    {
        list-style: none;
    }

    & a 
    {
        color: #fff;
        display: inline-block;
        padding: 10px 15px;
        font-size: 1.2em;
        text-decoration: none;
    }

    & a:hover 
    {
        color: #b20000;
    }
`;

