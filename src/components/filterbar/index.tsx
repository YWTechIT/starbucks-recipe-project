import { RECIPE_SAMPLE } from "../../fixture/recipe";
import { FilterType } from "../../types";
import Filter from "../filter";
import { FilterBarContainer } from "./style";

interface FilterBarProps {
    getSortByFilter: (type: FilterType) => void;
}

const FilterBar = ({ getSortByFilter }: FilterBarProps) => {
    return (
        <FilterBarContainer>
            <div>전체 {RECIPE_SAMPLE.length}개</div>
            <Filter getSortByFilter={getSortByFilter} />
        </FilterBarContainer>
    );
};

export default FilterBar;
