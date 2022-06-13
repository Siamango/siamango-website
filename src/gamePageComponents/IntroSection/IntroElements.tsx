import styled from "styled-components/macro";

export const IntroContainer = styled.div`
//margin-top: 80px;
    width: 100%;
    height: 600px;
    background:linear-gradient(-30deg, #ac0000,#000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-size: 200% 200%;

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

    & h1
    {
        font-size: 8em;
        padding: 20px;
    }
`;