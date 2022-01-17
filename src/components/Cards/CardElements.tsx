import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    //margin-top: -200px;
    width: 100%;
    height: fit-content;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;

    & .card:hover .content
    {
        visibility: visible;
        opacity: 1;
        margin-top: -40px;
    }

    /*& .card:hover .imgBox h1
    {
        //color: rgb(205, 53, 148);
        top: -65px;
    }

    @media screen and (max-width: 1665px)
    {
        height: fit-content;
    }*/

    @media screen and (max-width: 1020px)
    {
        height: auto;
    }


`;
export const Card = styled.div`

    position: relative;
    max-width: 300px;
    height: 260px;
    background: #000;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
    overflow: visible;
    border-radius: 5px;

    &:hover
    {
        height: 450px;
    }
`;
export const ImgBox = styled.div`

    position:relative;
    width: 250px;
    height: 250px;
    top: -75px;
    left: 10px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);

    & h1
    {
        //width: 220px;
        background: #000;
        color: #00c3ff;
        position: relative;
        padding-top: 10px;//top: -65px;
        //left: 15px;
        text-align: center;
        transition: 0.3s ease-in-out;
    }


    & img
    {
        max-width: 100%;
        border-radius: 5px;
    }

`;
export const Content = styled.div`

    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;

    & h2
    {
        margin-bottom: 5px;
        margin-top: 8px;
        color: rgb(216, 53, 245);
        width: 105%;
    }
    & a i
    {
        margin:20px;
        font-size: 30px;
        transition: 0.1s ease-in-out;
    }
    & a i:hover
    {
        color:rgb(205, 53, 148) ;
    }
`;
