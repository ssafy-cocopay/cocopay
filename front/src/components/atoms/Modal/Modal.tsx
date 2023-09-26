import React from "react";
import { ReactNode } from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { ModalContent } from "@/components/atoms/Modal/Modal.styles"; // 이 부분을 수정

interface ModalProps {
  toggleModal: () => void;
  children?: React.ReactNode;
}

const Modal = ({ toggleModal, children }: ModalProps) => {
  return (
    <>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={toggleModal}>닫기</button>
      </ModalContent>
    </>
  );
};

export default Modal;
