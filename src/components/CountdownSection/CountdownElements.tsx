import styled from "styled-components/macro";

export const Counter = styled.span`
    //background-color: #ff73c920;
    color: #fff;
    flex: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    //height: 100%;

    border: 2px solid #009fff;
    box-shadow: 0px 0px 10px #009fff, 0px 0px 30px #009fff;
    border-radius:15px;
    display: grid;
    grid-template-columns: repeat(9,1fr);
    text-align:center;

    & p:first-child
    {
        font-size: 3em;
    }

    & section p
    {
        color:#fff;
        margin: 10px;
    }

    & section p small
    {
        color:#fff;
    }
    & span
    {
        font-size: 2em;
        color:#fff;
    }

    @media screen and (max-width: 900px)
    {
        & p:first-child
        {
            font-size: 2em;
        }
    }

`;

export const CounterContainer = styled.span`
    display: inline-block;
    color: #000;
    width: 800px;
    height: 10vh;
    //margin-bottom: 100px;


    @media screen and (max-width: 900px)
    {
        width: 100%;
    }
`;
