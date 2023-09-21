const PATH = {
  ROOT: "/",
  SIGNUP: "/signup",
  PASSWORD_SETTING: "/password-setting",
  FIGNER_SETTING: "/finger-setting",
  SPLASH: "/splash",
  CARDUPLOAD: "/signup/card-upload",
  CARDUPLOADLIST: "/signup/card-upload/list",
  PRIORITY: "/priority",
  LOGIN_FINGER: "/login/finger-password",
  LOGIN_PASSWORD: "/login/password",
  // HOME: "/home",
  PAYOFFLINE: "/pay/offline",
  CARDLIST: "/main/cardlist",
  SCAN: "/scan",
  SCAN_CARDINFO: "/main/cardlist/scan/card-info",
  CARD_DETAIL: "/main/cardlist/detail/cardId",
  CARD_DETAIL_PURCHASED: "/main/cardlist/detail/cardId/purchased",
  STATISTICS: "/main/statistics",
  MYPAGE: "/main/mypage",
  MYPAGE_WITHDRAWAL: "/mypage/withdrawal",
  PAYONLINE: "/pay/online",
  PAYONLINECOMPLETE: "/pay/online/complete",
  MAIN: "/main",
  QRCAMERA: "/main/qrcamera"
} as const;

export { PATH };
