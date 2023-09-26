import { Background } from "@/components/atoms/Background/Background.styles";
import React from "react";
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles";
import { Text } from "@/components/atoms/Text/Text.styles"
import { Image } from "@/components/atoms/Image/Image"
import iconToggle from "@/assets/images/icon-toggle.png"
import iconChevronRightGrey from "@/assets/images/icon-chevron-right-grey.png"
import { MypageWrapper, Checkbox, Hr } from "./Mypage.styles"
import imgMypagePenguin from "@/assets/images/img-mypage-penguin.png"

const MyPage = () => {
  return (
    <Background
      $colormode="gradient"
      style={{
        position:"fixed",
        padding: "36px 28px",
      }}
    >
      <Image
      src={imgMypagePenguin}
      width={100}
      $unit="%"
      style={{
        position: 'relative'
      }}
      >
      </Image>
      <WhiteRoundedBox
      height="432px"
      $borderRadius="38px"
      $padding="36px 24px"
      style={{
        marginTop: "-35px",
      }}
      >
        <MypageWrapper
      style={{
        marginTop: "25px"
      }}
      >
        <Text
        size="subtitle2"
        fontWeight="bold"
        color="black1"
        >
          성현
        </Text>
        <Text
        size="subtitle2"
        fontWeight="light"
        color="black1"
        >
          님의 마이페이지
        </Text>
      </MypageWrapper>
      <Hr />
        <MypageWrapper // 마이페이지 리스트 감싸고 있음
        $justifyContent="space-between"
        style={{
          flexDirection: "column",
          height: "60%"
        }}
        >
          <MypageWrapper
          $justifyContent="space-between"
          >
            <Text
            size="body2"
            fontWeight="bold"
            color="black1"
            >
              바코드 잠금 여부
            </Text>
            <Checkbox type="checkbox" id="toggle" />
          </MypageWrapper>
          <MypageWrapper
          $justifyContent="space-between"
          >
            <Text
            size="body2"
            fontWeight="bold"
            color="black1"
            >
              지문 인식
            </Text>
          <Checkbox type="checkbox" id="toggle" />
          </MypageWrapper>
          <MypageWrapper
          $justifyContent="space-between"
          >
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
          <MypageWrapper
          $justifyContent="space-between"
          >
            <Text
            size="body2"
            fontWeight="bold"
            color="black1"
            >
              카드 추천
            </Text>
            <MypageWrapper // 할인율과 ChevronRight 감싸고 있음
            $justifyContent="space-between"
            >
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
          <MypageWrapper
          $justifyContent="space-between"
          >
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
        </MypageWrapper>
      </WhiteRoundedBox>
    </Background>
  );
};

export default MyPage;
