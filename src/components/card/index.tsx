import { useHistory } from "react-router-dom";
import { RecipeType } from "../../types";
import { CardWrapper, ImgStyle, ContentWrapper, Title, Desc, Type, Button, ImgWrapper } from "./style";

interface CardProps {
    item: RecipeType;
}

const Card = ({ item }: CardProps) => {
    let history = useHistory();
    const beverageType = item.type.split("_").join(" ");

    return (
        <CardWrapper>
            <ImgWrapper>
                <ImgStyle src={item.src} alt={item.title} onClick={() => history.push(`/recipe/${item.id}`)}/>
            </ImgWrapper>
            <ContentWrapper>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Type>{beverageType}</Type>
                <Type>₩ {item.price.toLocaleString()}</Type>
                <Button onClick={() => history.push(`/recipe/${item.id}`)}>GET THE RECIPE</Button>
            </ContentWrapper>
        </CardWrapper>
    );
};

export default Card;
