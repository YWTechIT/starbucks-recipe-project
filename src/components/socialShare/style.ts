import styled from "styled-components";

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 12px;
    margin-bottom: 32px;
`;

export const URLShareButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: #006c49;
    color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 0px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    cursor: pointer;
    &:hover {
        background-color: #2c815b;
        color: #fff;
    }
`;

export const KakaoShareButton = styled.a`
    width: 48px;
    height: 48px;
    border-radius: 22px;
    border: 0px;
    cursor: pointer;
`;

export const KakaoIcon = styled.img`
    width: 48px;
    border-radius: 22px;
`;
