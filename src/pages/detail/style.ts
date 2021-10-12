import styled, { keyframes } from "styled-components";

export interface TitleSize {
  size: number;
}

export const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const DetailWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #1f3a34;
    align-items: center;
    text-align: center;
    min-width: 300px;
`;

export const CardWrapper = styled.section`
    width: 100%;
    @media screen and (min-width: 720px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 12px 0;
    }
`

export const ImageWrapper = styled.section`
    width: 100%;
    height: 470px;
    border-radius: 4px;
    @media screen and (min-width: 720px) {
        height: 600px;
        padding: 0px 20px;
    }
    @media screen and (min-width: 1024px) {
        height: 650px;
        padding: 20px 24px;
    }
`

export const ImgStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
`;

export const ContentsWrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    padding: 0 32px;
    @media screen and (min-width: 720px) {
        padding: 0 20px;
    }
    @media screen and (min-width: 1024px) {
        padding: 0 24px;
    }
`

export const Title = styled.h3<TitleSize>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size + "px"};
    font-weight: 400;
    letter-spacing: 0.11063rem;
    margin-bottom: 1.4rem;

    @media screen and (min-width: 720px) {
        font-size: ${(props) => props.size+2 + "px"};
    }

    @media screen and (min-width: 1024px) {
        font-size: ${(props) => props.size+4 + "px"};
    }
`;

export const Price = styled.h3`
    color: #d8dbda;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.11063rem;

    @media screen and (min-width: 720px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 22px;
    }
`

export const HorizonStyle = styled.hr`
    color: #edebe9;
    width: 70%;
    margin: 16px auto;
    border: 0px;
    border-radius: 4px;
    border-bottom: 2px solid;
    opacity: 50%;
    @media screen and (min-width: 720px) {
        margin: 24px auto;
    }
`

export const OrderWrapper = styled.section`
    padding: 0 2.4rem;
    animation-duration: 2s;
    animation-name: ${fadeIn};
`;

export const OrderContents = styled.ul`
    width: 100%;
`;

export const BulletStyle = styled.li`
    display: list-item;
    list-style-type: circle;
    color: #00754a;
    font-size: 20px;
    padding-left: 1.2rem;
`

export const OrderContent = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.18em;
    line-height: 30px;

    @media screen and (min-width: 720px) {
        font-size: 20px;
        line-height: 32px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 22px;
        line-height: 34px;
    }
`;

export const ShareContainer = styled.article`
`