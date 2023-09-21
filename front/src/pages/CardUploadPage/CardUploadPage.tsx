import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const CardUploadPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <div>
            카드 자동 등록 페이지
            <Button onClick={() => navigatePage(PATH.CARDUPLOADLIST)} option="activated" size="medium" $width="200px">
                확인
            </Button>
        </div>
    )
}

export default CardUploadPage;