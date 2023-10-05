import React, { Suspense } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  window.addEventListener("message", function (event) {
    const data = event.data;
    console.log("Received message:", data);
  });

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;
