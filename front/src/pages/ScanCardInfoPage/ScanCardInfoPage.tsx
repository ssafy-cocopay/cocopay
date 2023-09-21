import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const ScanCardInfoPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <div>
            카드 정보 입력 페이지
            <Button onClick={() => navigatePage(PATH.CARD_DETAIL)} option="activated" size="medium" $width="200px">
                카드 등록
            </Button>
        </div>
    )
}

export default ScanCardInfoPage;