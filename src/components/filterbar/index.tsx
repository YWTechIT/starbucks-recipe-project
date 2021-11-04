import { RECIPE_SAMPLE } from "../../fixture/recipe";
import { bookMarkType, SortType } from "../../types";
import Filter from "../filter";
import { FilterBarContainer } from "./style";

interface FilterBarProps {
    applySortData: (type: SortType) => void;
    handleSortBookMark: React.Dispatch<React.SetStateAction<string[]>>;
    saveFilterTypeAtBookMark: (type: bookMarkType) => void;

    sortType: SortType;
    setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

const FilterBar = ({ applySortData, handleSortBookMark, saveFilterTypeAtBookMark, sortType, setSortType }: FilterBarProps) => {
    return (
        <FilterBarContainer>
            <div>전체 {RECIPE_SAMPLE.length}개</div>
            <Filter applySortData={applySortData} handleSortBookMark={handleSortBookMark} saveFilterTypeAtBookMark={saveFilterTypeAtBookMark} sortType={sortType} setSortType={setSortType}/>
        </FilterBarContainer>
    );
};

export default FilterBar;
