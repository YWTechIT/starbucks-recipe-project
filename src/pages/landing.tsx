import { Card, Container, Footer, NavBar } from "../components";
import { RECIPE_CONFIG } from "../config";

const Landing = () => {
    return (
        <>
            <NavBar />
            <Container>
                {RECIPE_CONFIG.map((item) => (
                    <Card item={item} key={item.id}></Card>
                ))}
            </Container>
            <Footer />
        </>
    );
};
export default Landing;