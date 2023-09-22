import React from "react";
import Button from "@/components/atoms/Button/Button";
import theme from "@/styles/theme";
import Input from "@/components/atoms/Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import CardImg from "@/assets/images/icon-cardinfo.png";

//TODO: 백그라운드 흰색으로 바꾸기
interface FormValue {
  cardNumber: number;
  expirationPeriod: number;
  CVC: number;
  cardPassword: number;
}

const ScanCardInfoPage = () => {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValue>({ mode: "onChange" });

  return (
    <Container border={true} paddingTop="70px">
      <Container border={true} padding="none">
        <Text size="subtitle1">카드정보</Text>
        <Container border={true} padding="none" left={true}>
          <Wrapper flexDirection="row" justifyContent="start">
            <Image src={CardImg} width={13} $unit="%"></Image>
            <Text size="small1">카드 정보를 입력 해 주세요.</Text>
          </Wrapper>
          <br />
          <Text size="small1">카드번호</Text>
          <Input></Input>
          <Wrapper justifyContent="start"></Wrapper>
          <Wrapper>
            <Text size="small1">유효 기간</Text>
            <Input placeholder="MM / YY"></Input>
          </Wrapper>
          <Wrapper>
            <Text size="small1">CVC</Text>
            <Input placeholder="카드 뒷면 3자리"></Input>
          </Wrapper>
          {/* TODO: placeholder만 작게하고 입력값은 크게 */}
          <Text size="small1">카드 비밀번호</Text>
          <Input placeholder="비밀번호 앞 2자리 숫자"></Input>
          {/* <Button
          onClick={() => navigatePage(PATH.CARD_DETAIL)}
          option="activated"
          size="medium"
          $width="200px"
        >
          카드 등록
        </Button> */}
        </Container>
      </Container>
    </Container>
  );
};

export default ScanCardInfoPage;
