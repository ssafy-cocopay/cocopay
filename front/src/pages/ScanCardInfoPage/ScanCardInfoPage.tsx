import React from "react";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import CardImg from "@/assets/images/icon-cardinfo.png";
import { Background } from "@/components/atoms/Background/Background.styles";
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";

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
    <Background>
      <Container border={true} paddingTop="70px">
        <Container padding="none">
          <Text size="subtitle1">카드 정보</Text>
          <Container padding="none" left={true}>
            <Wrapper flexDirection="row" justifyContent="start">
              <Image src={CardImg} width={13} $unit="%"></Image>
              <Text margin="10px" size="body2">
                카드 정보를 입력 해 주세요.
              </Text>
            </Wrapper>

            <br />
            {/* TODO: 카드번호 사이에 '-' 넣기, 중간 글씨 '*'로 표시*/}
            <Text size="small1">카드번호</Text>
            <Input></Input>
            <Wrapper justifyContent="space-between" flexDirection="row">
              <Wrapper alignItems="left">
                <Text size="small1">유효 기간</Text>
                {/* TODO: placeholder안에 글씨 작게하기 */}
                {/* TODO: 숫자 2개 입력 후 자동으로 / 나오게 하기 */}
                <Input placeholder="MM / YY"></Input>
              </Wrapper>
              <Wrapper alignItems="left">
                <Text size="small1">CVC</Text>
                <Input placeholder="카드 뒷면 3자리"></Input>
              </Wrapper>
            </Wrapper>
            {/* TODO: 비밀번호 type 패스워드로 해서 **로 보이게 설정 */}
            <Text size="small1">카드 비밀번호</Text>
            <Input placeholder="비밀번호 앞 2자리 숫자"></Input>

            <br />
            <Button
              onClick={() => navigatePage(PATH.CARD_DETAIL)}
              $borderRadius="10px"
              option="activated"
              size="medium"
            >
              {/*TODO:카드등록 버튼 end로 바꾸기 */}
              카드 등록
            </Button>
          </Container>
        </Container>
      </Container>
    </Background>
  );
};

export default ScanCardInfoPage;
