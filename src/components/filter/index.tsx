import { useCallback, useEffect, useState } from "react";
import { Modal, Caret } from "../index";
import { ModalBackGround } from "../modal/style";
import { FilterType } from "../../types";

interface FilterProps {
    getSortByFilter: (type: FilterType) => void;
}

const Filter = ({getSortByFilter}: FilterProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentFilterType, setCurrentFilterType] = useState<FilterType>(FilterType.popularity);

    const handleToggleModal = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen])

    const handleDataType = useCallback((type: FilterType) => {
        let filterType: FilterType;
        if (type === FilterType.nameAsc) filterType = FilterType.nameAsc;
        else if (type === FilterType.nameDesc) filterType = FilterType.nameDesc;
        else if (type === FilterType.priceHigh) filterType = FilterType.priceHigh;
        else if (type === FilterType.priceLow) filterType = FilterType.priceLow;
        else if (type === FilterType.likeHigh) filterType = FilterType.likeHigh;
        else if (type === FilterType.likeLow) filterType = FilterType.likeLow;
        else filterType = FilterType.popularity;
        getSortByFilter(filterType);
        setCurrentFilterType(filterType);
    }, [getSortByFilter]);

    const resetFilterData = useCallback(() => {
        setCurrentFilterType(FilterType.popularity);
        getSortByFilter(FilterType.popularity);
    }, [getSortByFilter])

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    }, [isModalOpen]);
    
    return (
        <>
            <Caret isModalOpen={isModalOpen} handleToggleModal={handleToggleModal}/>
            { isModalOpen && <ModalBackGround /> }
            { isModalOpen && <Modal handleToggleModal={handleToggleModal} handleDataType={handleDataType} currentFilterType={currentFilterType} resetFilterData={resetFilterData}/>}
        </>
    );
};

export default Filter;


