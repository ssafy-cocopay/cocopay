import React, { useState } from "react";
import CardItem from "@/components/molecules/CardItem/CardItem";
import { Text } from "@/components/atoms/Text/Text.styles";
import { CardListContainer } from "@/components/atoms/Container/Container.styles";

import { Background } from "@/components/atoms/Background/Background.styles";
import { Hr, Layout } from "@/pages/CardListPage/CardListPage.styles";
import Button from "@/components/atoms/Button/Button";
import iconPlusGrey from "@/assets/images/icon-plus-grey.png";
import { Image } from "@/components/atoms/Image/Image";
import Modal from "@/components/atoms/Modal/Modal";

const CardListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //모달 오픈 함수
  const openModal = () => {
    console.log("Modal");
    setIsModalOpen(true);
  };

  //모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Background
      style={{
        position: "fixed",
      }}
    >
      <CardListContainer>
        카드 리스트 페이지
        <Text
          size="body1"
          fontWeight="bold"
          color="black1"
          $margin="36px 36px 4px 36px"
        >
          보유 카드 목록
        </Text>
        <Text
          size="small3"
          fontWeight="light"
          color="grey1"
          $margin="12px 36px 0 36px"
        >
          왼쪽으로 밀어 보유한 카드를 삭제할 수 있어요.
        </Text>
        <Text
          size="small3"
          fontWeight="light"
          color="grey1"
          $margin="0 36px 36px 36px"
        >
          오른쪽 아이콘을 눌러 카드 순서를 변경할 수 있어요.
        </Text>
        <Hr />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <Layout>
          <Button
            option="dashed"
            size="medium"
            $borderRadius="16px"
            $fontSize="16px"
          >
            <Image src={iconPlusGrey} width={12} height={12} $unit="px"></Image>
            카드 등록
          </Button>
          <br />
          <br />
          <Button
            onClick={openModal}
            option="danger"
            size="medium"
            $borderRadius="16px"
            $fontSize="16px"
          >
            카드 삭제
          </Button>
        </Layout>
      </CardListContainer>

      {/* 모달 부분 */}
      {isModalOpen && (
        <Modal toggleModal={closeModal}>
          <Text>제목</Text>
          <Text>내용</Text>
        </Modal>
      )}
    </Background>
  );
};

export default CardListPage;
