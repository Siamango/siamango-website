import styled from "styled-components/macro";

export const RarityContainer = styled.div`
    background-color: #000;
    //height: 100%;
    text-align: center;
`;

export const RarityMain = styled.div`
    text-align: center;
`;

export const RarityForm = styled.form`
    text-align: center;
    & input
    {
        font-size: 20px;
        width: 50%;
        max-width: 800px;
        padding: 10px 30px;
        margin: 10px 30px;
        background: #ffffff63;
        border: 1px solid #fff;
        outline: none;
    }
`;

export const RarityFormDiv = styled.div`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
`;

const CustomSearchButton = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    background: #262c37;
    border: 0px;
    letter-spacing: 2px;
    font-size: 16px;
    transition: 0.5s;

    &:hover
    {
        color:rgba(255,255,255,0.5);
    }

    & span
    {
        display: block;
        position: absolute;
        background: #009fff;
    }

    & span:nth-child(1)
    {
        left:0;
        bottom: 0;
        width: 1px;
        height: 100%;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.5s;
    }

    &:hover span:nth-child(1)
    {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
    }

    & span:nth-child(2)
    {
        left:0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }

    &:hover span:nth-child(2)
    {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
    }

    & span:nth-child(3)
    {
        right:0;
        top: 0;
        width: 1px;
        height: 100%;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.5s;
        transition-delay: 0.5s;
    }

    &:hover span:nth-child(3)
    {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
        transition-delay: 0.5s;
    }

    & span:nth-child(4)
    {
        left:0;
        top: 0;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
        transition-delay: 0.5s;
    }

    &:hover span:nth-child(4)
    {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
        transition-delay: 0.5s;
    }
`;

export interface SearchPorps
{
    children?:any;
}

export const SearchButton = (props:SearchPorps)=>
{
    return(
        <CustomSearchButton type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.children}
        </CustomSearchButton>
    );
}