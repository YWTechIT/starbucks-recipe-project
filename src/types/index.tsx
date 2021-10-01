type SrcType = { [key in string]: string };

export interface RecipeType {
    id: string;
    title: string;
    desc: string;
    src: SrcType;
    alt: string;
    required: string;
    type: string;
    step: string[];
    price: string;
}
