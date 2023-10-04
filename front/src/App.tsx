import React, { Suspense, useEffect } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  useEffect(() => {
    // 이벤트 리스너 추가
    const handleMessage = (e: any) => {
      console.log(e.data); // React Native로부터 받은 메시지 출력
    };

    window.addEventListener("message", handleMessage);

    // 컴포넌트 unmount 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;
