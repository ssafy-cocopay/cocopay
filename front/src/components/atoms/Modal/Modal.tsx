import React from "react";
import { ModalContent } from "@/components/atoms/Modal/Modal.styles";
import { Text } from "@/components/atoms/Text/Text.styles";

interface ModalProps {
  toggleModal: () => void;
}

const Modal = ({ toggleModal }: ModalProps) => {
  return (
    <>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Text>임시모달~ 이것은 모달의 내용입니다.</Text>
        <button onClick={toggleModal}>닫기</button>
      </ModalContent>
    </>
  );
};

export default Modal;
