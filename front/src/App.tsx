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


  return (
    <Suspense fallback={<Text>로딩중</Text>}>
      <LandingPage/>
    </Suspense>
  );
};

export default App;
