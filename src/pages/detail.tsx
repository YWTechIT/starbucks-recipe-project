import { useParams } from "react-router-dom";
import { NavBar } from "../components";
import styled, { keyframes } from "styled-components";
import { RECIPE_CONFIG } from "../config";
import Clock from "../assets/icon/clock";

interface ParamTypes {
  id: string
}

const DetailWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0px;
    padding: 1.2rem 0;
    background-color: #1f3a34;
`

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

const Recipe = styled.h4`
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: .11063rem;
  animation-duration: 2s;
  animation-name: ${fadeIn};
`

const Title = styled.h1`
  color: #fff;
  line-height: 58px;
  letter-spacing: .11063rem;
  animation-duration: 2s;
  animation-name: ${fadeIn};
  word-break: keep-all;
`

const TimeRequired = styled.section`
    color: #FFF;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem 1.25rem 1.25rem;
    animation-duration: 2s;
    animation-name: ${fadeIn};
`

const ImgStyle = styled.img`
    width: 100%;
    height: 356px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 24px;
`;

const IngredientWrapper = styled.section`
  display: flex;
  padding: 3.125rem 0;
`

const IngredientTitle = styled.h4`
  color: #fff;
  letter-spacing: .11063rem;
`

const StepWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`

const StepTitle = styled.h4`
  color: #006c49;
  letter-spacing: .11063rem;
  font-weight: 600;
`

const Detail = () => {
  const {id} = useParams<ParamTypes>();
  const detailSrc = RECIPE_CONFIG[+(id)-1].detailSrc
  
  return(
    <>
    <NavBar />
    <DetailWrapper>
      <TitleWrapper>
      <Recipe>레시피</Recipe>
      <Title>{RECIPE_CONFIG[+(id)-1].title}</Title>
      <TimeRequired><Clock size={20} color="#FFF"/>{RECIPE_CONFIG[+(id)-1].required} mins</TimeRequired>
      </TitleWrapper>
      <ImgStyle src={detailSrc[RECIPE_CONFIG[+(id)-1].detailAlt]}/>
      <IngredientWrapper>
        <IngredientTitle>Ingredient</IngredientTitle>
      </IngredientWrapper>
    </DetailWrapper>
    <StepWrapper>
      <StepTitle>만드는 방법</StepTitle>
      {/* {RECIPE_CONFIG[+(id)-1].step.map((item) => (item))} */}

    </StepWrapper>
    </>
  )
}

export default Detail;