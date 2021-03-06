import styled from "styled-components";

interface DescType {
    fontSize: string;
}

interface BeverageKind {
    kind: string;
}

export const CardsContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: grid;
        margin: 20px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const CardWrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f0ea;
    border-radius: 4px;
    margin-bottom: 1.6rem;
    @media screen and (min-width: 768px) {
        width: auto;
        margin: 1.2rem;
        padding-bottom: 0.4rem;
    }
`;

export const ImgWrapper = styled.section`
    width: 100%;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 4px;
`;

export const ImgStyle = styled.img`
    width: 100%;
    height: 390px;
    object-fit: cover;
    object-position: center;
    transition: transform 1s ease;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 330px;
`;

export const Title = styled.h3`
    padding: 0 16px;
    text-align: center;
    font-size: 28px;
    color: #32312d;
    font-weight: 400;
    margin: 0.8rem 1.6rem 0.2rem 1.6rem;
    line-height: 1.2;
`;

export const HashTagContainer = styled.section`
    padding: 0 32px;
    line-height: 1.8;
`;

export const HashTag = styled.span`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #006241;
    cursor: pointer;
`;

export const Desc = styled.span<DescType>`
    font-size: ${(props) => props.fontSize + "px"};
    text-align: center;
    color: #0000008e;
    padding: 0rem 3rem;
    line-height: 1.3;
`;

export const BeverageType = styled.span<BeverageKind>`
    font-size: 16px;
    color: ${(props) =>
        props.kind === "ICED BEVERAGES" ? "#0076ff" : "#d62b20"};
    font-weight: 400;
    letter-spacing: 0.0125rem;
    line-height: 1.2;
`;

export const Type = styled.span`
    font-size: 16px;
    color: #0000008e;
    font-weight: 400;
    letter-spacing: 0.0125rem;
    line-height: 1.2;
`;

export const Button = styled.button`
    display: inline-block;
    background-color: inherit;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #006c49;
    border-radius: 50px;
    min-width: 200px;
    min-height: 35px;
    border: 1.2px solid #006c49;
    letter-spacing: 0.11063rem;
    padding: 0.8rem 1.6rem;
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
    line-height: 1.2;
    &:hover {
        background-color: #e8f1ed;
        transition: all 0.2s ease;
    }
`;
