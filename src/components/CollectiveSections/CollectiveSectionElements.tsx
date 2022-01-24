import  styled  from "styled-components";

const BtnContainer = styled.div`
    position: relative;
    width: 180px;
    height: 50px;
    margin: 20px;
    cursor: pointer;
`;

const BtnA = styled.a`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00c3ff;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-top: 1px solid rgba(255,255,255,0.1);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    border-radius: 5px;
    color: #fff;
    z-index:1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.2s;
    backdrop-filter: blur(10px);

    &:hover
    {
        letter-spacing: 3px;
        background: #d835f5;
    }

    &:before
    {
        content:'';
        position: absolute;
        top:0;
        left:0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(255,255,255,0.5), transparent);
        transform: skewX(45deg) translateX(0);
        transition: 0.2s;

        
    }

    &:hover:before
    {
        transform: skewX(45deg) translateX(200%);
    }

    
`;

export interface CollectiveButtonProps
{
    children:any;
    to:any;
}

export const CollectiveButton = (props:CollectiveButtonProps)=>
{
    return(
        <BtnContainer>
            <BtnA href={props.to}>{props.children}</BtnA>
        </BtnContainer>
    );

};

const BtnA2 = styled.a`

    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;


    &:hover{
    background: #000;
    color: #fff;
    box-shadow: 0 0 5px #fff,
                0 0 25px #fff,
                0 0 50px #fff,
                0 0 200px #fff;
     //-webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
    }
    &:nth-child(1){
        filter: hue-rotate(270deg);
    }
    &:nth-child(2){
        filter: hue-rotate(110deg);
    }
    & span{
        position: absolute;
        display: block;
    }
    & span:nth-child(1){
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg,transparent,#fff);
        animation: animate1 2s linear infinite;
    }
    @keyframes animate1{
        0%{
            left: -100%;
        }
        50%,100%{
            left: 100%;
        }
    }
    & span:nth-child(2){
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg,transparent,#fff);
        animation: animate2 2s linear infinite;
        animation-delay: 0.5s;
    }
    @keyframes animate2{
        0%{
            top: -100%;
        }
        50%,100%{
            top: 100%;
        }
    }
    & span:nth-child(3){
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(270deg,transparent,#fff);
        animation: animate3 2s linear infinite;
        animation-delay: 1.00s;
    }
    @keyframes animate3{
        0%{
            right: -100%;
        }
        50%,100%{
            right: 100%;
        }
    }


    & span:nth-child(4){
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg,transparent,#fff);
        animation: animate4 2s linear infinite;
        animation-delay: 1.5s;
    }
    @keyframes animate4{
        0%{
            bottom: -100%;
        }
        50%,100%{
            bottom: 100%;
        }
    }

`;


export const CollectiveButton2 = (props:CollectiveButtonProps)=>
{
    return(
        <BtnA2 href={props.to}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.children}
        </BtnA2>
    );

};

