import { SortType } from "../types";

const convertBookmarkDataToSortType = (bookMark: string) => {
    let type: SortType;

    if (bookMark ===  "nameAsc") type = SortType.nameAsc;
    else if (bookMark ===  "nameDesc") type = SortType.nameDesc;
    else if (bookMark ===  "priceHigh") type = SortType.priceHigh;
    else if (bookMark ===  "priceLow") type = SortType.priceLow;
    else if (bookMark ===  "likeHigh") type = SortType.likeHigh;
    else if (bookMark ===  "likeLow") type = SortType.likeLow;
    else type = SortType.popularity;

    return type;
};

export default convertBookmarkDataToSortType;