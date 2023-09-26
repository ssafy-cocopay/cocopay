import React, { useState } from "react";
import { Image } from "@/components/atoms/Image/Image";
import imgShoppingComplete from "@/assets/images/img-shopping-complete.png";


const ShoppingCompletePage = () => {

    return (
        <div>
          <Image src={imgShoppingComplete} width={100} $unit="%" />
        </div>
    );
}

export default ShoppingCompletePage;
