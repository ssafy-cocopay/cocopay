import React, { Suspense, useEffect } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";


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
      <LandingPage />
    </Suspense>
  );
}

export default App;
