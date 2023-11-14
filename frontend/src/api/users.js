import { axi, authAxios } from "./useAxios"
import jwt_decode from "jwt-decode";


export const updateProfile = async (data) => {
    await authAxios.put(`/users/${localStorage.getItem('name')}/`, data)
}

export const userProfile = async (name) => {
    console.log(`/users/${name}/`);
    const res = await authAxios.get(`/users/${name}/`)
    return res.data
}

export const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
} 

export const registerReq = async (code, email, name, last_name, degree, password) => {
    await axi.post('/users/register/', {code, email, name, last_name, degree, password})
}

export const loginReq = async (data) => {
    const res = await axi.post('/users/login/', data)
    console.log(res.data)

    const { access, refresh } = res.data

    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)

    const user = jwt_decode(localStorage.getItem('access'))

    localStorage.setItem('name', user.name)
    localStorage.setItem('user_id', user.user_id)
    localStorage.setItem('avatar', user.avatar)
}