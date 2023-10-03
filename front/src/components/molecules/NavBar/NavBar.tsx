import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "@/constants/path";
import { Image } from "@/components/atoms/Image/Image";
import { StyledNavBar, StyledNavBarBackground } from "./NavBar.styles";

// 네비바 비활성화 이미지
import navbarHomeGrey from "@/assets/images/navbar-home-grey.png";
import navbarCardGrey from "@/assets/images/navbar-card-grey.png";
import navbarStatisticsGrey from "@/assets/images/navbar-statistics-grey.png";
import navbarMypageeGrey from "@/assets/images/navbar-mypage-grey.png";
// 네비바 활성화 이미지
import navbarHomeBlue from "@/assets/images/navbar-home-blue.png";
import navbarCardBlue from "@/assets/images/navbar-card-blue.png";
import navbarStatisticsBlue from "@/assets/images/navbar-statistics-blue.png";
import navbarMypageeBlue from "@/assets/images/navbar-mypage-blue.png";
import navbarQr from "@/assets/images/navbar-qr.png";
import navbarBackground from "@/assets/images/navbar-background.png";

const navBarInfo = [
  { src: [navbarHomeGrey, navbarHomeBlue], path: PATH.MAIN },
  { src: [navbarCardGrey, navbarCardBlue], path: PATH.CARDLIST },
  { src: [navbarQr, navbarQr], path: PATH.QRCAMERA },
  { src: [navbarStatisticsGrey, navbarStatisticsBlue], path: PATH.STATISTICS },
  { src: [navbarMypageeGrey, navbarMypageeBlue], path: PATH.MYPAGE },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigatePage = (path: string) => {
    navigate(path);
  };

  const nowPath = location.pathname;

  return (
    <nav>
      <StyledNavBarBackground style={{ marginTop: "100px" }}>
        <Image src={navbarBackground} width={100} $unit="%"></Image>
      </StyledNavBarBackground>
      <StyledNavBar>
        {navBarInfo.map(({ src, path }) => {
          return (
            <Image
              key={path}
              src={
                path === PATH.MAIN
                  ? nowPath === path
                    ? src[1]
                    : src[0]
                  : nowPath.substring(0, path.length) === path
                  ? src[1]
                  : src[0]
              }
              onClick={() => {
                if (path === PATH.QRCAMERA) {
                  window.ReactNativeWebView.postMessage("QR_CAMERA");
                } else {
                  navigatePage(path);
                }
              }}
              height={src[0] === navbarQr ? 55 : 45}
              $unit="px"
            />
          );
        })}
      </StyledNavBar>
    </nav>
  );
};

export default NavBar;
