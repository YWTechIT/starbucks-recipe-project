import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
} from "react-share";
import { GridContainer, URLShareButton, KakaoShareButton, KakaoIcon } from "./style";
import useScript from "../../hooks/useScript";
import { useEffect } from "react";

const SocialButtonGroup = () => {
    const currentUrl = window.location.href;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    const Kakao = window.Kakao;
    const kakaoImgSrc = "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/kakao-logo.webp";
    const shareImgSrc = "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/share-img.webp";

    const handleKakaoMessage = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
              title: "커스텀벅스",
              description: "스타벅스 메뉴판에 없는 히든 레시피를 모아보는 사이트",
              imageUrl: shareImgSrc,
              link: {
                webUrl: currentUrl,
                mobileWebUrl: currentUrl,
              },
            },
            buttons: [
              {
                title: "레시피 보러가기",
                link: {
                  webUrl: currentUrl,
                  mobileWebUrl: currentUrl,
                },
              },
            ],
        })
    }

    useEffect(() => {
        if (status === "ready" && Kakao){
            if (!Kakao.isInitialized()){
                Kakao.init("49e503ec733bbdd958568ccf10276790");
            }
        }
    }, [status, Kakao])

    

    return (
        <GridContainer>
            <CopyToClipboard text={currentUrl}>
                <URLShareButton>URL</URLShareButton>
            </CopyToClipboard>
            <KakaoShareButton onClick={handleKakaoMessage}>
                <KakaoIcon src={kakaoImgSrc}></KakaoIcon>
            </KakaoShareButton>
            <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={48} round={true} borderRadius={22} />
            </FacebookShareButton>
            <LineShareButton url={currentUrl}>
                <LineIcon size={48} round={true} borderRadius={22} />
            </LineShareButton>
        </GridContainer>
    );
};

export default SocialButtonGroup;
