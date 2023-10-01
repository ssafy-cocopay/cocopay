import React, { useState } from "react";
import OnboardingPage1 from "./OnboardingPage1"; // OnboardingPage1 컴포넌트 import
import OnboardingPage2 from "./OnboardingPage2"; // OnboardingPage2 컴포넌트 import
import OnboardingPage3 from "./OnboardingPage3"; // OnboardingPage3 컴포넌트 import
import OnboardingPage4 from "./OnboardingPage4"; // OnboardingPage4 컴포넌트 import
import OnboardingPage5 from "./OnboardingPage5"; // OnboardingPage5 컴포넌트 import

function OnboardingPages() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // 페이지 번호에 따라 해당 페이지 컴포넌트를 렌더링합니다.
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <OnboardingPage1 onNextPage={handleNextPage} />;
      case 2:
        return <OnboardingPage2 onNextPage={handleNextPage} />;
      case 3:
        return <OnboardingPage3 onNextPage={handleNextPage} />;
      case 4:
        return <OnboardingPage4 onNextPage={handleNextPage} />;
      case 5:
        return <OnboardingPage5 />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default OnboardingPages;
