import { useCallback, useEffect, useState } from "react";
import { Modal, Caret } from "../index";
import { ModalBackGround } from "../modal/style";
import { bookMarkType, SortType } from "../../types";
import convertSortTypeToBookMarkType from "../../utility/convertSortTypeToBookmarkType";

interface FilterProps {
    applySortData: (type: SortType) => void;
    handleSortBookMark: React.Dispatch<React.SetStateAction<string[]>>;
    saveFilterTypeAtBookMark: (type: bookMarkType) => void;
    sortType: SortType;
    setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

const Filter = ({applySortData, handleSortBookMark, saveFilterTypeAtBookMark, sortType, setSortType}: FilterProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleToggleModal = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen])

    const handleSortType = useCallback((type: SortType) => {
        let bookmark = convertSortTypeToBookMarkType(type);
        saveFilterTypeAtBookMark(bookmark);
        applySortData(sortType);
        setSortType(type);
    }, [sortType, applySortData, saveFilterTypeAtBookMark, setSortType]);

    const resetFilterData = useCallback(() => {
        setIsModalOpen(false);
        setSortType(SortType.popularity);
        handleSortBookMark([SortType.popularity]);
    }, [handleSortBookMark, setSortType])

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    }, [isModalOpen]);
    
    return (
        <>
            <Caret isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} sortType={sortType}/>
            { isModalOpen && <ModalBackGround isModalOpen={isModalOpen}/> }
            { isModalOpen && <Modal isModalOpen={isModalOpen} handleToggleModal={handleToggleModal} handleSortType={handleSortType} sortType={sortType} resetFilterData={resetFilterData}/>}
        </>
    );
};

export default Filter;


