import { authAxios } from "./useAxios"

export const editComment = async (data) => {
    await authAxios.put(`/publications/comment/${data.id}/`, data)
}

export const deleteComment = async (id) => {
    await authAxios.delete(`/publications/comment/${id}/`)
}

export const addComment = async (data) => {
    await authAxios.post(`/publications/comments/${data.id}/`, data)
}

export const getComments = async (id) => {
    const response = await authAxios.get(`/publications/comments/${id}/`)
    return response.data
}

export const getUserLikes = async (name) => {
    const response = await authAxios.get(`/publications/likes/${name}/`)
    return response.data
}

// Obtener publicaciones por carrera
export const getPublicationsByDegree = async (degreeId) => {
    const response = await authAxios.get(`/publications/degree/${degreeId}/`)
    return response.data
}

// Obtener detalles de una publicación
export const getSoloPublication = async (id) => {
    const response = await authAxios.get(`/publications/${id}/`)
    return response.data
}

// Dar like a una publicación
export const like = async (id) => {
    await authAxios.post(`/publications/like/${id}/`)
}

export const deletePublication = async (id) => {
    await authAxios.delete(`/publications/${id}/`)
}

export const editPublication = async (data) => {
    await authAxios.put(`/publications/${data.get('id')}/`, data)
}

// Obtener publicaciones de un usuario
export const getUserPublications = async (name) => {
    const response = await authAxios.get(`/publications/my/${name}`)
    return response.data
}

// Obtener lista de publicaciones paginadas
export const getPublications = async ({ pageParam = 1 }) => {
    const response = await authAxios.get(`/publications/?page=${pageParam}&pages=10`)
    return response.data
} 

// Añadir una nueva publicación
export const addPublication = async (data) => {
    await authAxios.post("/publications/", data)
}
