import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #006c49;
  padding-top: 3.25rem;
  padding-bottom: 2.75rem;
  text-align: center;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1.92px;
  line-height: 20px;
  font-family: SoDoSansBold, Arial, sans-serif;
`

const Footer = () => {
  return(
    <FooterStyle>여기는 footer입니다.</FooterStyle>
  )
}

export default Footer