import { useCallback, useState } from "react";
import { Card, Container, Footer, NavBar } from "../../components";
import { RECIPE_SAMPLE } from "../../fixture";
import { RecipeType } from "../../types";
import { Button, ButtonWrapper, FilterContainer, FilterWrapper } from "./style";
import Comment from "../../components/comment";

enum SortOrder {
    asc = "asc",
    desc = "desc"
}

enum SortBy {
    price = "price",
    name = "name",
}

enum PriceFilter {
    asc = "가격 높은 순",
    desc = "가격 낮은 순"
}

enum NameFilter {
    asc = "이름 오름차 순",
    desc = "이름 내림차 순"
}

const Landing = () => {
    const [priceSort, setPriceSort] = useState<SortOrder>(SortOrder.asc);
    const [nameSort, setNameSort] = useState<SortOrder>(SortOrder.asc);
    const [filteredData, setFilteredData] = useState<RecipeType[]>(RECIPE_SAMPLE);
        
    const getSortByPrice = useCallback((sortBy: SortBy) => {
        if (sortBy === SortBy.price){
            const sortByPrice = priceSort === SortOrder.asc ? [...RECIPE_SAMPLE].sort((a, b) => a.price - b.price) : [...RECIPE_SAMPLE].sort((a, b) => b.price - a.price);
            const togglePriceSortOrder = priceSort === SortOrder.asc ? SortOrder.desc : SortOrder.asc;
            setFilteredData(sortByPrice);
            setPriceSort(togglePriceSortOrder);
        }else{
            const sortByName = nameSort === SortOrder.asc ? [...RECIPE_SAMPLE].sort((a, b) => a.title < b.title ? -1 : 1) : [...RECIPE_SAMPLE].sort((a, b) => a.title > b.title ? -1 : 1)
            const toggleNameSortOrder = nameSort === SortOrder.asc ? SortOrder.desc : SortOrder.asc;
            setFilteredData(sortByName);
            setNameSort(toggleNameSortOrder);
        }
    }, [priceSort, nameSort])

    return (
        <>
            <NavBar />
            <FilterContainer>
                <div>전체 {RECIPE_SAMPLE.length}개</div>
                <FilterWrapper>
                    <ButtonWrapper>
                        <Button borderRight={true} onClick={() => getSortByPrice(SortBy.price)}>{priceSort === SortOrder.asc ? PriceFilter.desc : PriceFilter.asc}</Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button borderRight={false} onClick={() => getSortByPrice(SortBy.name)}>{nameSort === SortOrder.asc ? NameFilter.asc : NameFilter.desc}</Button>
                    </ButtonWrapper>
                </FilterWrapper>
            </FilterContainer>
            <Container>
                {filteredData.map((item) => (
                    <Card item={item} key={item.id}></Card>
                ))}
            </Container>
            <Comment />
            <Footer />
        </>
    );
};
export default Landing;