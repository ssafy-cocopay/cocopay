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
    <Container $paddingTop="70px">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Container $padding="none" $left={true}>
          <Text size="subtitle1">
            코코페이 이용을 위해
            <br /> <b>본인확인</b>을 진행해주세요
          </Text>
          <br />
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
          <Input
            placeholder="핸드폰번호"
            {...register("phone_number", {
              required: true, // 필수 입력 필드임을 나타냅니다.
              pattern: {
                value: /^[0-9]{11}$/,
                message: "'-'없이 번호만 입력해주세요!'",
              },
            })}
          ></Input>
          {errors.phone_number && ( //TODO: 정규식에러메세지 안뜨는거 다시확인
            <small style={{ color: "red", fontSize: "14px" }}>
              {errors.phone_number.message}
            </small>
          )}
          <br />
          <Wrapper $flexDirection="row" $justifyContent="space-between">
            <Input width={150}></Input>
            <Button
              onClick={() => console.log("인증번호전송")}
              $fontSize="18px"
              option="activated"
              $width="50%"
              $borderRadius="10px"
            >
              인증번호 받기
            </Button>
          </Wrapper>
          <br />
          <Button
            option="deActivated"
            $borderRadius="10px"
            onClick={() => navigatePage(PATH.PASSWORD_SETTING)}
            size="medium"
          >
            확인
          </Button>
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
              <Modal toggleModal={toggleModal}

              >
                <Text
                size="body1"
                fontWeight="bold"
                >
                  인증번호 오류
                </Text>
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
      </form>
    </Container>
  );
};
export default SignupPage;
