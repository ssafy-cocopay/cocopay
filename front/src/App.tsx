import React, { Suspense, useEffect } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { userInfoState } from "@/states/UserInfoAtoms";
import { UserInfo } from "@/types/user";
import { useRecoilState } from "recoil";

import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
//   authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
//   projectId: "ssuk-ssuk-push-server",
//   storageBucket: "ssuk-ssuk-push-server.appspot.com",
//   messagingSenderId: "783105738433",
//   appId: "1:783105738433:web:bf9038b74de37df79db640",
//   measurementId: "G-G26E58EJJG",
// };

const App = () => {
  // 상태관리
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // const messaging = getMessaging(app);

  // onMessage(messaging, (payload) => {
  //   console.log("Message received. ", payload);
  //   console.log("hi");
  // });

  // useEffect(() => {
  //   // FCM 토큰 가져오기
  //   getToken(messaging, {
  //     vapidKey:
  //       "BOioOx5igEAi7JAIJ0SIXLp6k4zPtKyKlojMlCwqm7G8JTmF7a8AhekqTxF5R1CyDrRl025wImw6qHs9UmCLgcc",
  //   })
  //     .then((currentToken) => {
  //       if (currentToken) {
  //         console.log("현재 FCM 토큰 at APP:", currentToken);
  //         localStorage.setItem("fcmToken", currentToken);
  //         setUserInfo((prev: UserInfo) => ({
  //           ...prev,
  //           fcmToken: currentToken,
  //         }));
  //         console.log("현재 userInfo", userInfo);
  //       } else {
  //         console.log("FCM 토큰이 아직 없습니다.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("FCM 토큰을 가져오는 중에 오류 발생:", error);
  //     });
  // }, []);

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;
