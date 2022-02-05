import styled from "styled-components/macro";

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    transform-origin: top left;
    background: white;
`;

export const BoxContainer = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: 500px;
    max-width: 1100px;
    //margin-right: auto;
    //margin-left: auto;
`;

export interface MBprops
{
    color: any;
}

export const MenuBox = styled.div<MBprops>`
    cursor:pointer;
    position: relative;
    width: 70%;
    height: 100px;
    background: #000;
    
    //transform: skewY(-4deg);
    box-shadow: ${({color}) => (color
                                    ? '0px 10px 1px #2da3ff;'
                                    : '0px 10px 1px #cd3594;')};

    display:flex;
    align-items: center;
    justify-content: space-between;

    margin: auto auto;
    border-radius: 5px;
    
    
    filter: grayscale(0.5);
    animation: ${({color}) => (color? 'animateBgRight' : 'animateBgLeft')} 0.8s linear infinite;
    animation-play-state: paused;
    transition: 0.4s;

    & h1
    {
        margin: 20px;
        font-size: 40px;
        transition: 0.5s;
    }

    & img
    {
        opacity: 0;
        transition: 0.5s;
    }

    &:hover
    {
        animation-play-state: running;
        filter: grayscale(0);
        //width: 75%;
        transform-origin: bottom left;
        transform: skewX(-3deg);
        box-shadow: ${({color}) => (color
                                    ? '10px 10px 1px #2da3ff;'
                                    : '10px 10px 1px #cd3594;')};

        & h1
        {
            //font-size: 50px;
        }

        & img
        {
            opacity: 1;
        }
    }



`;