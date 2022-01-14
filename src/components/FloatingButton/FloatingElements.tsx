import styled  from "styled-components/macro";

export const FloatingContainer = styled.div`
    //width: 200px;
    //height: 200px;
    position: fixed;
    bottom: 60px;
    right: 80px;
    //background: #414141;
    //border-radius: 50%;
    //text-align: center;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;