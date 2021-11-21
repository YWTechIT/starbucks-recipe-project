import { CaretButton, CaretImg } from "./style"
import caret from "../../assets/caret.svg";
import { SortType } from "../../types";

export interface CaretProps{
  isModalOpen: boolean;
  handleToggleModal?: () => void;
  sortType?: SortType;
  modalType?: SortType;
}

const Caret = ({isModalOpen, handleToggleModal, modalType, sortType}: CaretProps) => {
  return(
    <CaretButton onClick={handleToggleModal}>
        {sortType}<CaretImg isModalOpen={isModalOpen} src={caret} />
    </CaretButton>
  )
}

export default Caret;