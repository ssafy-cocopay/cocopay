import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import { PATH } from "@/constants/path";
import Button from "@/components/atoms/Button/Button";
import backArrow from "@/assets/images/icon-arrow-left-grey.png";

import { useRecoilState } from "recoil";
import { userInfoState } from "@/states/UserInfoAtoms";
import { useAddUser } from "@/apis/User/Mutations/useAddUser";

//TODO: 욕심파트 : 새로고침 버튼 누르면 배열 바뀌게

type KeypadButtonsProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onPasswordMatch?: () => void; // LoginPasswordPage에서 넘겨줄 것임
};

const BUTTON_STYLES = {
  width: "30.5%",
  height: "48px",
};

const KeypadButtons = (props: KeypadButtonsProps) => {
  // 상태 관리
  const [pressedCount, setPressedCount] = useState(0);
  const [enteredPassword, setEnteredPassword] = useState<string>(""); // 입력중인 숫자 문자열로 저장
  const [setPassword, setSetPassword] = useState<string>(""); // 비번등록시 - 유저가 처음 설정하는 비밀번호 6자
  const [confirmPassword, setConfirmPassword] = useState<string>(""); // 비번등록시 - 비밀번호 확인을 위한 값
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const addUserMutation = useAddUser();

  // TODO: recoil 통해 DB에서 받아올 userPassword로 수정
  const userPassword = "123456";
  const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "back"];

  // 네비게이팅
  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

  const { step, setStep, onPasswordMatch } = props;

  const handleNumberPress = (num: number) => {
    if (pressedCount < 6) {
      setPressedCount((prevCount) => prevCount + 1);
      setEnteredPassword((prevPass) => prevPass + num.toString()); // 숫자를 문자열로 변환하여 추가
    }
  };

  const handleDeletePress = () => {
    if (pressedCount > 0) {
      setPressedCount((prevCount) => prevCount - 1);
      setEnteredPassword((prevPass) => prevPass.slice(0, -1));
    }
  };

  const handlePutPassword = (newPassword: string) => {
    setUserInfo((prev) => ({ ...prev, password: newPassword }));
    addUserMutation.mutate(userInfo);
  };

  useEffect(() => {
    if (pressedCount === 6) {
      if (step === 1) {
        // 첫 번째 단계: 비밀번호 설정
        setSetPassword(enteredPassword);
        setEnteredPassword(""); // 입력 상태 초기화
        setPressedCount(0);
        setStep(2); // 다음 단계로 전환
      } else if (step === 2) {
        setConfirmPassword(enteredPassword);
      }

      // 로그인시 유저가 입력한 비밀번호와 userPassword가 동일한지 검사
      if (enteredPassword === userPassword) {
        onPasswordMatch?.(); // 비밀번호가 일치하면 callback 호출
      } else {
        console.log("틀렸어!");
        setEnteredPassword(""); // 입력 상태 초기화
        setPressedCount(0);
      }
    }
  }, [pressedCount, enteredPassword, step]);

  // 회원가입시 두 번째 단계: 비밀번호 확인
  useEffect(() => {
    if (step === 2 && confirmPassword) {
      if (setPassword === confirmPassword) {
        console.log("비밀번호 왕왕 일치");
        // console.log(setPassword);
        handlePutPassword(setPassword);
        // TODO: 성공  지문 사용할거냐고 묻기 (우선순위낮음)
        // TODO: 성공시 온보딩 페이지로 전환 (우선순위 높음)
        // TODO: 성공시 회원가입하기, 리턴값 리코일로 userId 저장 (우선순위 짱높음)

        navigatePage(PATH.MAIN);
      } else {
        console.log("비밀번호 일치하지 않음");
        setEnteredPassword("");
        setPressedCount(0);
      }
    }
  }, [confirmPassword, setPassword, step]);

  const starButton = (_: unknown, index: number) => (
    <Button
      key={index}
      size="small"
      option={index < pressedCount ? "activated" : "deActivated"}
      $width="37px"
      $border="none"
    >
      <Text
        size="subtitle1"
        fontWeight="bold"
        color="white"
        style={{ paddingTop: "8px", opacity: index < pressedCount ? 1 : 0 }}
      >
        *
      </Text>
    </Button>
  );

  const numberButton = (number: number | "", index: number) => (
    <Button
      key={index}
      onClick={() => {
        if (typeof number === "number") {
          handleNumberPress(number);
        }
      }}
      size="small"
      option="keypad"
      $border="none"
      $fontSize="24px"
      style={BUTTON_STYLES}
    >
      {number}
    </Button>
  );

  const emptyButton = (index: number) => (
    <Button
      key={index}
      option="deActivated"
      size="small"
      $backgroundColor="white"
      $border="none"
      style={BUTTON_STYLES}
    />
  );

  const backButton = (index: number) => (
    <Button
      key={index}
      onClick={handleDeletePress}
      option="keypad"
      size="small"
      $border="none"
      style={BUTTON_STYLES}
    >
      <Image
        className="invert"
        src={backArrow}
        width={1.4}
        style={{ paddingTop: "4px", filter: "invert(1)" }}
      />
    </Button>
  );

  return (
    <>
      <Wrapper
        $flexDirection="row"
        $justifyContent="space-between"
        style={{ margin: "36px 0 28px 0" }}
      >
        {Array.from({ length: 6 }).map(starButton)}
      </Wrapper>
      <Wrapper
        $flexDirection="row"
        $justifyContent="space-between"
        style={{ marginBottom: "28px", gap: "10px", flexWrap: "wrap" }}
      >
        {keypad.map((btn, index) => {
          if (typeof btn === "string") {
            if (btn === "") return emptyButton(index);
            if (btn === "back") return backButton(index);
          } else {
            return numberButton(btn, index);
          }
        })}
      </Wrapper>
    </>
  );
};

export default KeypadButtons;
