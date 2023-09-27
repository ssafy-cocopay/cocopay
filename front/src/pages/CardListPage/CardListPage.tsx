import React, { useState } from "react";
import CardItem from "@/components/molecules/CardItem/CardItem";
import { Text } from "@/components/atoms/Text/Text.styles";
import {
  CardListContainer,
  Container,
} from "@/components/atoms/Container/Container.styles";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Hr, Layout } from "@/pages/CardListPage/CardListPage.styles";
import Button from "@/components/atoms/Button/Button";
import iconPlusGrey from "@/assets/images/icon-plus-grey.png";
import { Image } from "@/components/atoms/Image/Image";
import Modal from "@/components/atoms/Modal/Modal";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

const CardListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //모달 오픈 함수
  const toggleModal = () => {
    console.log("Modal");
    setIsModalOpen((prev) => !prev);
  };

  const deleteCard = () => {
    console.log("카드 삭제 요청 보내기"); // 여기에서 실제 삭제 요청을 보내는 로직을 추가해야 합니다.
    toggleModal(); // 삭제 요청 후 모달을 닫을 수 있도록 모달을 닫는 함수를 호출합니다.
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
            onClick={toggleModal}
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
        <ModalBg onClick={toggleModal}>
          <Modal toggleModal={toggleModal}>
            <Wrapper $padding="10px" style={{ paddingTop: "30px" }}>
              <Wrapper>
                <Text
                  size="body1"
                  fontWeight="bold"
                  style={{
                    marginBottom: "12px",
                  }}
                >
                  카드삭제
                </Text>
                <Text size="body2" fontWeight="regular">
                  카드 정보를 삭제하면
                </Text>
                <Text size="body2" fontWeight="regular">
                  추후 다시 등록하셔야 합니다.
                </Text>
                <Text size="body2" fontWeight="regular">
                  계속 진행할까요?
                </Text>
              </Wrapper>
              <br />
              <Wrapper $flexDirection="coloum" $justifyContent="space-evenly">
                <Button
                  color="gray2"
                  $width="9rem"
                  option="deActivated"
                  style={{ margin: 10 }}
                  onClick={toggleModal}
                >
                  취소
                </Button>
                <Button
                  $width="9rem"
                  option="danger"
                  style={{ margin: 10 }}
                  onClick={deleteCard}
                >
                  삭제
                </Button>
              </Wrapper>
            </Wrapper>
          </Modal>
        </ModalBg>
      )}
    </Background>
  );
};

export default CardListPage;
