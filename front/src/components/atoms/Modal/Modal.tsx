import React, { ReactNode } from "react";
import { ModalContent } from "@/components/atoms/Modal/Modal.styles";
import { Text } from "@/components/atoms/Text/Text.styles";

interface ModalProps {
  toggleModal: () => void;
  children?: ReactNode;
}

const Modal = ({ toggleModal, children }: ModalProps) => {
  return (
    <>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}  {/* children을 렌더링합니다 */}
      </ModalContent>
    </>
  );
};

export default Modal;
