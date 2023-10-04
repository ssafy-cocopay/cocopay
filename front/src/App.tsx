import React, { Suspense, useEffect } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { userInfoState } from "@/states/UserInfoAtoms";
import { UserInfo } from "@/types/user";
import { useRecoilState } from "recoil";

const firebaseConfig = {
  apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
  authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
  projectId: "ssuk-ssuk-push-server",
  storageBucket: "ssuk-ssuk-push-server.appspot.com",
  messagingSenderId: "783105738433",
  appId: "1:783105738433:web:bf9038b74de37df79db640",
  measurementId: "G-G26E58EJJG",
};

const App = () => {
  // 상태관리
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    console.log("hi");
  });

  useEffect(() => {
    // 로그인할때 해당 함수를 호출해도 됨.
    // 메인
    // FCM 토큰 가져오기
    getToken(messaging, {
      vapidKey:
        "BOioOx5igEAi7JAIJ0SIXLp6k4zPtKyKlojMlCwqm7G8JTmF7a8AhekqTxF5R1CyDrRl025wImw6qHs9UmCLgcc",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("현재 FCM 토큰 at APP:", currentToken);
          localStorage.setItem("fcmToken", currentToken);
          setUserInfo((prev: UserInfo) => ({
            ...prev,
            fcmToken: currentToken,
          }));
          console.log("현재 userInfo", userInfo);
        } else {
          console.log("FCM 토큰이 아직 없습니다.");
        }
      })
      .catch((error) => {
        console.error("FCM 토큰을 가져오는 중에 오류 발생:", error);
      });

    // // Firebase Messaging을 사용하여 푸시 알림 메시지 수신 설정
    // const unsubscribe = onMessage(messaging, (message) => {
    //   console.log("hi");
    //   console.log("새로운 푸시 알림 메시지 도착:", message);
    // });
    //   // 푸시 알림 메시지 처리 로직을 여기에 추가
    // });

    // return () => {
    //   // 컴포넌트가 언마운트될 때 푸시 알림 메시지 수신 설정 해제
    //   unsubscribe();
    // };

    // 컴포넌트가 언마운트될 때 푸시 알림 메시지 수신 설정 해제
  }, []);

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;