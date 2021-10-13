import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    position: sticky;
    top: -1px;
    background-color: #006c49;
    padding: 1.325rem;
    color: #ffffff;
    font-size: 22px;
    letter-spacing: 1.92px;
    font-weight: 700;
    line-height: 17px;
    z-index: 1;

    @media screen and (min-width: 768px){
        padding: 1.625rem;
        font-size: 24px;
    }
`;


export const LinkStyle = styled(Link)`
    font-weight: 700;
    padding: 0 0.625rem;
`