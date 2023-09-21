import React from "react";
// import { Suspense } from "react"; // 추후에 비동기 처리하면서 시간 지연시 활용할 예정
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Text } from "@/components/atoms/Text/Text.styles";
import { InputContainer } from "./components/atoms/Input/Input.styles";
import Input from "./components/atoms/Input/Input";

function App() {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };

  return (
    <Background
      // colormode="white"
      style={{
        // minHeight: "100vh",
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="App">COCOPAY</div>
      {/* <InputContainer inputType="text"> */}
      <Input inputType="text"></Input>
      <Button
        onClick={() => navigatePage(PATH.LOGIN_FINGER)}
        size="medium"
        $width="200px"
      >
        로그인
      </Button>
      <Button
        onClick={() => navigatePage(PATH.SIGNUP)}
        option="activated"
        size="medium"
        $width="200px"
      >
        회원가입
      </Button>
      <Button option="deActivated" size="medium" $width="200px">
        확인
      </Button>
      <Button option="danger" size="medium" $width="200px">
        활성화
      </Button>
      <button style={{ width: "100px", marginTop: "30px" }}>인증하기</button>
    </Background>
  );
}

export default App;
