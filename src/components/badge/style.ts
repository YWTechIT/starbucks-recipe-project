import styled, { keyframes } from "styled-components";

export const pop = keyframes`
    0% {
        transform: scale(1)
    }
    100% {
        transform: scale(1.2)
    }
`;

export const HeartBadge = styled.img`
    width: 24px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 28px;
    }
`;

export const FilledHeartBadge = styled.img`
    width: 24px;
    cursor: pointer;
    animation-name: ${pop};
    animation-duration: 0.2s;

    @media screen and (min-width: 768px) {
        width: 28px;
    }
`;
