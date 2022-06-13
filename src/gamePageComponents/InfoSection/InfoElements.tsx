import styled from 'styled-components/macro';

export interface ICPorps
{
    lightBg:any;
}

export interface IRPorps
{
    imgStart:any;
}

export const InfoRow = styled.div<IRPorps>`
    height: 800px;
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
    text-align: end;
    padding: 50px;
    grid-area:  col1;
    display: flex;
    align-items: end;
    flex-direction: column;
`;

export const Column2 = styled.div`
    height: 100%;
    background-color: #000;
    padding: 0 15px;
    grid-area:  col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #ac0000;
    font-size:  16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:  16px;
`;

export interface HPorps
{
    lightText:any;
}

export const Heading = styled.h1<HPorps>`
    margin-bottom: 24px;
    font-size: 80px;
    line-height: 1.1;
    font-weight: 600; 
    color: ${({lightText}) => (lightText? '#f7f8fa' : '#000')};

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
    //max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText? '#000000' : '#fff')};
    
`;

export const BtnWrap = styled.div`
    
    display: flex;
    justify-content: end;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right:  0;
    //border-radius: 5%;

    @media screen and (max-width: 768px)
    {
        width: 100%;
    }
    
`;