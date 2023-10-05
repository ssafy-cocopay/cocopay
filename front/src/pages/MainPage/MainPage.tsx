import { Background } from "@/components/atoms/Background/Background.styles";
import NavBar from "@/components/molecules/NavBar/NavBar";
import React, { Suspense, useEffect } from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Outlet } from "react-router-dom";
import { Image } from "@/components/atoms/Image/Image";
// import { Wrapper } from "../CardDetailPage/CardDetailPage.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

import loding from "@/assets/images/loading_pengin.png";

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import Background1 from '@/assets/images/bg-onboarding-1.png';

// const firebaseConfig = {
//   apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
//   authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
//   projectId: "ssuk-ssuk-push-server",
//   storageBucket: "ssuk-ssuk-push-server.appspot.com",
//   messagingSenderId: "783105738433",
//   appId: "1:783105738433:web:bf9038b74de37df79db640",
//   measurementId: "G-G26E58EJJG",
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);
// onMessage(messaging, (payload) => {
//   console.log("Message received at MainPage. ", payload);
//   console.log("hi");
// });

const MainPage = () => {
  // useEffect(() => {
    // 로그인할때 해당 함수를 호출해도 됨.
    // 메인
    // FCM 토큰 가져오기
    // getToken(messaging, {
    //   vapidKey:
    //     "BOioOx5igEAi7JAIJ0SIXLp6k4zPtKyKlojMlCwqm7G8JTmF7a8AhekqTxF5R1CyDrRl025wImw6qHs9UmCLgcc",
    // })
    //   .then((currentToken) => {
    //     if (currentToken) {
    //       console.log("현재 FCM 토큰:", currentToken);
    //     } else {
    //       console.log("FCM 토큰이 아직 없습니다.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("FCM 토큰을 가져오는 중에 오류 발생:", error);
    //   });

    // // Firebase Messaging을 사용하여 푸시 알림 메시지 수신 설정
    // const unsubscribe = onMessage(messaging, (message) => {
    //   console.log("hi");
    //   console.log("새로운 푸시 알림 메시지 도착:", message);

    //   // 푸시 알림 메시지 처리 로직을 여기에 추가
    // });

    // 컴포넌트가 언마운트될 때 푸시 알림 메시지 수신 설정 해제
  // }, []);

  const LoadingImage = () => (
    <div>
      <img
        src="src/assets/images/loading_pengin.png" // 로딩 이미지 파일의 경로를 지정하세요
        alt="로딩 중 이미지"
        width={200} // 이미지의 너비 설정
        height={200} // 이미지의 높이 설정
      />
    </div>
  );

  return (
    <Suspense fallback={<Container $left={true} $paddingTop="63px" height="100vh" $padding="20px" style={{
      backgroundColor: "#A6DDFB", // 하늘색 배경색 설정
      // 다른 스타일 속성 추가 가능
    }}>
      <Text fontWeight="bold" style={{ color: "#fcf006" ,textShadow: "1px 1px 2px #000", fontSize:"60px"}} $marginLeft="10%" $marginTop="40%">
      ~~로딩중~~
    </Text>
    <Text fontWeight="bold" style={{ color: "#06A1FC" ,textShadow: "1px 1px 2px #000", fontSize:"35px"}} $marginLeft="13%" $marginTop="5%">
      조금만 기다려주세여!
    </Text>
    <br />
  <Image
    src={loding}
    width={15}
    style={{ marginLeft: "15%", marginTop: "20%" }}
  ></Image>
</Container>}>
      <Background
        $colormode="gradient"
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
        <NavBar />
      </Background>
    </Suspense>
  );
};

export default MainPage;
