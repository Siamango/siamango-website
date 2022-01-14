import styled from "styled-components";
export interface GlitchIntProps{
    fontSize?:any;
}
export const GlitchSection = styled.p<GlitchIntProps>`
    font-family: 'Prompt', sans-serif;
    font-size: ${({fontSize}) => (fontSize)};
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    text-shadow: 
        0.05em 0 0 rgba(255,0,0, .75),
        -0.025em -.05em 0 rgba(0,255,0, .75),
        0.025em 0.05em 0 rgba(0,0,255, .75);
    animation: glitch 800ms infinite;

    @keyframes glitch
    {
        0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
        }
        14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
        }
        15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        16% {
            text-shadow: none;
        }
        48% {
            text-shadow: none;
        }
        49% {
            left:0;
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        50% {
            left:10px;
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75), 
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        51% {
            left:0px;
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75), 
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        52% {
            text-shadow: none;
        }
        97% {
            text-shadow: none;
        }
        98% {
            left:0;
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75), 
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        99% {
            left:-10px;
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75), 
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
        }
        100% {
            left:0;
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                -0.02em -0.02em 0 rgba(0, 255, 0, 0.75),
                -0.02em -0.05em 0 rgba(0, 0, 255, 0.75);
        }
    }
`;

export const GlitchSpan = styled.span`
    font-family: 'Prompt', sans-serif;
    position: absolute;
    top:0;
    left:0;

    &:first-child
    {
        animation: glitch 850ms infinite;
        clip-path: polygon(0 0,100% 0,100% 10%, 0 40%);
        //transform: translate(-0.02em, -0.025em);
        //opacity: 0.8;
    }

    &:last-child
    {
        animation: glitch 450ms infinite;
        clip-path: polygon(0 70%, 100% 60%, 100% 80%, 0 100%);
        //transform: translate(0.03em, 0.025em);
        //opacity: 0.8;
    }

`;