import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const CardUploadListPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <div>
            자동 등록된 카드 리스트 페이지
            <Button onClick={() => navigatePage(PATH.PRIORITY)} option="activated" size="medium" $width="200px">
                확인
            </Button>
        </div>
    )
}

export default CardUploadListPage;