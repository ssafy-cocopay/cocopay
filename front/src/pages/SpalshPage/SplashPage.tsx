import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const SplashPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <div>
            스플래시
            <Button onClick={() => navigatePage(PATH.CARDUPLOAD)} option="activated" size="medium" $width="200px">
                코코페이 사용하러 가기
            </Button>
        </div>
    )
}

export default SplashPage;