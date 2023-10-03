import React, { useEffect } from "react";
import ParticleMove from "../PayOnlineCompletePage/ParticleMove";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
  authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
  projectId: "ssuk-ssuk-push-server",
  storageBucket: "ssuk-ssuk-push-server.appspot.com",
  messagingSenderId: "783105738433",
  appId: "1:783105738433:web:bf9038b74de37df79db640",
  measurementId: "G-G26E58EJJG",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  console.log("hi");
});

const TestPage = () => {
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
          console.log("현재 FCM 토큰:", currentToken);
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

    //   // 푸시 알림 메시지 처리 로직을 여기에 추가
    // });

    // 컴포넌트가 언마운트될 때 푸시 알림 메시지 수신 설정 해제
  }, []);

  return (
    <>
      <ParticleMove></ParticleMove>
    </>
  );
};

export default TestPage;
