import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Container } from "@/components/atoms/Container/Container.styles";
import Background5 from "@/assets/images/bg-onboarding5.png";

type OnboardingPage5Props = {
  onNextPage: () => void;
};

function OnboardingPage5(props: OnboardingPage5Props) {
  const { onNextPage } = props;
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  return (
    <Container
      $border={true}
      style={{
        backgroundImage: `url(${Background5})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Container $border={false} $paddingTop="100px">
        <Wrapper $alignItems="start">
          <Text size="subtitle2" color="white">
            모든 카드들의
          </Text>
          <Text size="subtitle2" color="white">
            할인율과 실적을 분석하여
          </Text>
          <Text size="subtitle2" color="white">
            소비처별 최적의 카드를
          </Text>
          <Text size="subtitle2" color="white">
            추천해주는 코코페이!
          </Text>
          <br />
          <Text size="subtitle2" color="white">
            시작해볼까요?
          </Text>
        </Wrapper>
        <Button
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={() => navigatePage(PATH.CARDUPLOAD)}
          option="activated"
          $width="70%"
          $border="none"
        >
          코코페이 사용하러 가기
        </Button>
      </Container>
    </Container>
  );
}

export default OnboardingPage5;
