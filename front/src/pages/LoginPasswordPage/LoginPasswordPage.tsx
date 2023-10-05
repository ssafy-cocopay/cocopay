import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "@/components/atoms/Background/Background.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import { PATH } from "@/constants/path";
import { Text } from "@/components/atoms/Text/Text.styles";
import Back from "@/components/atoms/Back/Back";
import KeypadButtons from "@/components/molecules/KeypadButtons/KeypadButtons";
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

const LoginPasswordPage = () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
//     authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
//     projectId: "ssuk-ssuk-push-server",
//     storageBucket: "ssuk-ssuk-push-server.appspot.com",
//     messagingSenderId: "783105738433",
//     appId: "1:783105738433:web:bf9038b74de37df79db640",
//     measurementId: "G-G26E58EJJG",
//   };

//   const app = initializeApp(firebaseConfig);
//   const messaging = getMessaging(app);
//   onMessage(messaging, (payload) => {
//     console.log("Message received. ", payload);
//     console.log("hi");
//   });

  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };
  const [step, setStep] = useState(3);
  const handlePasswordMatch = () => {
    // getToken(messaging, {
    //   vapidKey:
    //     "BOioOx5igEAi7JAIJ0SIXLp6k4zPtKyKlojMlCwqm7G8JTmF7a8AhekqTxF5R1CyDrRl025wImw6qHs9UmCLgcc",
    // })
    //   .then((currentToken) => {
    //     if (currentToken) {
    //       console.log("현재 FCM 토큰:", currentToken);
    //       localStorage.setItem("fcmToken", currentToken);
    //     } else {
    //       console.log("FCM 토큰이 아직 없습니다.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("FCM 토큰을 가져오는 중에 오류 발생:", error);
    //   });
    navigatePage(PATH.MAIN);
  };

  return (
    <Background $colormode="gradient">
      <Container $left={true} $paddingTop="36px">
        <Back>뒤로가기</Back>
        <Container
          $marginTop="36px"
          $paddingTop="63px"
          $backgroundColor="white"
          $borderRadius="38px"
          height="auto"
          $padding="36px"
        >
          <Text size="subtitle1" fontWeight="bold">
            간편 비밀번호 입력
          </Text>
          <Text size="body1" fontWeight="medium">
            비밀번호 6자리를 입력해주세요
          </Text>
          <KeypadButtons
            step={step}
            setStep={setStep}
            onPasswordMatch={handlePasswordMatch}
          ></KeypadButtons>
        </Container>
      </Container>
    </Background>
  );
};

export default LoginPasswordPage;
