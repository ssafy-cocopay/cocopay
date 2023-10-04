import React, { Suspense } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

const App = () => {
  document.addEventListener("message", (e: any) => alert(e.data));

  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;
