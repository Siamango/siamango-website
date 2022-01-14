import styled from "styled-components/macro";

export const VoteContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    background: transparent;
    border-radius: 10px;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px)
    {
        grid-template-columns: 100%;
    }

    /*@media screen and (max-width: 900px)
    {
        width: 80%;
    }*/

    & p:first-child
    {
        font-size: 2em;
        font-weight: 600;
    }

    & section
    {
        margin: 10px;
    }

`;

export interface VoteButtonPorps
{
    color:any;
    border_color:any;
    shadow_color:any;
}
export const VoteButton = styled.a<VoteButtonPorps>`

    position: relative;
    text-align: center;
    padding: 10px 30px;
    margin: 0 15px;
    color: ${({color}) => (color)};
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: 2px;
    font-size: 20px;
    transition: 0.5s;

    &:hover
    {
        overflow: hidden;
        background: ${({color}) => (color)};
        color: #000;
        box-shadow:0 0 50px ${({shadow_color}) => (shadow_color)};
        transition-delay: 0.5s;
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
        transition: 0.5s;
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
        transition: 0.5s;
    }

    &:hover:after
    {
        width: 100%;
        height: 100%;
    }
`;

const VotesStatus1 = styled.div`
    text-align: end;
    font-size: 40px;
    color: #fff;
    height: 50px;
    width: 100%;
    background: linear-gradient(to left, #008af0, #00ffe7);
`;

const VotesStatus2 = styled.div`
    text-align: start;
    font-size: 40px;
    color: #fff;
    height: 50px;
    width: 100%;
    background: linear-gradient(to left, #a047ac, #b7155e);
`;

export interface VoteBarProps
{
    vote1:any;
    vote2:any;
}

const VoteBarContainer = styled.div<VoteBarProps>`
    height: fit-content;
    width:200%;
    //height: 40px; 
    margin-top: 20px;
    background:#5c5c5c;
    display: grid;
    grid-template-columns: ${({vote1,vote2}) => (vote1 + " 2px " + vote2)};


    @media screen and (max-width: 768px)
    {
        width: 100%;
    }

`;

export const VotesBar = (props:VoteBarProps) => {
    return (
        <VoteBarContainer vote1={props.vote1} vote2={props.vote2}>
            <VotesStatus1>{props.vote1}</VotesStatus1>
            <div style={{background:"#000"}}></div>
            <VotesStatus2>{props.vote2}</VotesStatus2>
        </VoteBarContainer>
    );
}

export interface VoteSectionProps
{
    color:any;
}

export const VoteSection = styled.div<VoteSectionProps>`
    margin: 10px;
    padding:10px;
    height: 100%;
    border: 2px solid ${({color})=>(color)}; 
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
`;