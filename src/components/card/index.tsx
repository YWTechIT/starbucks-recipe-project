import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Clock from "../../assets/icon/clock";
import { RecipeType } from "../../types";

interface CardProps {
    item: RecipeType;
}

const CardWrapper = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0;
    background-color: #f1f0ea;
    cursor: pointer;
`;

const ImgStyle = styled.img`
    width: 100%;
    height: 356px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 24px;
    transition: 1s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const TextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TimeRequired = styled.section`
    display: flex;
    align-items: center;
    padding: 1.25rem 1.25rem 1.25rem;
`

const Title = styled.h3`
    font-size: 27px;
    color: #32312d;
    font-weight: 400;
    margin-bottom: 11px;
`;

const Content = styled.span`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.56);
    margin-bottom: 8px;  
`;

const Type = styled.span`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: .0125rem;
    color: #1E3932;
`

const Button = styled.button`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #006c49;
    border-radius: 1.09375rem;
    min-width: 175px;
    border: 1px solid #006c49;
    letter-spacing: .11063rem;
    padding: .6325rem .9375rem;
    margin: .6325rem auto 0 auto;
    &:hover {
        color: #FFFFFF;
        background-color: #006c49;
    }
`;

const Card = ({ item }: CardProps) => {
    let history = useHistory();
    const src = item.src;

    return (
        <CardWrapper onClick={() => history.push(`/recipe/${item.id}`)}>
            <ImgStyle src={src[item.alt]} alt={item.alt}/>
            <TextWrapper>
                <TimeRequired><Clock size={20} color="#006c49"/>{item.required}분</TimeRequired> 
                <Title>{item.title}</Title>
                <Content>{item.desc}</Content>
                <Type>{item.type}</Type>
                <Button>GET THE RECIPE</Button>
            </TextWrapper>
        </CardWrapper>
    );
};

export default Card;
