/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useRef, useState, useEffect} from 'react';
import WebView from 'react-native-webview';
import messaging from '@react-native-firebase/messaging'; // 리액트 메시징
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewMessageEvent,
} from 'react-native-webview/lib/WebViewTypes';

const App = () => {
  //웹뷰와 RN과의 소통은 아래의 ref 값을 이용하여 이루어진다
  const webviewRef = useRef<WebView | null>(null);
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [remoteMessage, setRemoteMessage] = useState(false);

  function navigateToURL(url : any) {
    if (webviewRef.current) {
      const jsCode = `window.location.href = "${url}";`;
      webviewRef.current.injectJavaScript(jsCode);
    }
  }

  useEffect(() => {
      requestUserPermission();
  //   //requestCameraPermission();
  //   //requestPermission();
  //   const unsubscribe = messaging().onMessage(async (remoteMessage : any) => {
  //     console.log("푸쉬알림 날라옴 : ", remoteMessage);
  //     setRemoteMessage(remoteMessage);//
  //     try {
  //     webviewRef.current.postMessage(remoteMessage.data.description);
  //     console.log("보냈어요");;;
  //     } catch (e)
  //     {
  //       console.log("나 에러 ㅎㅇ");
  //     }

  //     return () => unsubscribe();
  //   })
  }, []);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink((link) => {
      console.log(link.url);
      // WebView의 URL을 동적 링크의 URL로 설정하여 웹뷰 페이지로 이동합니다.
      navigateToURL(link.url);
      console.log("hi");;

      dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log("hi------------");
        if (link && webviewRef.current) {
          webviewRef.current.loadUrl(link.url);
        }
      });

    return () => unsubscribe();
    });
  },[])





    //WebView 로딩 완료시
    const handleEndLoading = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
      console.log('handleEndLoading', e);
      // 웹뷰가 로딩 완료되었을 때, 저장된 remoteMessage가 있다면 전송
      if (remoteMessage) {
        //webviewRef.current.postMessage(remoteMessage.data.description);
        // 메시지 전송 후 remoteMessage 초기화
        setRemoteMessage(true);
      }
    };


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
