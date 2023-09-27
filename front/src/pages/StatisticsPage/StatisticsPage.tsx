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
import { BlueContainerWrapper } from "../HomePage/HomePage";
import { HeaderContainer, WhiteContainer } from "./StatisticsPage.styles";
import { CategoryContainer } from "@/components/organisms/CategoryWhiteBox/CategoryContainer";

const StatisticsPage = () => {
  //TODO: currentMonth는 리코일에서
  const currentMonth = 9;
  const category = "주유";
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Background
      $colormode="gradient"
      style={{ overflowY: "scroll", position: "fixed", height: "auto", border: "true" }}
    >
      <BlueContainerWrapper>
        <BlueStatisticsContainer />
      </BlueContainerWrapper>
      <HeaderContainer>
        <Image src={pigImg} width={5} $margin="0 0 14px 0" />
        <Text size="heading1" fontWeight="bold" color="white">
          3,400원
        </Text>
        <Text size="body2" color="white" style={{ marginTop: "4px" }}>
          이번 달에 받은 할인 혜택이에요!
        </Text>
      </HeaderContainer>
      <Container style={{ position: "relative", top: "-14px" }}>
        <WhiteContainer $left={true}>
          <Calendar onMonthClick={toggleModal} />
          <Line $margin=" 0 0 20px 0" />
          <Text size="body2" $marginLeft="8px">
            <b>{currentMonth}월</b>엔 <b>{category}</b> 카테고리에서
          </Text>
          <Text size="body2" $marginLeft="8px" $marginTop="4px">
            <b>제일 많은 혜택</b>을 받았어요 !
          </Text>
          <CategoryContainer></CategoryContainer>
        </WhiteContainer>

        <Container
          $border={true}
          style={{ zIndex: 110, position: "relative", overflowY: "scroll" }}
        >
          <Text size="heading1" style={{ zIndex: 100, position: "relative" }}>123123123</Text>
          
        </Container>
      </Container>

      {isModalOpen && (
        <ModalBg onClick={toggleModal}>
          <Modal toggleModal={toggleModal} />
        </ModalBg>
      )}
      {/* <BlueStatisticsContainer /> */}
    </Background>
  );
};

export default StatisticsPage;
