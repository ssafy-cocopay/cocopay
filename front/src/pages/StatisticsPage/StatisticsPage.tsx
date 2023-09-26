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
import {
  CatogoryWhiteBox,
  HeaderContainer,
  WhiteContainer,
} from "./StatisticsPage.styles";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";

const StatisticsPage = () => {
  //TODO: currentMonth는 리코일에서
  const currentMonth = 9;
  const category = "주유";
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Background $colormode="gradient" style={{ position: "fixed" }}>
      <BlueContainerWrapper>
        <BlueStatisticsContainer />
      </BlueContainerWrapper>
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
        <WhiteContainer $left={true}>
          <Calendar onClick={toggleModal} />
          <Line $margin=" 0 0 20px 0" />
          <Text size="body2" $marginLeft="8px">
            <b>{currentMonth}월</b>엔 <b>{category}</b> 카테고리에서
          </Text>
          <Text size="body2" $marginLeft="8px" $marginTop="4px">
            <b>제일 많은 혜택</b>을 받았어요 !
          </Text>
          <FlexDiv
            style={{
              width: "100%",
              gap: "17px",
              flexWrap: "wrap",
              marginTop: "36px",
            }}
          >
            <CatogoryWhiteBox></CatogoryWhiteBox>
            <CatogoryWhiteBox></CatogoryWhiteBox>
            <CatogoryWhiteBox></CatogoryWhiteBox>
            <CatogoryWhiteBox></CatogoryWhiteBox>
          </FlexDiv>

          {/* <BodyAndHeading amountType="할인받은" amount={6750} /> */}
          {/* <button onClick={toggleModal}>모달 열기</button> */}
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
