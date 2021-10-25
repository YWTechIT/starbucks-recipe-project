import styled, { keyframes } from "styled-components";
import { ModalContentProps } from ".";

interface ModalProps {
    ref: React.ForwardedRef<HTMLDivElement>;
}

export const fadeIn = keyframes`
    from {
        opacity: 0;
        @media screen and (max-width: 768px){
            transform: translateY(20px);
        }
    }
    to {
        opacity: 3;
        @media screen and (max-width: 768px){
            transform: none;
        }
    }
`;

export const ModalContainer = styled.section<ModalProps>`
    position: fixed;
    z-index: 1;
    background-color: #f9f9f9;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px 64px 8px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 30%);
    border-radius: 4px;
    animation: ${fadeIn} 0.4s ease-in-out;
    z-index: 4;

    @media screen and (min-width: 768px) {
        position: fixed;
        width: 375px;
        height: 443px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        animation: ${fadeIn} 0.4s ease-in-out;
    }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 0
  }
  100% {a
    opacity: 0.38
  }
`;

export const ModalBackGround = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.38;
    overflow: hidden;
    animation: ${fadeOut} 0.4s ease-in-out;
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

export const ModalContentList = styled.ul`
    width: 100%;
`;

export const ModalContentItem = styled.li`
    width: 100%;
`;

export const ModalContentSelect = styled.button<ModalContentProps>`
    width: 100%;
    background-color: ${(props) =>
        props.currentFilter === props.target ? "#E8F1ED" : "inherit"};
    padding: 12px 15px;
    border: none;
    border-bottom: 1px solid #ededed;
`;

export const ModalContentTitle = styled.p<ModalContentProps>`
    color: ${(props) =>
        props.currentFilter === props.target ? "#006c49" : "#00000094"};
    font-weight: ${(props) =>
        props.currentFilter === props.target ? "800" : "500"};
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    text-align: left;
`;
