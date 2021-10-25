import { useRef } from "react";
import {
    ModalContainer,
    ModalContentItem,
    ModalContentList,
    ModalContentSelect,
    ModalContentTitle,
    ModalHeader,
    ModalResetButton,
} from "./style";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import { FilterType } from "../../types";
import { modalFixture } from "../../fixture/filter";

interface ModalProps {
    handleToggleModal: () => void;
    handleDataType: (type: FilterType) => void;
    currentFilterType: FilterType;
    resetFilterData: () => void;
}

export interface ModalContentProps {
    currentFilter: FilterType;
    target: FilterType;
}

const Modal = ({ handleToggleModal, handleDataType, currentFilterType, resetFilterData }: ModalProps) => {
    const modalEl = useRef<HTMLDivElement>(null);
    useOnClickOutside(modalEl, handleToggleModal);

    return (
        <ModalContainer ref={modalEl}>
            <>
                <ModalHeader>정렬</ModalHeader>
                {currentFilterType !== FilterType.popularity && (
                    <ModalResetButton onClick={() => resetFilterData()}>초기화</ModalResetButton>
                )}
            </>
            <ModalContentList>
                {modalFixture.map((item) => (
                    <ModalContentItem
                        onClick={() => handleDataType(item.filter)}
                        key={item.id}
                    >
                        <ModalContentSelect 
                            currentFilter={currentFilterType} 
                            target={item.filter}
                            key={item.id}
                            onClick={() => handleToggleModal()}
                        >
                            <ModalContentTitle 
                                currentFilter={currentFilterType} 
                                target={item.filter}
                            >{item.title}</ModalContentTitle>
                        </ModalContentSelect>
                    </ModalContentItem>
                ))}
            </ModalContentList>
        </ModalContainer>
    );
};

export default Modal;
