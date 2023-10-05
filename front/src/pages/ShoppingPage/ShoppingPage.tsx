import React, { useState, useEffect } from "react";
import { Image } from "@/components/atoms/Image/Image";
import imgShopping1 from "@/assets/images/img-shopping1.png";
import imgShopping2 from "@/assets/images/img-shopping2.png";
import imgShopping3 from "@/assets/images/img-shopping3.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsOnlinePurchasedAtom } from "@/states/OnlineQrPageAtoms";
import { useGetIsOnlinePurchased } from "@/apis/Purchase/Queries/useGetIsPurchased";

const ShoppingPage = () => {
  const [currentImage, setCurrentImage] = useState<string>(imgShopping1);
  const [gotoComplete, setGotoComplete] = useState<boolean>(false);
  const navigate = useNavigate();
  const IsOnlinePurchased = useGetIsOnlinePurchased();
  const [isOnlinePurchased, setIsOnlinePurchased] = useRecoilState(IsOnlinePurchasedAtom)
  console.log(IsOnlinePurchased, isOnlinePurchased);

  useEffect(() => {
    if (isOnlinePurchased === "있음") {
      navigate("/shopping/complete");
    }
  }, [isOnlinePurchased, navigate]);

  useEffect(() => {
    setIsOnlinePurchased(IsOnlinePurchased);
  }, [IsOnlinePurchased, setIsOnlinePurchased]);

  useEffect(() => {
    // 로컬 스토리지의 변경을 감지하는 함수
    const handleStorageChange = (e: StorageEvent) => {
      console.log("Storage event detected!");
      if (e.key === "goToComplete") {
        setGotoComplete(JSON.parse(e.newValue || "false"));
      }
    };

    // 이벤트 리스너 추가
    window.addEventListener("storage", handleStorageChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    console.log("goToComplete value: ", gotoComplete);
    if (gotoComplete) {
      navigate("/shopping/complete"); // ShoppingComplete 경로로 이동
    }
  }, [gotoComplete, navigate]); // gotoComplete나 navigate가 변경될 때마다 실행

  const handleImageClick = () => {
    if (currentImage === imgShopping1) {
      setCurrentImage(imgShopping2);
    } else if (currentImage === imgShopping2) {
      setCurrentImage(imgShopping3);
    } else if (currentImage === imgShopping3) {
      // setPayData({
      //   category: "온라인쇼핑",
      //   storeName: "무신사",
      //   orderPrice: 38700
      // });
      window.open(
        "/pay/online/qrcode",
        "PopupName",
        "width=450,height=600,left=100,top=100"
      );
    }
  };

  return (
    <div>
      <Image
        src={currentImage}
        width={100}
        $unit="%"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ShoppingPage;
