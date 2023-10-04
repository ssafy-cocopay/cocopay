import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "@/components/atoms/Background/Background.styles";
import Button from "@/components/atoms/Button/Button";
import coco from "@/assets/images/COCO.png";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

export const LandingPage = ({ receivedMessage }: any) => {
  const navigate = useNavigate();
  const [buttonAnimation, setButtonAnimation] = useState(false);
  // const bgColor = receivedMessage === "tt" ? "gradient" : "blue";

  const navigatePage = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    setButtonAnimation(true);
    return () => setButtonAnimation(true);
  }, []);

  const buttonStyle = {
    width: "85%",
    transition: "opacity 4s ease", // 3초 동안 서서히 변경되도록 설정
    opacity: buttonAnimation ? 1 : 0, // 초기에 버튼은 투명, 나중에 불투명하게 변경
  };

  const imageStyle = {
    transform: buttonAnimation ? "translateY(0%)" : "translateY(100%)", // 초기에 아래로 이동한 상태
    transition: "transform 2s ease", // 3초 동안 위로 이동하면서 애니메이션을 적용
  };

  return (
    <Background
      $colormode={
        receivedMessage ===
        "dkB9mGohTVGvMV60EMzN6D:APA91bHkdHGlNJ3UrzWpiVpSNzKEBOSaK545kVy9lPLcCynXFdj9yVAHY72FanTJcQIArMJUvbeRR4k9s7eE_rQguMLc2GhzK0lLS222Sn9r7q0zSlAiQWArROrGBPOLcRbnZD2-dagJ"
          ? "gradient"
          : "blue"
      }
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <Wrapper $flexGrow={5}>
          <Image src={coco} width={12} style={imageStyle} />
        </Wrapper>
        <Wrapper $flexGrow={3} style={{ gap: "15px" }}>
          <Button
            onClick={() => navigatePage(PATH.LOGIN_FINGER)}
            size="large"
            // $width="85%"
            style={buttonStyle}
          >
            로그인
          </Button>
          <Button
            onClick={() => navigatePage(PATH.SIGNUP)}
            option="activated"
            size="large"
            // $width="85%"
            style={buttonStyle}
          >
            회원가입
          </Button>
        </Wrapper>
      </Container>
    </Background>
  );
};
