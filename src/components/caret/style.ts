import styled from "styled-components";
import { CaretProps } from ".";

export const CaretButton = styled.button`
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: none;
    padding: 0;
    border-radius: 0;
    min-width: 44px;
    min-height: 44px;
    font-weight: 500;
    font-size: 15px;

    &:hover{
        opacity: 0.6;
    }

    @media screen and (min-width: 768px){
        font-size: 17px;
    }
`;

export const CaretImg = styled.img<CaretProps>`
    transform: ${(props) => props.isModalOpen && "rotate(180deg);"};
    transition: all ease-out .3s;
`