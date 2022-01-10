import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RecipeType } from "../../types";
import Like from "../like";
import {
    CardWrapper,
    ImgStyle,
    ContentWrapper,
    Title,
    Desc,
    BeverageType,
    Type,
    Button,
    ImgWrapper,
    HashTagContainer,
    HashTag,
} from "./style";

interface CardProps {
    item: RecipeType;
    likeBookMark: string[];
    handleBookMark: React.Dispatch<React.SetStateAction<string[]>>;
    getSameHashTagRecipe: (tag: string) => void;
}

const onSaved = true;
const offSaved = false;

const Card = ({
    item,
    likeBookMark,
    handleBookMark,
    getSameHashTagRecipe,
}: CardProps) => {
    let history = useHistory();
    const beverageType = item.type.split("_").join(" ");
    const [liked, setLiked] = useState<boolean>(
        likeBookMark.includes(item.id) ? onSaved : offSaved
    );

    const handleSaved = () => {
        if (liked) {
            handleBookMark((bookMarks) =>
                bookMarks.filter((bookMark) => bookMark !== item.id)
            );
        } else {
            handleBookMark((bookMarks) => [...bookMarks, item.id]);
        }
        setLiked((liked) => !liked);
    };

    return (
        <CardWrapper>
            <ImgWrapper>
                <ImgStyle
                    src={item.src}
                    alt={item.title}
                    onClick={() => history.push(`/recipe/${item.id}`)}
                />
            </ImgWrapper>
            <ContentWrapper>
                <Title>{item.title}</Title>
                <HashTagContainer>
                    {item.tags.map((tag, idx) => (
                        <HashTag
                            key={idx}
                            onClick={() => getSameHashTagRecipe(tag)}
                        >{`#${tag} `}</HashTag>
                    ))}
                </HashTagContainer>
                <Desc fontSize="18">{item.desc}</Desc>
                <BeverageType kind={beverageType}>{beverageType}</BeverageType>
                <Type>₩ {item.price.toLocaleString()}</Type>
                <Button onClick={() => history.push(`/recipe/${item.id}`)}>
                    GET THE RECIPE
                </Button>
                <Like liked={liked} handleLiked={handleSaved} item={item} />
            </ContentWrapper>
        </CardWrapper>
    );
};

export default Card;
