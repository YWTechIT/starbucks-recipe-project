import { useCallback, useState } from "react";
import { Card, Container, Footer, NavBar, Comment, FilterBar } from "../../components";
import { RECIPE_SAMPLE } from "../../fixture/recipe";
import { FilterType, RecipeType } from "../../types";
import { CardsContainer } from "../../components/card/style";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Landing = () => {
    const [filteredData, setFilteredData] = useState<RecipeType[]>(RECIPE_SAMPLE);
    const [bookMark, setBookMark] = useLocalStorage<string[]>("likes", []);

    const getSortByFilter = useCallback(
        (type: FilterType) => {
            let sortByTypeData: RecipeType[];
            if (type === FilterType.nameAsc)
                sortByTypeData = [...filteredData].sort((a, b) =>
                    a.title < b.title ? -1 : a.title > b.title ? 1 : 0
                );
            else if (type === FilterType.nameDesc)
                sortByTypeData = [...filteredData].sort((a, b) =>
                    a.title > b.title ? -1 : a.title < b.title ? 1 : 0
                );
            else if (type === FilterType.priceHigh)
                sortByTypeData = [...filteredData].sort(
                    (a, b) => b.price - a.price
                );
            else if (type === FilterType.priceLow)
                sortByTypeData = [...filteredData].sort(
                    (a, b) => a.price - b.price
                );
            else if (type === FilterType.likeHigh)
                sortByTypeData = [...filteredData].sort(
                    (a, b) => b.likes - a.likes
                );
            else if (type === FilterType.likeLow)
                sortByTypeData = [...filteredData].sort(
                    (a, b) => a.likes - b.likes
                )
            else sortByTypeData = [...RECIPE_SAMPLE];
            setFilteredData(sortByTypeData);
        },
        [filteredData]
    );

    return (
        <>
            <NavBar />
            <Container>
                <FilterBar getSortByFilter={getSortByFilter} />
                <CardsContainer>
                    {filteredData.map((item) => (
                        <Card
                            item={item}
                            key={item.id}
                            bookMark={bookMark}
                            handleBookMark={setBookMark}
                        />
                    ))}
                </CardsContainer>
                <Comment />
            </Container>
            <Footer />
        </>
    );
};
export default Landing;
