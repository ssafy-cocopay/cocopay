import React from "react";
import { ReactNode } from "react";
import { Text } from "@/components/atoms/Text/Text.styles";
import { ModalContent } from "@/components/atoms/Modal/Modal.styles"; // 이 부분을 수정

interface ModalProps {
  toggleModal: () => void;
  children?: ReactNode;
}

const Modal = ({ toggleModal, children }: ModalProps) => {
  return (
    <>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children} {/* children을 렌더링합니다 */}
      </ModalContent>
    </>
  );
};

export default Modal;
