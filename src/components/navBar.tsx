import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    position: sticky;
    height: 48px;
    top: -1px;
    background-color: #006c49;
    padding: 0.625rem;
    color: #ffffff;
    font-size: 22px;
    letter-spacing: 1.92px;
    font-weight: 700;
    line-height: 17px;
`;

const LinkStyle = styled(Link)`
    font-weight: 700;
    padding: 0 0.625rem;
`

const NavBar = () => {
    return <NavBarWrapper>
        <ul>
            <li><LinkStyle to = "/">STARBUCKS</LinkStyle></li>
        </ul>
    </NavBarWrapper>;
};

export default NavBar;
