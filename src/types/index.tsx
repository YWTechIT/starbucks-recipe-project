export interface RecipeType {
    id: string;
    title: string;
    desc: string;
    src: string;
    type: BeverageType;
    step: string[];
    price: number;
}

export enum BeverageType {
    ICED = "ICED_BEVERAGES",
    HOT = "HOT_BEVERAGES"
}