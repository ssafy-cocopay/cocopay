import React, { Suspense } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";


function App() {
  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
}

export default App;
