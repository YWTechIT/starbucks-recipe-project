import { RECIPE_SAMPLE } from "../fixture";
import { RecipeType } from "../types";

interface Methods {
  getRecipe: (targetId: string) => void;
}

class Recipes implements Methods{

  getRecipe = (targetId: string): RecipeType[] => {
    return RECIPE_SAMPLE.filter((ele) => ele.id === targetId);
  }
}

export default new Recipes();