import styled from "styled-components/macro";
import { Link } from "react-scroll";

export interface ButtonProps
{
    primary?:any;
    big?:any;
    dark?:any;
    fontBig?:any;
}

export const Button = styled(Link)<ButtonProps>`
    border-radius: 4px;
    background: ${({primary}) => (primary? '#009fff':'#ed6fff') };
    white-space: nowrap;
    padding: ${({big}) => (big? '14px 48px':'12px 30px')};
    color: ${({dark}) => (dark? '#010606':'#fff')};
    font-size: ${({fontBig}) => (fontBig? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary? '#cd3594':'#009fff') };
    }
`;
