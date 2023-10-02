import React, { Suspense } from "react";
import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { Text } from "@/components/atoms/Text/Text.styles";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
  authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
  projectId: "ssuk-ssuk-push-server",
  storageBucket: "ssuk-ssuk-push-server.appspot.com",
  messagingSenderId: "783105738433",
  appId: "1:783105738433:web:bf9038b74de37df79db640",
  measurementId: "G-G26E58EJJG"
};

function App() {
  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage />
    </Suspense>
  );
}

export default App;
