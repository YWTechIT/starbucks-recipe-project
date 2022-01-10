import { useCallback, useLayoutEffect, useState, useEffect } from "react";
import {
    Card,
    Container,
    Footer,
    Header,
    Comment,
    FilterBar,
    Skeleton,
} from "../../components";
import { bookMarkType, SortType, RecipeType } from "../../types";
import {
    convertBookmarkDataToSortType,
    getSortData,
    delayedLoading,
} from "../../utility";
import { RECIPE_SAMPLE } from "../../fixture/recipe";
import { CardsContainer } from "../../components/card/style";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Landing = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [filteredData, setFilteredData] =
        useState<RecipeType[]>(RECIPE_SAMPLE);
    const [likeBookMark, setLikeBookMark] = useLocalStorage<string[]>(
        "likes",
        []
    );

    const [sortType, setSortType] = useState<SortType>(SortType.popularity);
    const [sortTypeBookMark, setSortTypeBookMark] = useLocalStorage<string[]>(
        "sortType",
        []
    );

    // sortType별 레시피 정렬
    const applySortData = useCallback((type: SortType) => {
        let sortData = getSortData(type);
        setFilteredData(sortData);
    }, []);

    // sortType bookmark에 저장
    const saveFilterTypeAtBookMark = useCallback(
        (type: bookMarkType) => {
            setSortTypeBookMark([type]);
        },
        [setSortTypeBookMark]
    );

    // hashTag별 filtering
    const showSameHashTagRecipe = useCallback((tag: string) => {
        let filteredData: RecipeType[] = RECIPE_SAMPLE.filter((recipe) =>
            recipe.tags.includes(tag)
        );
        setFilteredData(filteredData);
    }, []);

    // 렌더링 되기 전 bookmarkType 적용
    useLayoutEffect(() => {
        const [bookMarkData] = [...sortTypeBookMark];
        const sortType = convertBookmarkDataToSortType(bookMarkData);
        setSortType(sortType);
        applySortData(sortType);
    }, [sortTypeBookMark, applySortData]);

    // Skeleton UI
    useEffect(() => {
        delayedLoading(false).then(setLoading);
    }, []);

    return (
        <>
            <Header />
            <Container>
                {loading ? (
                    <Skeleton />
                ) : (
                    <>
                        <FilterBar
                            applySortData={applySortData}
                            handleSortBookMark={setSortTypeBookMark}
                            saveFilterTypeAtBookMark={saveFilterTypeAtBookMark}
                            sortType={sortType}
                            setSortType={setSortType}
                        />
                        <CardsContainer>
                            {filteredData.map((item) => (
                                <Card
                                    item={item}
                                    key={item.id}
                                    likeBookMark={likeBookMark}
                                    handleBookMark={setLikeBookMark}
                                    getSameHashTagRecipe={showSameHashTagRecipe}
                                />
                            ))}
                        </CardsContainer>
                    </>
                )}
                <Comment />
            </Container>
            <Footer />
        </>
    );
};
export default Landing;
