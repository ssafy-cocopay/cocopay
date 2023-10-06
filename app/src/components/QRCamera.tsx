// src/components/QRCamera.tsx

import React from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from 'react-native-vision-camera';

const QRCamera = () => {
//   const handleWebViewMessage = (event) => {
//     const message = event.nativeEvent.data;
//     if (message === 'openCamera') {
//       // 카메라를 여는 로직
//     }
//   };

  return (
    <>
      {/* <Camera style={{ flex: 1 }} /> */}
      <WebView
        source={{ uri: 'https://your-react-web-app.com' }}
        // onMessage={handleWebViewMessage}
        injectedJavaScript={`
          window.ReactNativeWebView.postMessage('messageFromWebApp');
          true;
        `}
      />
    </>
  );
};

export default QRCamera;
