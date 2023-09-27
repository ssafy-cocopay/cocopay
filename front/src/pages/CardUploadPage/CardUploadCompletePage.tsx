import CardItem from "@/components/molecules/CardItem/CardItem";
import { Text } from "@/components/atoms/Text/Text.styles";
import { CardListContainer } from "@/components/atoms/Container/Container.styles";
import React, {useState} from "react";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Hr, Layout } from "@/pages/CardListPage/CardListPage.styles";
import Button from "@/components/atoms/Button/Button";
import iconPlusGrey from "@/assets/images/icon-plus-grey.png";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import cardImg1 from "@/assets/images/img-card1.png";
import cardImg2 from "@/assets/images/img-card2.png";
import cardImg3 from "@/assets/images/img-card3.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import Modal from "@/components/atoms/Modal/Modal";

const CardUploadCompletePage = () => {

  const navigate = useNavigate();

  const navigatePage = (path: string) => {
      navigate(path);
  };

  // 현재 스와이핑되고 있는 CardItem의 인덱스를 저장
  const [swipedIndex, setSwipedIndex] = useState<number | null>(null);

  const handleSwipeStart = (index: number) => {
    if (swipedIndex !== null && swipedIndex !== index) {
      // 다른 CardItem을 스와이핑할 때 기존의 스와이핑된 CardItem 초기화
      setSwipedIndex(null);
    } else {
      setSwipedIndex(index);
    }
  };

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

  const CardInfo = [
    {
      cardImg: cardImg1,
      cardName: "위버스 신한카드 체크(BTS)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 30,
    },
    {
      cardImg: cardImg2,
      cardName: "신한카드 플리(산리오캐릭터즈)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 50,
    },
    {
      cardImg: cardImg3,
      cardName: "신한카드 Way 체크 (최고심)",
      serialNumber: "2128-46**-****-3510",
      cardType: "체크",
      master: true,
      percennt: 10,
    },
    {
      cardImg: cardImg1,
      cardName: "위버스 신한카드 체크(BTS)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 30,
    },
    {
      cardImg: cardImg2,
      cardName: "신한카드 플리(산리오캐릭터즈)",
      serialNumber: "2128-46**-****-3510",
      cardType: "신용",
      master: true,
      percennt: 50,
    },
    {
      cardImg: cardImg3,
      cardName: "신한카드 Way 체크 (최고심)",
      serialNumber: "2128-46**-****-3510",
      cardType: "체크",
      master: true,
      percennt: 10,
    },
  ];

  return (
    <Background
      style={{
        position:"fixed",
      }}
    >
      <CardListContainer>
        <Text
          size="body1"
          fontWeight="bold"
          color="black1"
          $margin="36px 36px 4px 36px"
        >
          불러온 카드 목록
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
        {CardInfo.map((card, idx) => (
          <CardItem
            key={idx}
            card={card}
            onSwipeStart={() => handleSwipeStart(idx)}
            resetSwipe={swipedIndex !== null && swipedIndex !== idx}
            swipedIndex={swipedIndex}   // 추가
            index={idx}                 // 추가
            deletemodal={() => toggleModal()}
          />
        ))}
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
        </Layout>
        <Layout>
            <Button
                onClick={() => navigatePage(PATH.PRIORITY)}
                option="activated"
                $borderRadius="16px"
                $fontSize="16px"
            >
                확인
            </Button>
        </Layout>
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
      </CardListContainer>
    </Background>
  );
};

export default CardUploadCompletePage;
