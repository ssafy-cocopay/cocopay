/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {MutableRefObject, useRef} from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewMessageEvent,
} from 'react-native-webview/lib/WebViewTypes';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//       <View style={styles.sectionContainer}>
//         <Text
//           style={[
//             styles.sectionTitle,
//             {
//               color: isDarkMode ? Colors.white : Colors.black,
//             },
//           ]}>
//           {title}
//         </Text>
//         <Text
//           style={[
//             styles.sectionDescription,
//             {
//               color: isDarkMode ? Colors.light : Colors.dark,
//             },
//           ]}>
//           {children}
//         </Text>
//       </View>
//   );
// }

const App = () => {
  //웹뷰와 RN과의 소통은 아래의 ref 값을 이용하여 이루어진다
  let webviewRef = useRef<WebView>(null);

  // WebView 로딩 완료시
  const handleEndLoading = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
    console.log('handleEndLoading', e);
    // RN에서 웹뷰로 정보 보내는 메소드
    webviewRef.current?.postMessage('로딩완료시 webview로 정보 보내는 곳');
  };

  enum Event {
    BIO_AUTH,
  }

  const convertToEvent = (data: any): Event | undefined => {
    if (data === 'BIO_AUTH') {
      return Event.BIO_AUTH;
    }

    // 인증 완료시 다음 actions은 여기에

    return undefined;
  };

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = async (e: WebViewMessageEvent) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(e.nativeEvent.data);
    const event = convertToEvent(e.nativeEvent.data);
    if (event !== undefined) {
      switch (event) {
        case Event.BIO_AUTH:
          await handleBioAuth();
          break;

        // 필요하다면 다음 actions 작성은 여기에
      }
    }
  };

  const handleBioAuth = () => {
    //complete
    webviewRef.current?.postMessage('SUCCESS');
  };

  return (
    <WebView
      onLoadEnd={handleEndLoading}
      onMessage={handleOnMessage}
      webviewRef={webviewRef}
      // source={{uri: 'http://localhost:3000'}}
      // source={{uri: 'http://192.168.219.102:3000'}}
      source={{uri: 'https://j9b208.p.ssafy.io/'}}
      // 웹뷰에서는 로컬 주소가 안됨 -> 어랏 되네..? -> apk 내보낼때만 프론트 배포 주소 쓰자
      // API 요청 instance도 같이 바꿔줘야 함
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
