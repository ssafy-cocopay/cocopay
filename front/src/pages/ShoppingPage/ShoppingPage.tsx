import React, { useState } from "react";
import { Image } from "@/components/atoms/Image/Image";
import imgShopping1 from "@/assets/images/img-shopping1.png";
import imgShopping2 from "@/assets/images/img-shopping2.png";
import imgShopping3 from "@/assets/images/img-shopping3.png";

const ShoppingPage = () => {
    const [currentImage, setCurrentImage] = useState<string>(imgShopping1);
    
    const handleImageClick = () => {
        if (currentImage === imgShopping1) {
          setCurrentImage(imgShopping2);
        } else if (currentImage === imgShopping2) {
          setCurrentImage(imgShopping3);
        } else if (currentImage === imgShopping3) {
          window.open(
            '/pay/online/qrcode',
            '_blank', 
            'width=450,height=600,left=100,top=100'
          );
        }
    };


    return (
        <div>
          <Image src={currentImage} width={100} $unit="%" onClick={handleImageClick} />
        </div>
    );
}

export default ShoppingPage;
