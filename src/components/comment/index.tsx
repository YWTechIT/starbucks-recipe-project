import Disqus from "disqus-react";
import { CommentContainer } from "./style";

interface ConfigType {
  url: string;
  identifier: string;
  title: string;
}

const Comment = () => {
    const shortName = "starbucks-recipe";
    const config: ConfigType = {
        url: "http://localhost:3000",
        identifier: "main",
        title: "스타벅스 히든 레시피",
    };
    return (
        <CommentContainer>
            <Disqus.DiscussionEmbed shortname={shortName} config={config} />;
        </CommentContainer>
    );
};

export default Comment;
