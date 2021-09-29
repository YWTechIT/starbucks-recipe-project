import styled from "styled-components";

export const ContainerWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        display: grid;
        margin: 20px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px){
        display: grid;
        margin: 20px;
        grid-template-columns: repeat(3, 1fr);
    }

`;