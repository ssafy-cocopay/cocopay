import React from "react";
import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "@/constants/path";
import SignupPage from "@/pages/SignupPage/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import PasswordSettingPage from "@/pages/PasswordSettingPage/PasswordSettingPage";
import FingerSettingPage from "@/pages/FingerSettingPage/FingerSettingPage";
import SplashPage from "@/pages/SpalshPage/SplashPage";
import CardUploadPage from "@/pages/CardUploadPage/CardUploadPage";
import PriorityPage from "@/pages/PriorityPage/PriorityPage";
import LoginFingerPage from "@/pages/LoginFingerPage/LoginFingerPage";
import LoginPasswordPage from "@/pages/LoginPasswordPage/LoginPasswordPage";
import HomePage from "@/pages/HomePage/HomePage";
import PayOfflinePage from "@/pages/PayOfflinePage/PayOfflinePage";
import CardListPage from "@/pages/CardListPage/CardListPage";
import ScanPage from "@/pages/ScanPage/ScanPage";
import ScanCardInfoPage from "@/pages/ScanCardInfoPage/ScanCardInfoPage";
import CardDetailPage from "@/pages/CardDetailPage/CardDetailPage";
import CardDetailPurchasedPage from "@/pages/CardDetailPurchasedPage/CardDetailPurchasedPage";
import StatisticsPage from "@/pages/StatisticsPage/StatisticsPage";
import MyPage from "@/pages/Mypage/MyPage";
import MypageWithdrawalPage from "@/pages/MyPageWithdrawalPage/MyPageWithdrawalPage";
import PayOnlinePage from "@/pages/PayOnlinePage/PayOnlinePage";
import PayOnlineCompletePage from "@/pages/PayOnlineCompletePage/PayOnlineCompletePage";
import MainPage from "@/pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: PATH.PASSWORD_SETTING,
    element: <PasswordSettingPage />,
  },
  {
    path: PATH.FIGNER_SETTING,
    element: <FingerSettingPage />,
  },
  {
    path: PATH.SPLASH,
    element: <SplashPage />,
  },
  {
    path: PATH.CARDUPLOAD,
    element: <CardUploadPage />,
  },
  {
    path: PATH.PRIORITY,
    element: <PriorityPage />,
  },
  {
    path: PATH.LOGIN_FINGER,
    element: <LoginFingerPage />,
  },
  {
    path: PATH.LOGIN_PASSWORD,
    element: <LoginPasswordPage />,
  },
  {
    path: PATH.MAIN,
    element: <MainPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATH.CARDLIST,
        element: <CardListPage />,
      },
      {
        path: PATH.SCAN_CARDINFO,
        element: <ScanCardInfoPage />,
      },
      {
        path: PATH.STATISTICS,
        element: <StatisticsPage />,
      },
      {
        path: PATH.CARD_DETAIL,
        element: <CardDetailPage />,
      },
      {
        path: PATH.CARD_DETAIL_PURCHASED,
        element: <CardDetailPurchasedPage />,
      },
      {
        path: PATH.MYPAGE,
        element: <MyPage />,
      },
    ],
  },
  // {
  //   path: PATH.HOME,
  //   element: <HomePage />,
  // },
  {
    path: PATH.PAYOFFLINE,
    element: <PayOfflinePage />,
  },
  // {
  //   path: PATH.CARDLIST,
  //   element: <CardListPage />,
  // },
  {
    path: PATH.SCAN,
    element: <ScanPage />,
  },
  // {
  //   path: PATH.SCAN_CARDINFO,
  //   element: <ScanCardInfoPage />,
  // },
  // {
  //   path: PATH.CARD_DETAIL,
  //   element: <CardDetailPage />,
  // },
  // {
  //   path: PATH.CARD_DETAIL_PURCHASED,
  //   element: <CardDetailPurchasedPage />,
  // },
  // {
  //   path: PATH.STATISTICS,
  //   element: <StatisticsPage />,
  // },
  // {
  //   path: PATH.MYPAGE,
  //   element: <MyPage />,
  // },
  {
    path: PATH.MYPAGE_WITHDRAWAL,
    element: <MypageWithdrawalPage />,
  },
  {
    path: PATH.PAYONLINE,
    element: <PayOnlinePage />,
  },
  {
    path: PATH.PAYONLINECOMPLETE,
    element: <PayOnlineCompletePage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
