import React, { Suspense, useEffect, useState } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  const [receivedMessage, setReceivedMessage] = useState(null);

  const handleMessage = (e: any) => {
    console.log(e);
    setReceivedMessage(e);
  };

  // 상태변화 이후에만 콘솔
  useEffect(() => {
    console.log("here::receivedMessage", receivedMessage);
  }, [receivedMessage]);

  useEffect(() => {
    console.log("여기 실행됨");
    window.addEventListener("message", function (event) {
      console.log("RN에서옴", event.data);
    });
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage receivedMessage={receivedMessage} />
    </Suspense>
  );
};

export default App;
