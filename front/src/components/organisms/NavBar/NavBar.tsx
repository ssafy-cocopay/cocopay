import React from "react"
import { useNavigate } from 'react-router-dom'
import { PATH } from '@/constants/path'

const NavBar = () => {
    const navigate = useNavigate()

    const navigatePage = (path: string) => {
        navigate(path)
    }
    
    return (
        <>
            <div onClick={() => navigatePage(PATH.HOME)}>1</div>
            <div onClick={() => navigatePage(PATH.CARDLIST)}>2</div>
            <div>3</div>
            <div onClick={() => navigatePage(PATH.STATISTICS)}>4</div>
            <div onClick={() => navigatePage(PATH.MYPAGE)}        >5</div>
        </>
    )
}

export default NavBar;
