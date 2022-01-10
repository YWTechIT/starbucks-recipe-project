import { useParams } from "react-router-dom";
import { Footer, Header } from "../../components";
import { Recipes } from "../../api";
import SocialButtonGroup from "../../components/socialShare";
import {
    BulletStyle,
    CardWrapper,
    ContentsWrapper,
    DetailWrapper,
    HorizonStyle,
    ImageWrapper,
    ImgStyle,
    OrderContent,
    OrderContents,
    OrderWrapper,
    Price,
    ShareContainer,
    Title,
} from "./style";

interface ParamTypes {
    id: string;
}

const Detail = () => {
    const { id } = useParams<ParamTypes>();
    const [recipe] = new Recipes().getRecipe(id);

    return (
        <>
            <Header />
            <DetailWrapper>
                <CardWrapper>
                    <ImageWrapper>
                        <ImgStyle src={recipe.src} alt={recipe.title} />
                    </ImageWrapper>
                    <ContentsWrapper>
                        <Title color="#d8dbda" size={26}>
                            {recipe.title}
                        </Title>
                        <Price>₩ {recipe.price.toLocaleString()}</Price>
                        <HorizonStyle />
                        <OrderWrapper>
                            <Title color="#fff" size={26}>
                                사이렌 오더
                            </Title>
                            <OrderContents>
                                {recipe.step.map((item, idx) => (
                                    <section key={idx}>
                                        <BulletStyle>
                                            <OrderContent>{item}</OrderContent>
                                        </BulletStyle>
                                    </section>
                                ))}
                            </OrderContents>
                        </OrderWrapper>
                        <HorizonStyle />
                        <ShareContainer>
                            <Title color="#d8dbda" size={22}>
                                레시피 공유하기
                            </Title>
                            <SocialButtonGroup />
                        </ShareContainer>
                    </ContentsWrapper>
                </CardWrapper>
            </DetailWrapper>
            <Footer />
        </>
    );
};

export default Detail;
