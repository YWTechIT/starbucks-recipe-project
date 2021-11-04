import { useRef } from "react";
import { ModalContainer, ModalContentSelect, ModalContentTitle, ModalHeader, ModalResetButton } from "./style";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import { SortType } from "../../types";
import { sortFixture } from "../../fixture/sort";

interface ModalProps {
    handleToggleModal: () => void;
    handleSortType: (type: SortType) => void;
    sortType: SortType;
    resetFilterData: () => void;
    isModalOpen: boolean;
}

export interface ModalContentProps {
    sortType: SortType;
    target: SortType;
}

const Modal = ({ handleToggleModal, handleSortType, sortType, resetFilterData, isModalOpen }: ModalProps) => {
    const modalEl = useRef<HTMLDivElement>(null);
    useOnClickOutside(modalEl, handleToggleModal);

    return (
        <ModalContainer ref={modalEl} isModalOpen={isModalOpen}>
            <>
                <ModalHeader>정렬</ModalHeader>
                {sortType !== SortType.popularity && (
                    <ModalResetButton onClick={() => resetFilterData()}>초기화</ModalResetButton>
                )}
            </>
            <ul>
                {sortFixture.map((item) => (
                    <li onClick={() => handleSortType(item.sort)} key={item.id}>
                        <ModalContentSelect 
                            sortType={sortType} 
                            target={item.sort}
                            key={item.id}
                            onClick={() => handleToggleModal()}
                        >
                            <ModalContentTitle sortType={sortType} target={item.sort}>{item.title}</ModalContentTitle>
                        </ModalContentSelect>
                    </li>
                ))}
            </ul>
        </ModalContainer>
    );
};

export default Modal;
