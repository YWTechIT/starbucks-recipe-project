import { RECIPE_SAMPLE } from "../fixture/recipe";
import { SortType, RecipeType } from "../types";

const getSortData = (sortType: SortType) => {
    let initData = [...RECIPE_SAMPLE];  // RECIPE_SAMPLE 복사
    let newSortedData: RecipeType[];  // SortType에 맞는 데이터로 정렬

    if (sortType === SortType.nameAsc)
        newSortedData = initData.sort((a, b) =>
            a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        );
    else if (sortType === SortType.nameDesc)
        newSortedData = initData.sort((a, b) =>
            a.title > b.title ? -1 : a.title < b.title ? 1 : 0
        );
    else if (sortType === SortType.priceHigh)
        newSortedData = initData.sort((a, b) => b.price - a.price);
    else if (sortType === SortType.priceLow)
        newSortedData = initData.sort((a, b) => a.price - b.price);
    else if (sortType === SortType.likeHigh)
        newSortedData = initData.sort((a, b) => b.likes - a.likes);
    else if (sortType === SortType.likeLow)
        newSortedData = initData.sort((a, b) => a.likes - b.likes);
    else newSortedData = [...RECIPE_SAMPLE];

    return newSortedData;
};

export default getSortData;
