import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PATH } from "@/constants/path";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import Dots from "@/assets/images/img-dots-row-gray.png";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import Dropdown from "@/components/molecules/Dropdown/Dropdown";
import Modal from "@/components/atoms/Modal/Modal";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import { ModalWrapper } from "./SignupPage.styles";
import TimerComponent from "@/utils/Timer";
interface FormValue {
  name: string;
  identification_number: number;
  phone_number: number;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  const [btnMent, setBtnMent] = useState("인증번호 받기");

  const sendMessage = () => {
    console.log("인증번호 전송!");
    setBtnMent("인증번호 재전송");
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValue>({ mode: "onChange" });

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <Container $paddingTop="70px" $border={true}>
      {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
      <Container
        $padding="none"
        $border={false}
        $left={true}
        $overflow="scroll"
      >
        <Text size="subtitle1">
          코코페이 이용을 위해
          <br /> <b>본인확인</b>을 진행해주세요
        </Text>
        <br />

        {/* 이름 input */}
        <Input
          placeholder="이름을 작성해주세요"
          {...register("name", {
            required: true, // 필수 입력 필드임을 나타냅니다.
            minLength: {
              value: 2,
              message: "최소 2글자 이상 입력하세요",
            },
            maxLength: {
              value: 8,
              message: "최대 8글자까지 입력 가능합니다",
            },
            pattern: {
              value: /^[a-zA-Z가-힣\s]*$/, // 문자 또는 공백만 허용하는 정규식
              message: "올바른 이름 형식이 아닙니다",
            },
          })} //TODO:에러메세지 text스타일컴포넌트로 커스텀하기
        ></Input>
        {errors.name && (
          <small style={{ color: "red", fontSize: "14px" }}>
            {errors.name.message}
          </small>
        )}
        <br />
        {/* 주민등록번호 input */}
        <Wrapper $flexDirection="row" $justifyContent="space-between">
          <Input width={122}></Input>
          <Text size="subtitle1" color="grey3">
            -
          </Text>
          <Input width={35} $textAlign="center" $paddingLeft={0}></Input>
          <Image src={Dots} width={40} $unit="%"></Image>
        </Wrapper>
        <br />
        <Dropdown />
        {/* 핸드폰번호 input */}
        <Input
          placeholder="핸드폰번호"
          {...register("phone_number", {
            required: true, // 필수 입력 필드임을 나타냅니다.
            pattern: {
              value: /^[0-9]{11}$/,
              message: " '-'없이 11자리 번호만 입력해주세요!'",
            },
          })}
        ></Input>
        {errors.phone_number && (
          <small style={{ color: "red", fontSize: "14px" }}>
            {errors.phone_number.message}
          </small>
        )}
        <br />
        {/* 인증번호 input */}
        <Wrapper $flexDirection="row" $justifyContent="space-between">
          <Input width={150}></Input>

          <Button
            onClick={sendMessage}
            $fontSize="18px"
            option="activated"
            $width="50%"
            $borderRadius="10px"
          >
            {btnMent}
          </Button>
        </Wrapper>

        <TimerComponent
          timerColor="danger"
          // initialSeconds={initialSeconds}
        ></TimerComponent>

        <br />
        <Button
          option="deActivated"
          $borderRadius="10px"
          onClick={() => navigatePage(PATH.PASSWORD_SETTING)}
          size="medium"
        >
          확인
        </Button>
        <br />
        <Button
          option="deActivated"
          $borderRadius="10px"
          size="medium"
          onClick={toggleModal}
        >
          유효하지 않을 때
        </Button>
        {isModalOpen && (
          <ModalBg onClick={toggleModal}>
            <Modal toggleModal={toggleModal}>
              <ModalWrapper>
                <Text
                  size="body1"
                  fontWeight="bold"
                  style={{
                    marginBottom: "12px",
                  }}
                >
                  인증번호 오류
                </Text>
                <Text size="body2" fontWeight="regular">
                  번호가 맞지 않습니다.
                </Text>
                <Text
                  size="body2"
                  fontWeight="regular"
                  style={{
                    marginBottom: "36px",
                  }}
                >
                  정보 확인 후 재시도해주세요.
                </Text>
                <Button option="activated" onClick={toggleModal}>
                  확인
                </Button>
              </ModalWrapper>
            </Modal>
          </ModalBg>
        )}
        <br />
        <div>
          {/* <!-- 드롭다운(싱글타입) --> */}
          <select name="telecom" id="telecom">
            <option value="SKT">SKT</option>
            <option value="KT">KT</option>
            <option value="U+">LG U+</option>
          </select>
        </div>
      </Container>
      {/* </form> */}
    </Container>
  );
};
export default SignupPage;
