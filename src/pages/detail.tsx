import { useParams } from "react-router-dom";
import { Footer, NavBar } from "../components";
import styled, { keyframes } from "styled-components";
import {Recipes} from "../api";

interface ParamTypes {
    id: string;
}

const DetailWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f3a34;
    min-width: 300px;
    text-align: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const Title = styled.h1`
    color: #fff;
    line-height: 6.4rem;
    letter-spacing: 0.11063rem;
    animation-duration: 2s;
    animation-name: ${fadeIn};
    word-break: keep-all;
    padding: 1.4rem;
`;

const ImgStyle = styled.img`
    width: 100%;
    animation-duration: 2s;
    animation-name: ${fadeIn};

    @media screen and (min-width: 720px) {
        width: 70%;
    }

    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`;

const OrderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 3.125rem 0;
`;

const OrderTitle = styled.h4`
    color: #fff;
    font-size: 26px;
    letter-spacing: 0.11063rem;
    margin-bottom: .4rem;
    font-weight: 700;

    @media screen and (min-width: 720px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
`;

const OrderContents = styled.section`
    display: flex;
    flex-direction: column;
    margin: 22px;
    padding: 0 1rem;
    word-break: keep-all;
`;

const BulletStyle = styled.li`
    display: list-item;
    list-style-type: circle;
    color: #00754a;
    font-size: 18px;
    align-self: baseline;
    padding-inline-start: 1.6rem;

    @media screen and (min-width: 720px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 28px;
    }
`

const OrderContent = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.14em;
    line-height: 28px;
    word-break: keep-all;

    @media screen and (min-width: 720px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 24px;
        line-height: 36px;
    }
`;

const Detail = () => {
    const { id } = useParams<ParamTypes>();
    const recipe = new Recipes().getRecipe(id)[0];

    return (
        <>
            <NavBar />
            <DetailWrapper>
                <Title>{recipe.title}</Title>
                <ImgStyle src={recipe.src} alt={recipe.title}/>
                <OrderWrapper>
                    <OrderTitle>사이렌 오더</OrderTitle>
                    <OrderContents>
                        {recipe.step.map((item, idx) => (
                            <>
                            <BulletStyle><OrderContent key={idx}>{item}</OrderContent></BulletStyle>
                            </>
                        ))}
                    </OrderContents>
                </OrderWrapper>
            </DetailWrapper>
            <Footer />
        </>
    );
};

export default Detail;
