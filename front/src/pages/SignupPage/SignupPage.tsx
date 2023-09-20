import React from "react"
import Button from "@/components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from '@/constants/path'

const SignupPage = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    return (
        <div>
            사인업페이지
            <Button onClick={() => navigatePage(PATH.PASSWORD_SETTING)} option="activated" size="medium" $width="200px">
                확인
            </Button>
        </div>
    )
}

export default SignupPage;