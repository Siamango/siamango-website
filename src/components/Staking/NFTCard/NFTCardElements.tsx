import styled from "styled-components";

export const NFTCardContainer = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;

    & h1
    {
        width: 100%;
        text-align: center;
    }
`;

export const Box = styled.div`
   
    background: linear-gradient(45deg, #009fff, #010615, #cd3594);
    
    position: relative;
    width: 200px;
    height: 200px;
    //display: flex;
    margin: 40px;
    transition: 0.5s ease-in-out;

    &:hover
    {
        box-shadow:  -4px 4px 8px #009fff, 
            4px -4px 8px #cd3594;
    }

    &:hover .imgBx
    {
        transform: translate(-35px, -35px);
    }

    &:hover .content
    {
        transform: translate(35px, 35px);
    }

`;

export const ImgBx = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
    z-index: 1;

    & img 
    {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & h2
    {
        position: absolute;
        text-align: center;
        bottom: 4px;
        left:8px;
        right: 8px;
        border-radius: 4px;
        margin-left: auto;
        margin-right: auto ;
        font-size: 20px;
        z-index: 2;
        color: #ffffff;
        background-color: #00000088;
    }
`;

export const Content = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #222222;
    //z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 15px;
    transition: 0.5s ease-in-out;

    & h2
    {
        position: absolute;
        text-align: center;
        top: 20px;
        right: 8px;
        margin-left: auto;
        margin-right: auto ;
        font-size: 15px;
        color: #ffffff;
    }
`;


export interface StakingButtonPorps
{
    color:any;
    border_color:any;
    shadow_color:any;
}
export const StakingButton = styled.a<StakingButtonPorps>`

    position: relative;
    cursor: pointer;
    text-align: center;
    padding: 10px 20px;
    margin: 0 15px;
    color: ${({color}) => (color)};
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 2px;
    font-size: 20px;
    transition: 0.2s;

    &:hover
    {
        overflow: hidden;
        background: ${({color}) => (color)};
        color: #000;
        box-shadow:0 0 10px ${({shadow_color}) => (shadow_color)};
        transition-delay: 0.3s;
    }

    &:before
    {
        overflow: hidden;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top:  2px solid ${({border_color}) => (border_color)};
        border-left: 2px solid ${({border_color}) => (border_color)};
        transition: 0.2s;
    }

    &:hover:before
    {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    &:after
    {
        overflow: hidden;
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom:  2px solid ${({border_color}) => (border_color)};
        border-right: 2px solid ${({border_color}) => (border_color)};
        transition: 0.2s;
    }

    &:hover:after
    {
        width: 100%;
        height: 100%;
    }
`;