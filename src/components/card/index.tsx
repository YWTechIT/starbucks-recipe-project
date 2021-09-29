import { useHistory } from "react-router-dom";
import { RecipeType } from "../../types";
import { CardWrapper, ImgStyle, TextWrapper, Title, Content, Type, Button } from "./style";

interface CardProps {
    item: RecipeType;
}

const Card = ({ item }: CardProps) => {
    let history = useHistory();
    const src = item.src;

    return (
        <CardWrapper>
            <ImgStyle src={src[item.alt]} alt={item.alt} onClick={() => history.push(`/recipe/${item.id}`)}/>
            <TextWrapper>
                <Title>{item.title}</Title>
                <Content>{item.desc}</Content>
                <Type>{item.type}</Type>
                <Type>₩ {item.price}</Type>
                <Button onClick={() => history.push(`/recipe/${item.id}`)}>GET THE RECIPE</Button>
            </TextWrapper>
        </CardWrapper>
    );
};

export default Card;
