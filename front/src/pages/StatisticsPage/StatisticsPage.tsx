import React, { useState } from "react";
import styled from "styled-components";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import BlueStatisticsContainer from "@/components/molecules/BlueStatisticsContainer.tsx/BlueStatisticsContainer";
import pigImg from "@/assets/images/img-pig.png";
import { Container } from "@/components/atoms/Container/Container.styles";
import Calendar from "@/components/molecules/Calendar/Calendar";
import { Line } from "@/components/atoms/Line/Line.style";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import Modal from "@/components/atoms/Modal/Modal";

const HeaderContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 28px;
  padding: 30px;
`;

export const WhiteContainer = styled(Container)`
  margin-top: 36px;
  background-color: white;
  border-radius: 38px;
  height: 370px;
  position: relative;
  top: 220px;
  padding-top: 30px;
`;

const StatisticsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Background $colormode="gradient" style={{ position: "fixed" }}>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <BlueStatisticsContainer />
      </div>
      <HeaderContainer>
        <Image src={pigImg} width={5} $margin="10px 0" />
        <Text size="heading1" fontWeight="bold" color="white">
          3,400원
        </Text>
        <Text size="body2" color="white" style={{ marginTop: "12px" }}>
          이번 달에 받은 할인 혜택이에요!
        </Text>
      </HeaderContainer>
      <Container style={{ position: "relative", top: "0" }}>
        <WhiteContainer>
          <Calendar />
          <Line />
          <button onClick={toggleModal}>모달 열기</button>
        </WhiteContainer>
      </Container>
      {isModalOpen && (
        <ModalBg onClick={toggleModal}>
          <Modal toggleModal={toggleModal} />
        </ModalBg>
      )}
    </Background>
  );
};

export default StatisticsPage;
