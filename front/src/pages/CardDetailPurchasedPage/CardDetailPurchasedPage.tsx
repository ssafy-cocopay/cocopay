import { Background } from "@/components/atoms/Background/Background.styles";
import React, {useState} from "react"
import { Text } from "@/components/atoms/Text/Text.styles"
import { Image } from "@/components/atoms/Image/Image"
import iconArrowLeftBlack from "@/assets/images/icon-arrow-left-black.png"
import { PurchasedWrapper, Hr, ModalWrapper } from "./CardDetailPurchasedPage.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles"
import Calendar from "@/components/molecules/Calendar/Calendar"
import CardHistory from "@/components/molecules/CardHistory/CardHistory"
import PaymentList from "@/components/molecules/PaymentList/PaymentList"
import Modal from "@/components/atoms/Modal/Modal";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import Button from "@/components/atoms/Button/Button";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles"
import theme from "@/styles/theme";

const CardDetailPurchasedPage = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const keypad = ['10월', '11월', '12월', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'];
    const [selectedMonth, setSelectedMonth] = useState("");

    const numberButton = (string: string | "", index: number) => (
        <Button
          key={index}
          size="small"
          $fontSize="18px"
          onClick={() => handleMonthClick(string)}
          style={{
            width: "28%",
            height: "44px",
            fontWeight: "normal",
            backgroundColor: string === selectedMonth ? theme.color.white : theme.color.grey5,
            color: string === selectedMonth ? theme.color.blue : theme.color.grey2,
            marginBottom: "4px",
            border: string === selectedMonth ? `2px solid ${theme.color.blue}` : "none"
          }}
        >
          {string}
        </Button>
      );

    const toggleModal = () => {
        setModalOpen((prev) => !prev);
      };

    const handleMonthClick = (month: string) => {
        setSelectedMonth(month);
    };

    return (
        <Background
        $colormode="gradient"
        style={{
            position: "fixed",
            padding: "40px 24px"
        }}
        >
            <PurchasedWrapper>
                <Image
                src={iconArrowLeftBlack}
                height={24}
                width={24}
                $unit="px"
                >
                </Image>
                <Text
                size="body2"
                fontWeight="bold"
                color="black1"
                >
                    카드 결제내역 상세
                </Text>
            </PurchasedWrapper>
            <WhiteRoundedBox
            style={{minHeight:"680px"}}
            $padding="24px 36px"
            $borderRadius="20px"
            $boxShadow="shadow1"
            >
                <Calendar onMonthClick={toggleModal} />
                {isModalOpen && (
                    <ModalBg onClick={toggleModal}>
                    <Modal toggleModal={toggleModal}>
                        <Text
                        size="body2"
                        fontWeight="bold"
                        style={{
                            margin: "16px 0 12px 12px"
                        }}
                        >
                        2022
                        </Text>
                        <Wrapper
                            $flexDirection="row"
                            $justifyContent="space-evenly"
                            style={{ marginBottom: "28px", gap: "10px", flexWrap: "wrap" }}
                        >
                            {keypad.slice(0, 3).map((btn, index) => {
                                return numberButton(btn, index);
                            })}
                        </Wrapper>
                        <Text
                        size="body2"
                        fontWeight="bold"
                        style={{
                        margin: "0 0 12px 12px"
                        }}
                        >
                        2023
                        </Text>
                        <Wrapper
                            $flexDirection="row"
                            $justifyContent="space-evenly"
                            style={{ marginBottom: "28px", gap: "10px", flexWrap: "wrap" }}
                        >
                            {keypad.slice(3, 12).map((btn, index) => {
                                return numberButton(btn, index);
                            })}
                        </Wrapper>
                        <div
                        style={{
                            padding: "0 4px 8px 4px"
                        }}
                        >
                            <Button
                            option="activated"
                            onClick={toggleModal}
                            >
                            확인
                            </Button>
                        </div>
                    </Modal>
                    </ModalBg>
                )}
                <CardHistory />
                <Text
                size="small3"
                fontWeight="light"
                color="grey1"
                $margin="0 0 8px 0"
                >
                    최근 결제
                </Text>
                <Hr />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
            </WhiteRoundedBox>
        </Background>
    )
}

export default CardDetailPurchasedPage;
