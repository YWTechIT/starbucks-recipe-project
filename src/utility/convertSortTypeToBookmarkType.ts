import { bookMarkType, SortType } from "../types";

const convertSortTypeToBookMarkType = (sortType: SortType) => {
    let type: bookMarkType;

    if (sortType ===  SortType.nameAsc) type = bookMarkType.nameAsc;
    else if (sortType === SortType.nameDesc) type = bookMarkType.nameDesc;
    else if (sortType ===  SortType.priceHigh) type = bookMarkType.priceHigh;
    else if (sortType ===  SortType.priceLow) type = bookMarkType.priceLow;
    else if (sortType ===  SortType.likeHigh) type = bookMarkType.likeHigh;
    else if (sortType ===  SortType.likeLow) type = bookMarkType.likeLow;
    else type = bookMarkType.popularity;

    return type;
};

export default convertSortTypeToBookMarkType;