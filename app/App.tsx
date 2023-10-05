/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useRef, useState, useEffect} from 'react';
import WebView from 'react-native-webview';
import messaging from '@react-native-firebase/messaging'; // 리액트 메시징

import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewMessageEvent,
} from 'react-native-webview/lib/WebViewTypes';

const App = () => {
  //웹뷰와 RN과의 소통은 아래의 ref 값을 이용하여 이루어진다
  const webviewRef = useRef<WebView | null>(null);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    if (fcmToken !== null) {
      (webviewRef.current as WebView).postMessage(fcmToken);
      (webviewRef.current as WebView).postMessage('고정 문자열도 가니 ?');
    }
  }, []);

  const getToken = async () => {
    const fcmToken = await messaging().getToken();

    try {
      console.log('FCM TOKEN : + ' + fcmToken);
      setFcmToken(fcmToken);
    } catch (e) {
      console.log(e, 'Error -------------------------------------------');
    }
  };

  // WebView 로딩 완료시
  const handleEndLoading = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
    console.log('handleEndLoading', e);
    getToken();
    // RN에서 웹뷰로 정보 보내는 메소드
    // webviewRef.current?.postMessage(fcmToken);
  };

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  // 카메라 오픈하라고 여기에다 메세지 보내야하나?
  const handleOnMessage = async (e: WebViewMessageEvent) => {
    // data에 웹뷰에서 보낸 값이 들어옴
    console.log(e.nativeEvent.data);
  };

  //FCM

  return (
    <>
      <WebView
        onLoadEnd={handleEndLoading}
        onMessage={handleOnMessage}
        ref={webviewRef}
        source={{uri: 'https://j9b208.p.ssafy.io'}}
      />
    </>
  );
};

export default App;
