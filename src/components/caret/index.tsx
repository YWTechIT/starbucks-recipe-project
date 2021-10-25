import { CaretButton, CaretImg } from "./style"
import caret from "../../assets/caret.svg";
import { FilterType } from "../../types";

export interface CaretProps{
  isModalOpen: boolean;
  handleToggleModal?: () => void;
  modalType?: FilterType;
}

const Caret = ({isModalOpen, handleToggleModal, modalType}: CaretProps) => {
  return(
    <CaretButton onClick={handleToggleModal}>
        {modalType}<CaretImg isModalOpen={isModalOpen} src={caret} />
    </CaretButton>
  )
}

export default Caret;