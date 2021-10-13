import styled from "styled-components";

interface ButtonStyle {
  borderRight: boolean
}

export const FilterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    font-size: 20px;
    color: #0000008e;
    letter-spacing: .0125rem;
    @media screen and (min-width: 768px){
        margin: 20px 3.3rem 0 3.3rem;
    }
`

export const FilterWrapper = styled.section`
    display: flex;
    border: 1px solid #1E3932;
    border-radius: 4px;
    line-height: 1.2;
    transform: scale(1);
`

export const ButtonWrapper = styled.div`
    &:hover{
        background-color: #E8F1ED;
        border-radius: 4px;
    }
`

export const Button = styled.button<ButtonStyle>`
    display: inline-block;
    font-size: 16px;
    background: none;
    color: #00754A;
    border-color: transparent;
    padding: 7px 16px;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    font-weight: 700; 
    border-right: ${(props) => props.borderRight ? "1px solid #1E3932;" : null};
`

