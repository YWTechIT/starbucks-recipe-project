import { Card, Container, Footer, NavBar } from "../components";
import { RECIPE_SAMPLE } from "../fixture";

const Landing = () => {
    return (
        <>
            <NavBar />
            <Container>
                {RECIPE_SAMPLE.map((item) => (
                    <Card item={item} key={item.id}></Card>
                ))}
            </Container>
            <Footer />
        </>
    );
};
export default Landing;