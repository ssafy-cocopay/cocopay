import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";
import { Text } from "@/components/atoms/Text/Text.styles"
import { Image } from "@/components/atoms/Image/Image"
import iconToggle from "@/assets/images/icon-toggle.png"
import iconChevronRightGrey from "@/assets/images/icon-chevron-right-grey.png"
import { MypageWrapper, Checkbox } from "./Mypage.styles"

const MyPage = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        minHeight: "100vh",
        padding: "36px 28px",
      }}
    >
      <WhiteRoundedBox
      height="276px"
      $borderRadius="38px"
      $padding="36px 24px"
      $margin="168px 0 0 0"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
      >
        <MypageWrapper>
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            바코드 잠금 여부
          </Text>
          <Checkbox type="checkbox" id="toggle" />
        </MypageWrapper>
        <MypageWrapper>
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            지문 인식
          </Text>
        <Checkbox type="checkbox" id="toggle" />
        </MypageWrapper>
        <MypageWrapper>
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            비밀번호 설정(재설정)
          </Text>
          <Image
          src={iconChevronRightGrey}
          height={24}
          $unit="px"
          >
          </Image>
        </MypageWrapper>
        <MypageWrapper>
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            카드 추천
          </Text>
          <MypageWrapper>
            <Text
            size="small1"
            fontWeight="light"
            color="blue"
            style={{lineHeight: "24px"}}
            >
              할인율
            </Text>
            <Image
            src={iconChevronRightGrey}
            height={24}
            $unit="px"
            >
            </Image>
          </MypageWrapper>
        </MypageWrapper>
        <MypageWrapper>
          <Text
          size="body2"
          fontWeight="bold"
          color="black1"
          >
            회원 탈퇴
          </Text>
          <Image
          src={iconChevronRightGrey}
          height={24}
          $unit="px"
          >
          </Image>
        </MypageWrapper>
      </WhiteRoundedBox>
    </Background>
  );
};

export default MyPage;
