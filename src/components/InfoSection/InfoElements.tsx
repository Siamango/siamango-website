import styled from 'styled-components/macro';

export interface ICPorps
{
    lightBg:any;
}

export const InfoContainer = styled.div<ICPorps>`
    color: #fff;
    background: ${({lightBg}) => (lightBg? '#f9f9f9' : '#000000')};
    
    transform-origin: top left;
    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px)
    {
        height: fit-content;
    }
    
`;

export interface IRPorps
{
    imgStart:any;
}

export const InfoRow = styled.div<IRPorps>`
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px)
    {
        grid-template-areas: ${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:  col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:  col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #009fff;//#009fff;
    font-size:  16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    //text-transform: uppercase;
    margin-bottom:  16px;
    /*text-shadow: 0em 0em 0.1em #009fff;*/
`;

export interface HPorps
{
    lightText:any;
}

export const Heading = styled.h1<HPorps>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600; 
    color: ${({lightText}) => (lightText? '#f7f8fa' : '#000')};
    /*text-shadow: 
        0.02em 0.1em 0.1em rgb(161, 161, 161),
        0em 0em 0.1em #ed6fff;*/

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }
`;

export interface STPorps
{
    darkText:any;
}
export const Subtitle = styled.p<STPorps>`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText? '#000000' : '#fff')};
    
`;

export const BtnWrap = styled.div`
    
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    text-align: center;
`;

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right:  0;
    border-radius: 5%;

    @media screen and (max-width: 768px)
    {
        width: 100%;
    }
    
`;