import styled, { keyframes } from "styled-components";
import { ModalContentProps } from ".";

interface ModalProps {
    ref?: React.ForwardedRef<HTMLDivElement>;
    isModalOpen: boolean;
}

export const fadeOut = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
  }
`;

export const ModalContainer = styled.section<ModalProps>`
    width: 100%;
    position: fixed;
    background-color: #f9f9f9;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 12px 8px 32px 8px;
    border-radius: 4px;
    visibility: ${(props) => props.isModalOpen ? "visibility" : "hidden" };
    animation: ${(props) => props.isModalOpen ? fadeOut : fadeIn } 0.4s ease-out;
    transition: animation 0.4s linear;
    z-index: 4;

    @media screen and (min-width: 768px) {
        top: 50%;
        left: 50%;
        width: 375px;
        height: 443px;
        transform: translate(-50%, -50%);
    }
`;

export const ModalBackGround = styled.div<ModalProps>`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    animation-name: ${(props) => props.isModalOpen ? fadeOut : fadeIn };
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
`;

export const ModalHeader = styled.h3`
    text-align: center;
    color: #00000094;
    line-height: 1.5;
    letter-spacing: -0.01em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 16px;
`;

export const ModalResetButton = styled.button`
    position: absolute;
    font-size: 18px;
    top: 6px;
    right: 8px;
    padding: 9px 16px;
    border: none;
    background: none;
    font-weight: 600;
    line-height: 1.2;
    color: #006c49;
    &:hover {
        opacity: 0.7;
    }
    @media screen and (min-width: 768px) {
        top: 8px;
    }
`;

export const ModalContentSelect = styled.button<ModalContentProps>`
    width: 100%;
    background-color: ${(props) => props.sortType === props.target ? "#E8F1ED" : "inherit"};
    padding: 12px 15px;
    border: none;
    border-bottom: 1px solid #ededed;
`;

export const ModalContentTitle = styled.p<ModalContentProps>`
    color: ${(props) => props.sortType === props.target ? "#006c49" : "#00000094"};
    font-weight: ${(props) => props.sortType === props.target ? "800" : "500"};
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: left;
`;
