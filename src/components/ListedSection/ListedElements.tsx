import styled from "styled-components/macro";

export const SiteContainer = styled.div`
    background: #000;
    border-radius: 5px;
    padding: 20px;
    margin-right:25px;
    margin-left:25px;
    margin-top: 20px;
    transition: 150ms;

    &:hover
    {
        padding:30px;
        background: #2c2c2c;
        
    }
`;

export const SiteContainerRADRUGS = styled.div`
    background: #000;
    border-radius: 7px;
    padding: 20px;
    margin-top: 20px;
    transition: 150ms;
    text-align: center; 
    width: fit-content;

    margin-left: auto;
    margin-right: auto;

    &:hover
    {
        padding:30px;
        background: #2c2c2c;
        
    }

    @media screen and (max-width: 768px)
    {
        width: 80%;
    }
`;

export const RADRUGSimg = styled.img`
    height: 100px;

    @media screen and (max-width: 768px)
    {
        width: 85%;
        height: 20%;
    }
`;

export const ListedContainer = styled.div`
    height: auto;
    padding: 20px 0px;
`;