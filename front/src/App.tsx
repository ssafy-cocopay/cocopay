import React, { Suspense, useEffect, useState } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  window.addEventListener('message', function(event) {
    if (event.origin !== 'http://172.22.128.1:3000') {
        return;
    }

    // Parse the data received
    const data = event.data;

    // Now you can use the received data (e.g., the FCM token)
    console.log('Received message:', data);

    // ... Handle the data as needed ...
});


function App() {
  useEffect(() => {
    // 메시지 이벤트 핸들러
    const handleMessage = (event: MessageEvent) => {
      const receivedToken = event.data;
      console.log('Received FCM Token:', receivedToken);
    };

    // 이벤트 리스너 등록
    window.addEventListener('message', handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage/>
    </Suspense>
  );
};

export default App;
