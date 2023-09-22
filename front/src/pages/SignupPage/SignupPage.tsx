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
            <br /> <b>본인확인</b>을 진행해주세요.
          </Text>
          <Input placeholder="이름을 작성해주세요"></Input>
          <Wrapper
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Input placeholder="주민등록번호 앞자리" width={122}></Input>
            <Text size="subtitle1">-</Text>
            <Input width={35} textAlign="center" paddingLeft={0}></Input>
            <Image src={Dots} width={30} height={15} $unit="%"></Image>
          </Wrapper>
          <br />

          {/* <input
            id="name"
            type="text"
            placeholder="이름을 작성해주세요"
            // input의 기본 config를 작성
            {...register("name", {
              required: true,
              minLength: { value: 2, message: "최소 2자 이상 입력하세요" },
              maxLength: { value: 8, message: "최대 8자 까지 가능합니다." },
            })}
          />
          {errors.name && <small role="alert">{errors.name.message}</small>} */}

          <label>주민등록번호</label>
          <input
            {...register("identification_number", {
              required: true,
              pattern: {
                value: /^[0-9]{6}$/,
                message: "주민등록번호 6자리를 입력해주세요!",
              },
            })}
          />
          <span>-</span>
          <input
            {...register("phone_number", {
              required: true,
              maxLength: 1,
            })}
          />
          <span>*****</span>
          {errors.identification_number && (
            <small role="alert">{errors.identification_number.message}</small>
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
          {/* <button
          type="button"
          onClick={() => {
            console.log(1);
          }}
        ></button> */}
          <Button
            onClick={() => navigatePage(PATH.PASSWORD_SETTING)}
            size="medium"
          >
            확인
          </Button>
        </Container>
      </form>
    </Container>
  );
};
export default SignupPage;
