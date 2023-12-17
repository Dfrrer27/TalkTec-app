import { axi, authAxios } from "./useAxios"
import jwt_decode from "jwt-decode"

// Función para buscar un usuario
export const q = async (query) => {
    const res = await authAxios.get(`/users/u/search/?query=${query}`)
    return res.data
}

// Función para actualizar el perfil del usuario
export const updateProfile = async (data) => {
    await authAxios.put(`/users/${localStorage.getItem('name')}/`, data)
}

// Función para obtener el perfil de un usuario específico
export const userProfile = async (name) => {
    // console.log(`/users/${name}/`)
    const res = await authAxios.get(`/users/${name}/`)
    return res.data
}

// Función para cerrar sesión
export const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
} 

export const registerReq = async (code, email, name, last_name, degree, password) => {
    await axi.post('/users/register/', {code, email, name, last_name, degree, password})
}

// Función para hacer una solicitud de inicio de sesión
export const loginReq = async (data) => {
    const res = await axi.post('/users/login/', data)
    console.log(res.data)

    const { access, refresh } = res.data

    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)

    const user = jwt_decode(localStorage.getItem('access'))

    localStorage.setItem('name', user.name)
    localStorage.setItem('last_name', user.last_name)
    localStorage.setItem('degree', user.degree)
    localStorage.setItem('user_id', user.user_id)
    localStorage.setItem('avatar', user.avatar)
}