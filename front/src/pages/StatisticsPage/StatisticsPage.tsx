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
  HeaderContainer,
  WhiteContainer,
  StatisticsContainer,
  TabWrapper,
  TotalAmountWrapper,
} from "./StatisticsPage.styles";
import { FourCategory } from "@/components/organisms/FourCategory/FourCategory";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import theme from "@/styles/theme";
import FlexDiv from "@/components/atoms/FlexDiv/FlexDiv.styles";
import numberToAmount from "@/utils/NumToAmount";

const StatisticsPage = () => {
  // Tab 선택 여부
  const [selectedTab, setSelectedTab] = useState("내 소비");
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const TABS = [
    { name: "내 소비", key: "내 소비" },
    { name: "혜택", key: "혜택" },
  ];

  //TODO: currentMonth는 리코일에서
  const currentMonth = 9;
  const category = "주유";
  const [isModalOpen, setModalOpen] = useState(false);

  // TODO: API로 get해야 함
  const thisMonthAmount = numberToAmount(128762);
  const thisMonthDiscount = numberToAmount(8930);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Background
      $colormode="gradient"
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        position: "fixed",
        height: "auto",
        border: "true",
      }}
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
          <FourCategory></FourCategory>
        </WhiteContainer>
        <StatisticsContainer
          $borderRadius="38px"
          $backgroundColor="white"
          width="100vw"
        >
          <Wrapper $flexDirection="row">
            {TABS.map((tab) => (
              <>
                <TabWrapper
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  style={{
                    borderColor:
                      selectedTab === tab.key ? theme.color.blue : "white",
                  }}
                >
                  <Text
                    size="body2"
                    fontWeight="bold"
                    color={selectedTab === tab.key ? "black1" : "grey2"}
                  >
                    {tab.name}
                  </Text>
                </TabWrapper>
              </>
            ))}
          </Wrapper>
          <TotalAmountWrapper>
            <Text size="subtitle2" fontWeight="bold">
              이번 달에는
            </Text>
            <FlexDiv>
              <Text
                size="subtitle1"
                fontWeight="bold"
                color="blue"
                $marginTop="3px"
              >
                {selectedTab === "내 소비"
                  ? thisMonthAmount
                  : thisMonthDiscount}
                원
              </Text>
              <Text
                size="subtitle2"
                fontWeight="light"
                $marginLeft="6px"
                $marginTop="6px"
              >
                {selectedTab === "내 소비" ? "썼어요" : "할인 받았어요"}
              </Text>
            </FlexDiv>
          </TotalAmountWrapper>
          <Wrapper
            $border={true}
            style={{
              marginTop: "10px",
              height: "35px",
              borderRadius: "12px",
              width: "95%",
              marginBottom: "100px",
            }}
          ></Wrapper>
        </StatisticsContainer>
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
