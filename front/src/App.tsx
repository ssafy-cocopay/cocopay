import React, { Suspense, useEffect, useState } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  const [receivedMessage, setReceivedMessage] = useState(null);

  const handleMessage = (e: any) => {
    console.log(e.data);
    setReceivedMessage(e.data);
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage receivedMessage={receivedMessage}/>
    </Suspense>
  );
};

export default App;
