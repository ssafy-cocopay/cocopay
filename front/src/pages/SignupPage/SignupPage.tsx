import React from "react";
import { Image } from "@/components/atoms/Image/Image";
import { useLocation, useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import Dots from "@/assets/images/img-dots-row-gray.png";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

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
    <Container border={true} paddingTop="70px">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Container border={true} padding="none" left={true}>
          <Text size="subtitle1">
            코코페이 이용을 위해
            <br /> <b>본인확인</b>을 진행해주세요
          </Text>
          <br />
          <Input placeholder="이름을 작성해주세요"></Input>
          <br />
          <Wrapper flexDirection="row" justifyContent="space-between">
            <Input
              {...register("identification_number", {
                pattern: {
                  value: /^[0-9]{13}$/, // 13자리 숫자인지 확인하는 정규식
                  message: "주민등록번호를 정확히 입력하세요 (숫자 13자리)",
                },
              })}
              width={122}
            ></Input>
            <Text size="subtitle1" color="grey3">
              -
            </Text>
            <Input width={35} textAlign="center" paddingLeft={0}></Input>
            <Image src={Dots} width={40} $unit="%"></Image>
          </Wrapper>
          <br />
          <Input placeholder="핸드폰번호"></Input>
          <br />
          <Wrapper flexDirection="raw" justifyContent="space-between">
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

          <br />
          <div>
            {/* <!-- 드롭다운(싱글타입) --> */}
            <select name="telecom" id="telecom">
              <option value="SKT">SKT</option>
              <option value="KT">KT</option>
              <option value="U+">LG U+</option>
            </select>
          </div>
          <label>핸드폰번호</label>
          <input
            {...register("phone_number", {
              required: true,
              pattern: {
                value: /^[0-9]{11}$/,
                message: "'-'없이 번호만 입력해주세요!'",
              },
            })}
          />
          {errors.phone_number && (
            <small role="alert">{errors.phone_number.message}</small>
          )}
        </Container>
      </form>
    </Container>
  );
};
export default SignupPage;
