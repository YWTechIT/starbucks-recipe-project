export interface RecipeType {
    id: string;
    title: string;
    desc: string;
    src: string;
    type: BeverageType;
    step: string[];
    price: number;
    tags: string[];
    likes: number;
}

export enum BeverageType {
    ICED = "ICED_BEVERAGES",
    HOT = "HOT_BEVERAGES",
}

export enum SortType {
    nameAsc = "이름 오름차순",
    nameDesc = "이름 내림차순",
    priceHigh = "높은가격순",
    priceLow = "낮은가격순",
    popularity = "인기순",
    likeHigh = "좋아요높은순",
    likeLow = "좋아요낮은순",
}

export enum bookMarkType {
    nameAsc = "nameAsc",
    nameDesc = "nameDesc",
    priceHigh = "priceHigh",
    priceLow = "priceLow",
    popularity = "popularity",
    likeHigh = "likeHigh",
    likeLow = "likeLow",
}

export interface SortFixtureType {
    id: string;
    title: string;
    sort: SortType;
}