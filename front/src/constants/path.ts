const PATH = {
  ROOT: "/",
  SIGNUP: "/signup",
  PASSWORD_SETTING: "/password-setting",
  FIGNER_SETTING: "/finger-setting",
  SPLASH: "/splash",
  CARDUPLOAD: "/signup/card-upload",
  PRIORITY: "/priority",
  LOGIN_FINGER: "/login/finger-password",
  LOGIN_PASSWORD: "/login/password",
  HOME: "/home",
  PAYOFFLINE: "/pay/offline",
  CARDLIST: "/cardlist",
  SCAN: "/scan",
  SCAN_CARDINFO: "/scan/card-info",
  CARD_DETAIL: "/detail/${cardId}",
  CARD_DETAIL_PURCHASED: "/detail/${cardId}/purchased",
  STATISTICS: "/statistics",
  MYPAGE: "/mypage",
  MYPAGE_WITHDRAWAL: "/mypage/withdrawal",
  PAYONLINE: "/pay/online",
  PAYONLINECOMPLETE: "/pay/online/complete"
} as const;

export { PATH };
