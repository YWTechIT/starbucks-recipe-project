import heart from "../../assets/heart.svg";
import heartFilled from "../../assets/heartFilled.svg";
import { FilledHeartBadge, HeartBadge } from "./style";

interface LikeProps {
    liked: boolean;
    handleLiked: () => void;
}

const Badge = ({ liked, handleLiked }: LikeProps) => {

    return (
        <>
            {liked ? (
                <FilledHeartBadge
                    src={heartFilled}
                    onClick={() => {
                        handleLiked();
                    }}
                    alt={heartFilled}
                ></FilledHeartBadge>
            ) : (
                <HeartBadge
                    src={heart}
                    onClick={() => {
                        handleLiked();
                    }}
                    alt={heart}
                ></HeartBadge>
            )}
        </>
    );
};

export default Badge;
