type SrcType = { [key in string]: string };

export interface RecipeType {
    id: string;
    title: string;
    desc: string;
    src: SrcType;
    alt: string;
    required: string;
    type: string;
    detailSrc: SrcType;
    detailAlt: string;
    step: any[];
}
