import styled from "styled-components";

export const BetaContainer = styled.div`
    height: 400px;
    width: 100%;
    background-color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1
    {
        color: white;
        font-size: 4em;
    }
`;

const DownloadButtonA = styled.a`
    cursor: pointer;
    margin: 30px;
    position: relative;
    background: white;
    
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding:  10px 30px;
    transition: 0.5s;
    
    &:hover
    {
        letter-spacing: 0.25em;
        background: #ac0000;
        //color: #ac0000;
        box-shadow: 0 0 35px #ac0000;
    }
    &:before
    {
        content:'';
        position: absolute;
        inset: 2px;
        background: #000;
    }
    & span
    {
        position: relative;
        z-index: 1;
        color: #ac0000;
        transition: 0.5s;
    }
    &:hover span
    {
        color: #fff;
    }
    & i
    {
        position:absolute;
        inset: 0;
        display: block;
    }

    & i::before
    {
        content: '';
        position: absolute;
        top: 0;
        left: 80%;
        width: 25px;
        height: 4px;
        background: #000;
        transform: translateX(50%) skewX(325deg);
        transition: 0.5s;
    }

    &:hover i::before
    {
        width: 40px;
        left: 10%;
    }

    & i::after
    {
        content: '';
        position: absolute;
        bottom: 0;
        right: 80%;
        width: 25px;
        height: 4px;
        background: #000;
        transform: translateX(50%) skewX(325deg);
        transition: 0.5s;
    }

    &:hover i::after
    {
        width: 40px;
        right: 20%;
    }
`;

export const DownloadButton = () =>
{
    return(
        <DownloadButtonA>
            <span>
                download now
            </span><i></i>
        </DownloadButtonA>
    );
}
