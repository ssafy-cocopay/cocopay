import React, { useEffect } from "react";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PATH } from "@/constants/path";
import { useForm } from "react-hook-form";

import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { ModalBg } from "@/components/atoms/Modal/Modal.styles";
import Dots from "@/assets/images/img-dots-row-gray.png";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import Modal from "@/components/atoms/Modal/Modal";

import { ModalWrapper } from "./SignupPage.styles";
import { useAddMessage } from "@/apis/User/Mutations/useAddMessage";
import { useAddMessageConfirm } from "@/apis/User/Mutations/useAddMessageConfirm";

interface FormValue {
  name: string;
  identification_number: number;
  phone_number: number;
}

const SignupPage: React.FC = () => {
  // 상태관리
  const [btnMent, setBtnMent] = useState<string>("인증번호 받기");
  const [userTel, setUserTel] = useState<string>("");
  const [messageNum, setMessageNum] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isFormComplete, setFormComplete] = useState<boolean>(false);

  // 훅, 뮤테이션훅
  const navigate = useNavigate();
  const addMessageMutation = useAddMessage();
  const addMessageConMutation = useAddMessageConfirm();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValue>({ mode: "onChange" });

  // 핸들러
  const sendMessage = () => {
    setBtnMent("인증번호 재전송");
    addMessageMutation.mutate(userTel);
  };

  const numberCheck = () => {
    const messageData = { tel: userTel, code: messageNum };
    addMessageConMutation.mutate(messageData);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const checkFormCompletion = () => {
    const formData = getValues();

    if (
      formData.name &&
      formData.identification_number &&
      formData.phone_number
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  useEffect(() => {
    if (addMessageConMutation.isError) toggleModal();
    if (addMessageConMutation.isSuccess) navigate(PATH.PASSWORD_SETTING);
  }, [addMessageConMutation.isError, addMessageConMutation.isSuccess]);

  return (
    <SignupLayout
      btnMent={btnMent}
      userTel={userTel}
      messageNum={messageNum}
      isModalOpen={isModalOpen}
      errors={errors}
      register={register}
      sendMessage={sendMessage}
      setUserTel={setUserTel}
      setMessageNum={setMessageNum}
      numberCheck={numberCheck}
      toggleModal={toggleModal}
      checkFormCompletion={checkFormCompletion}
      isFormComplete={isFormComplete}
    />
  );
};

interface SignupLayoutProps {
  btnMent: string;
  userTel: string;
  messageNum: string;
  isModalOpen: boolean;
  errors: any; // 예외적 any... errors 무슨 유형이 오는지 몰라서 이렇게 적어둡니다
  register: any;
  sendMessage: () => void;
  setUserTel: (tel: string) => void;
  setMessageNum: (num: string) => void;
  numberCheck: () => void;
  toggleModal: () => void;
  checkFormCompletion: () => void;
  isFormComplete: boolean;
}

const SignupLayout = ({
  btnMent,
  userTel,
  messageNum,
  isModalOpen,
  errors,
  register,
  sendMessage,
  setUserTel,
  setMessageNum,
  numberCheck,
  toggleModal,
  checkFormCompletion,
  isFormComplete,
}: SignupLayoutProps) => {
  return (
    <Container $paddingTop="70px" $border={false}>
      <Container
        $padding="none"
        $border={false}
        $left={true}
        $overflow="scroll"
      >
        <Text size="subtitle1" style={{ marginBottom: "6px" }}>
          코코페이 이용을 위해
        </Text>
        <Text size="subtitle1" style={{ marginBottom: "26px" }}>
          <b>본인확인</b>을 진행해주세요
        </Text>
        <Input
          placeholder="이름을 작성해주세요"
          {...register("name", {
            required: true, // 필수 입력
            minLength: {
              value: 2,
              message: "최소 2글자 이상 입력하세요",
            },
            maxLength: {
              value: 8,
              message: "최대 8글자까지 입력 가능합니다",
            },
            pattern: {
              value: /^[a-zA-Z가-힣\s]*$/, // 문자 또는 공백만 허용
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
        {/* 핸드폰번호 input */}
        <Input
          placeholder="핸드폰 번호를 입력해주세요"
          {...register("phone_number", {
            required: true,
            pattern: {
              value: /^[0-9]{11}$/,
              message: " '-'없이 11자리 번호만 입력해주세요!'",
            },
          })}
          value={userTel}
          onChange={(e) => {
            setUserTel(e.target.value);
            checkFormCompletion();
          }}
        ></Input>
        {errors.phone_number && (
          <small style={{ color: "red", fontSize: "14px" }}>
            {errors.phone_number.message}
          </small>
        )}
        <br />
        {/* 통신사 dropdown */}
        <Dropdown
          options={["SKT", "KT", "LG"]}
          defaultValue="통신사를 선택해주세요"
          onChange={(value) => {
            console.log(value);
            checkFormCompletion();
          }}
        />
        {/* 인증번호 input */}
        <Wrapper $flexDirection="row" $justifyContent="space-between">
          <Input
            width={150}
            value={messageNum}
            onChange={(e) => {
              setMessageNum(e.target.value);
              checkFormCompletion();
            }}
          ></Input>

          <Button
            onClick={sendMessage}
            $fontSize="18px"
            option="activated"
            $width="50%"
            size="large"
            $borderRadius="13px"
          >
            {btnMent}
          </Button>
        </Wrapper>

        {/* <TimerComponent
          timerColor="danger"
          initialSeconds={initialSeconds}
        ></TimerComponent> */}

        <br />
        <Button option="deActivated" onClick={numberCheck} size="large">
          확인
        </Button>
        {isModalOpen && (
          <ModalBg onClick={toggleModal}>
            <Modal toggleModal={toggleModal}>
              <ModalWrapper style={{ width: "100%" }}>
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
                <Button
                  option={isFormComplete ? "activated" : "deActivated"}
                  onClick={toggleModal}
                >
                  확인
                </Button>
              </ModalWrapper>
            </Modal>
          </ModalBg>
        )}
      </Container>
    </Container>
  );
};
export default SignupPage;
