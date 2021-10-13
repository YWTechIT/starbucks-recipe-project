import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
} from "react-share";
import { GridContainer, URLShareButton, KakaoShareButton, KakaoIcon } from "./style";
import { kakaoLogo, shareImg } from "../../assets";
import useScript from "../../hooks/useScript";
import { useEffect } from "react";

const SocialButtonGroup = () => {
    const currentUrl = window.location.href;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    const Kakao = window.Kakao;

    const handleKakaoMessage = () => {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
              title: "스타벅스 히든 레시피",
              description: "스타벅스에서 할 수 있는 커스텀 음료는 무엇이 있을까?",
              imageUrl: shareImg,
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
                <KakaoIcon src={kakaoLogo}></KakaoIcon>
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
