import React from "react";
import { ModalContent } from "@/components/atoms/Modal/Modal.styles";

const ModalComponent = () => {
  return (
    <>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        임시모달~ 이것은 모달의 내용입니다.
        {/* <button onClick={toggleModal}>닫기</button> */}
      </ModalContent>
    </>
  );
};

export default ModalComponent;
