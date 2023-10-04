/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useRef, useState, useEffect} from 'react';
import WebView from 'react-native-webview';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {PermissionsAndroid, Alert} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging'; // 리액트 메시징

import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewMessageEvent,
} from 'react-native-webview/lib/WebViewTypes';

async function requestCameraPermission() {
  try {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);

    if (result === RESULTS.GRANTED) {
      console.log('카메라 권한 허용됨');
    } else {
      console.log('카메라 권한 거부됨');
    }
  } catch (err) {
    console.warn(err);
  }
}

const App = () => {
  useEffect(() => {
    requestCameraPermission();
    requestUserPermission();
    requestPermission();
  }, []);

  //웹뷰와 RN과의 소통은 아래의 ref 값을 이용하여 이루어진다
  let webviewRef = useRef<any>(null);
  const devices = useCameraDevices(); // 사용 가능한 카메라 디바이스 목록을 가져옵니다.
  const backCamera = devices.find(device => device.position === 'back'); // 후면 카메라를 선택합니다.
  const [showCamera, setShowCamera] = useState(false);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const qrCamera = () => {
    setShowCamera(true);
  };

  const closeCamera = () => {
    setShowCamera(false);
  };

  // WebView 로딩 완료시
  const handleEndLoading = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
    console.log('handleEndLoading', e);
    // RN에서 웹뷰로 정보 보내는 메소드
    webviewRef.current?.postMessage('로딩완료시 webview로 정보 보내는 곳');
  };

  enum Event {
    BIO_AUTH,
    QR_CAMERA,
  }

  const convertToEvent = (data: any): Event | undefined => {
    if (data === 'BIO_AUTH') {
      return Event.BIO_AUTH;
    }

    if (data === 'QR_CAMERA') {
      return Event.QR_CAMERA;
    }

    return undefined;
  };

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  // 카메라 오픈하라고 여기에다 메세지 보내야하나?
  const handleOnMessage = async (e: WebViewMessageEvent) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(e.nativeEvent.data);

    const event = convertToEvent(e.nativeEvent.data);
    if (event !== undefined) {
      switch (event) {
        case Event.BIO_AUTH:
          await handleBioAuth();
          break;
        case Event.QR_CAMERA: // 이 부분을 추가합니다.
          qrCamera();
          break;
        // 필요하다면 다음 actions 작성은 여기에
      }
    }
  };

  const handleBioAuth = () => {
    //complete
    webviewRef.current?.postMessage('SUCCESS');
  };

  //FCM
  const getToken = async () => {
    const fcmToken = await messaging().getToken();

    try {
      console.log(fcmToken);
      setFcmToken(fcmToken);
      webviewRef.current.postMessage(fcmToken);
    } catch (e) {
      console.log(e, 'Error -------------------------------------------');
    }
  };

  const requestPermission = () => {
    try {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      ]).then(result => {
        if (
          result['android.permission.POST_NOTIFICATIONS'] === 'granted' &&
          result['android.permission.READ_MEDIA_IMAGES'] === 'granted'
        ) {
          console.log('모든 권한 획득', result);
          //showToast();
        } else if (
          result['android.permission.POST_NOTIFICATIONS'] === 'denied' ||
          result['android.permission.READ_MEDIA_IMAGES'] === 'denied'
        ) {
          console.log('거절된 권한있음', result);
          recheckPermissions();
        } else {
          console.log('never_ask_again', result);
          neverPermissions();
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };

  // 토큰 값 가져오기 관련 로직
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return getToken();
    }
  };

  const recheckPermissions = () => {
    Alert.alert(
      '권한 설정에 문제가 발생하였어요.',
      '권한 설정을 다시 시도해주세요',
      [
        {
          text: '재시도',
          onPress: () => {
            PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            ]);
          },
          style: 'default',
        },
        {
          text: '나중에 하기',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  // 권한 설정이 불가능한 경우 표시되는 Alert차
  const neverPermissions = () => {
    Alert.alert(
      '권한 설정에 문제가 발생하였어요.',
      '설정에서 직접 권한을 설정하시거나 앱을 재설치 해주세요',
      [
        {
          text: '확인',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <>
      <WebView
        onLoadEnd={handleEndLoading}
        onMessage={handleOnMessage}
        webviewRef={webviewRef}
        // source={{uri: 'http://localhost:3000'}}
        // source={{uri: 'http://172.28.128.1:3000'}}
        source={{uri: 'https://j9b208.p.ssafy.io/'}}
        // 웹뷰에서는 로컬 주소가 안됨 -> 어랏 되네..? -> apk 내보낼때만 프론트 배포 주소 쓰자
        // API 요청 instance도 같이 바꿔줘야 함
      />
    </>
  );
};

export default App;
