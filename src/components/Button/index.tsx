import { Link } from "react-router-dom";
import styled from "styled-components/macro";


export const Button = styled(Link)`

    position: relative;
    padding: 10px 30px;
    margin: 0 15px;
    color: #21ebff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    overflow: hidden;
    transition: 0.5s;

    &:hover
    {
        background: #21ebff;
        color: #111;
        box-shadow: 0 0 50px #21ebff;
        transition-delay: 0.5s;
    }

    &:before
    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #21ebff;
        border-left: 2px solid #21ebff;
        transition: 0.5s;
    }

    &:hover:before
    {
        width: 100%;
        height: 100%;
    }

    &:after
    {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #21ebff;
        border-right: 2px solid #21ebff;
        transition: 0.5s;
    }

    &:hover:after
    {
        width: 100%;
        height: 100%;
    }
`;
