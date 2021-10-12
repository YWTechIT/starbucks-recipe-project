import styled from "styled-components";

export const CardWrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f0ea;
    padding-bottom: 1.2rem;
    border-radius: 4px;
    @media screen and (min-width: 768px){
        width: auto;
        margin: 1.2rem 1.2rem .8rem 1.2rem;
    }
`;

export const ImgWrapper = styled.section`
    width: 100%;
    overflow: hidden;
    margin-bottom: 16px;
    border-radius: 4px;
`

export const ImgStyle = styled.img`
    width: 100%;
    min-width: 100%;
    height: 410px;
    object-fit: cover;
    object-position: center;
    transition: transform 1s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 27px;
    color: #32312d;
    font-weight: 400;
    margin-top: .8rem; 
    margin-bottom: 1.6rem;
`;

export const Desc = styled.span`
    font-size: 18px;
    color: #0000008e;
    margin-bottom: 1.2rem;
    word-break: keep-all;
`;

export const Type = styled.span`
    font-size: 15px;
    font-weight: 400;

    letter-spacing: .0125rem;
    margin-bottom: 1.2rem;
    color: #0000008e;
`

export const Button = styled.button`
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #006c49;
    border-radius: 50px;
    min-width: 35px;
    min-height: 35px;
    border: 1.2px solid #006c49;
    letter-spacing: .11063rem;
    padding: .8rem 1.6rem;
    margin-bottom: 1.2rem;
    line-height: 1.2;
    &:hover {
        background-color: #E8F1ED;
        transition: all 0.2s ease;
    }
`;