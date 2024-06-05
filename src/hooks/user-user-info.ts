import { useCallback } from "react"
import { IUserInfo } from "../types"

export const useUserInformation = () => {
    const userInfo: IUserInfo = JSON.parse(localStorage.getItem('userInfo')!)

    const updateUserInfo = useCallback((userData: IUserInfo) => (localStorage.setItem('userInfo', JSON.stringify(userData))), []);

    return { userInfo, updateUserInfo };
}