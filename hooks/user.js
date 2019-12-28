import { useState } from "react"

export const initialUser = {
    id: 1,
    username: "test",
    password: "123456",
    orders: [],
    name: "Khun new"
}

export const useUserInfo =  () => {
    const userInfo = useState(initialUser);
    return userInfo;  
}