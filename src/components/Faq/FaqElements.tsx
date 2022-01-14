import styled from "styled-components/macro";

export const FaqContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 50px;
    background: linear-gradient(-45deg, #7400ff, #d835f5, #239dd5);
    background-size: 400% 400%;
    //transform: skewY(-10deg);
    transform-origin: top left;

    animation: animateBack 18s ease infinite;

    @keyframes animateBack
    {
        0% {
        background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const Section = styled.section`
    //min-height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1
    {
        font-size: 3rem;
        margin: 2rem 0rem;
    }
`;

export const Faq = styled.div`
    width: 1000px;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #fff;
    cursor: pointer;

    @media screen and (max-width: 1024px)
    {
        width: 90%;
    }

`;

export const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3
    {
        font-size: 1.8rem;
    }
`;

export const Answer = styled.div`

    //max-height: 0px;
    overflow: hidden;

    transition: max-height 0.5s ease-in-out;

    & p
    {
        padding-top: 1rem;
        line-height: 1.6;
        font-size: 1.4rem;
    }
`;