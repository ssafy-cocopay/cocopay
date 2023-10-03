import React from "react";
import { Container } from "@/components/atoms/Container/Container.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import { Image } from "@/components/atoms/Image/Image";
import Penguins from "@/assets/images/img-penguins.png";
import Background1 from "@/assets/images/bg-onboarding-1.png";
import Hello from "@/assets/images/text-안녕하세요.png";
import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";

// onNextPage의 타입을 명시적으로 정의
type OnboardingPage1Props = {
  onNextPage: () => void; // 예를 들어, 이동 함수의 타입은 void로 정의할 수 있습니다.
};

function OnboardingPage1(props: OnboardingPage1Props) {
  const { onNextPage } = props;
  const handlePageTransition = () => {
    // 페이지 이동 로직 추가
    onNextPage(); // 다음 페이지로 이동
  };

  return (
    <Container
      style={{
        backgroundImage: `url(${Background1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      onClick={handlePageTransition}
    >
      <Container $left={true} $paddingTop="63px" height="auto" $padding="20px">
        <Wrapper $alignItems="start" $padding="10px 0">
          <Text size="subtitle2" fontWeight="bold" color="white">
            본인확인이 완료되었어요.
          </Text>
          <br />
          <Text size="subtitle2" fontWeight="bold" color="white">
            본격적으로 코코페이를
          </Text>
          <Text size="subtitle2" fontWeight="bold" color="white">
            이용해볼까요?
          </Text>
        </Wrapper>
        {/* TODO: 이미지 크기 변하지 않게 설정하기 */}
        <Image
          src={Hello}
          width={15}
          style={{ marginLeft: "40px", marginTop: "70%" }}
        ></Image>
        <Image
          style={{ position: "fixed", bottom: 50 }}
          src={Penguins}
          width={20}
        ></Image>
      </Container>
    </Container>
  );
}

export default OnboardingPage1;
