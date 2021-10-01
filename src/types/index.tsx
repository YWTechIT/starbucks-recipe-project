type SrcType = { [key in string]: string };

export interface RecipeType {
    id: string;
    title: string;
    desc: string;
    src: string;
    type: string;
    step: string[];
    price: number;
}
