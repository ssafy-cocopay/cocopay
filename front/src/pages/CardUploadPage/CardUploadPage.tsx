import React, { useState } from "react"
import CardUploadLoadingPage from "./CardUploadLoadingPage"
import CardUploadCompletePage from "./CardUploadCompletePage"

const CardUploadPage = () => {
    const [activatedNum, setActivatedNum] = useState<keyof typeof CardUploadPages>(1);


    const handleNextPage = () => {
        if (activatedNum < 2) {
        setActivatedNum((prevNum) => prevNum + 1 as keyof typeof CardUploadPages);
        }
    };

    const CardUploadPages = {
        1: <CardUploadLoadingPage onNextPage={handleNextPage}/>,
        2: <CardUploadCompletePage />,
      };
    return (
        <div>
            {CardUploadPages[activatedNum]}
        </div>
    )
}

export default CardUploadPage;