import { RecipeType } from "../../types";
import Badge from "../badge";
import { LikeContainer, LikeNumberStyle } from "./style";

interface LikeProps {
    liked: boolean;
    handleLiked: () => void;
    item: RecipeType;
}

const Like = ({ liked, handleLiked, item }: LikeProps) => {
    return (
        <>
            {liked ? (
                <LikeContainer>
                    <Badge liked={liked} handleLiked={handleLiked} />
                    <LikeNumberStyle>좋아요 {item.likes + 1}개</LikeNumberStyle>
                </LikeContainer>
            ) : (
                <LikeContainer>
                    <Badge liked={liked} handleLiked={handleLiked} />
                    <LikeNumberStyle>좋아요 {item.likes}개</LikeNumberStyle>
                </LikeContainer>
            )}
        </>
    );
};

export default Like;
