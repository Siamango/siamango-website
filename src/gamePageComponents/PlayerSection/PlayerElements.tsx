import styled from "styled-components/macro";

export const PlayerContainer= styled.div`
    background: #aaa;
    width: 100%;
    position: relative;
`;

export const PlayerLeft = styled.div`
    background:#000;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    width: 50%;
    z-index: -1;

    & img 
    {
        position: absolute;
        right: 350px;
        height: 100%;
        animation: animateLeft 18s ease infinite;

        @keyframes animateLeft
        {
            5% {
                right: 350px;
            }
            7% {
                right: 100px;
            }
            12% {
                right: 350px;
            }

            60% {
                right: 350px;
            }
            62% {
                right: 150px;
            }
            70% {
                right: 350px;
            }
            
            90% {
                right: 350px;
            }
            92% {
                right: 100px;
            }
            100% {
                right: 350px;
            }
        }
    }
`;

export const PlayerRight = styled.div`
    background:#fff;
    position: absolute;
    top: 0;
    right: 0;
    height: 600px;
    width: 50%;
    z-index: -1;

    & img 
    {
        position: absolute;
        left: 350px;
        height: 100%;

        animation: animateRight 18s ease infinite;

        @keyframes animateRight
        {
            0% {
                left: 350px;
            }
            2% {
                left: 100px;
            }
            10% {
                left: 350px;
            }

            50% {
                left: 350px;
            }
            52% {
                left: 100px;
            }
            60% {
                left: 350px;
            }

            80% {
                left: 350px;
            }
            81% {
                left: 150px;
            }
            90% {
                left: 350px;
            }
        }
    }
`;

export const PlayerContent = styled.div`
    background:linear-gradient(-45deg, #ac0000,#000);
    position: absolute;
    top:0px;
    left: 50%;
    height:1000px;
    width:1000px;
    transform:rotate(45deg);
    transform-origin: top left;
    display: flex;
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
        transform:rotate(-45deg) translateY(-320px);
        font-size: 10em;
        //text-shadow: -1px 0 #000, 0 1px #000,1px 0 #000, 0 -1px #000 ;
    }
`;