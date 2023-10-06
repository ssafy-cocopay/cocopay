import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PayOfflinePage from "./PayOfflinePage";
import PayOfflineCompletePage from "./PayOfflineCompletePage";
import { useGetIsPurchased } from "@/apis/Purchase/Queries/useGetIsPurchased";
import { useRecoilState } from "recoil";
import { IsPurchasedAtom } from '../../states/OfflinePageAtoms';


function PayOffline() {
  const [currentPage, setCurrentPage] = useState("PayOfflinePage");
  const navigate = useNavigate();

  const IsPurchased = useGetIsPurchased()
  const [isPurchased, setIsPurchased] = useRecoilState(IsPurchasedAtom)

  useEffect(() => {
    setIsPurchased(IsPurchased);
  }, [IsPurchased, setIsPurchased]);

  // 3초 후에 페이지를 전환하는 함수
  const navigateToCompletePage = () => {
    setCurrentPage("PayOfflineCompletePage");
  };

  useEffect(() => {
    // 2초 후에 자동으로 페이지를 전환합니다.
    const timer = setTimeout(navigateToCompletePage, 2000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const renderPage = () => {
    switch (currentPage) {
      case "PayOfflinePage":
        return <PayOfflinePage />;
      case "PayOfflineCompletePage":
        return <PayOfflineCompletePage />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default PayOffline;
