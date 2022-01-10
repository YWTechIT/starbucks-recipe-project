import { RECIPE_SAMPLE } from "../fixture/recipe";
import { RecipeType } from "../types";

interface Methods {
    getRecipe: (targetId: string) => void;
}

export class Recipes implements Methods {
    getRecipe = (targetId: string): RecipeType[] => {
        return RECIPE_SAMPLE.filter((ele) => ele.id === targetId);
    };
}
