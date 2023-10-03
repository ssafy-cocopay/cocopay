import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Background } from "@/components/atoms/Background/Background.styles";
// import { Container } from "@/components/atoms/Container/Container.styles";
// import { PATH } from "@/constants/path";
// import { Text } from "@/components/atoms/Text/Text.styles";
// import Back from "@/components/atoms/Back/Back";
// import KeypadButtons from "@/components/molecules/KeypadButtons/KeypadButtons";
// import styled, { keyframes } from 'styled-components';

// const LoginPasswordPage = () => {
//   const navigate = useNavigate();
//   const navigatePage = (path: string) => {
//     navigate(path);
//   };
//   const [step, setStep] = useState(3);
//   const [passwordIncorrect, setPasswordIncorrect] = useState(false); // 상태 추가

//   const handlePasswordMatch = () => {
//     // TODO: PATH.MAIN으로 navigating하는 코드
//     // navigatePage(PATH.MAIN);
//     const isPasswordCorrect = true; // 비밀번호 일치 여부를 확인하는 로직 필요
//     if (!isPasswordCorrect) {
//       setPasswordIncorrect(true);
//     } else {
//       // TODO: PATH.MAIN으로 navigating하는 코드
//       navigatePage(PATH.MAIN);
//     }
//   };

//   const vibration = keyframes`
//   from {
//     transform: rotate(1deg);
//   }
//   to {
//     transform: rotate(-1deg);
//   }
// `;
// const VibrationAnimation = styled.div`
//   animation: ${vibration} 0.1s ease-in-out infinite alternate;
// `;

//   return (
//     <Background $colormode="gradient">
//       <Container $left={true} $paddingTop="36px">
//         <Back>뒤로가기</Back>
//         <Container
//           $marginTop="36px"
//           $paddingTop="63px"
//           $backgroundColor="white"
//           $borderRadius="38px"
//           height="auto"
//           $padding="36px"
//         >
//           <Text size="subtitle1" fontWeight="bold">
//             간편 비밀번호 입력
//           </Text>
//           <Text size="body1" fontWeight="medium">
//             비밀번호 6자리를 입력해주세요
//           </Text>
//           {/* <KeypadButtons
//             step={step}
//             setStep={setStep}
//             onPasswordMatch={handlePasswordMatch}
//           ></KeypadButtons> */}
//             <KeypadButtons
//             step={step}
//             setStep={setStep}
//             onPasswordMatch={handlePasswordMatch}
//           >
//             {passwordIncorrect && (
//               <VibrationAnimation>
//                 비밀번호가 틀렸습니다. 다시 입력해주세요.
//               </VibrationAnimation>
//             )}
//           </KeypadButtons>

//         </Container>
//       </Container>
//     </Background>
//   );
// };

// export default LoginPasswordPage;

export {};
