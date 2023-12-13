import { authAxios } from "./useAxios"

export const editComment = async (data) => {
    await authAxios.put(`/publications/comment/${data.id}/`, data)
}

export const deleteComment = async (id) => {
    await authAxios.delete(`/publications/comment/${id}/`);
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

export const getPublicationsByDegree = async (degreeId) => {
    const response = await authAxios.get(`/publications/degree/${degreeId}/`);
    return response.data;
};

export const getSoloPublication = async (id) => {
    const response = await authAxios.get(`/publications/${id}/`)
    return response.data
}

export const like = async (id) => {
    await authAxios.post(`/publications/like/${id}/`)
}

export const deletePublication = async (id) => {
    await authAxios.delete(`/publications/${id}/`)
}

export const editPublication = async (data) => {
    await authAxios.put(`/publications/${data.get('id')}/`, data);
}

export const getUserPublications = async (name) => {
    const response = await authAxios.get(`/publications/my/${name}`)
    return response.data
}

export const getPublications = async ({ pageParam = 1 }) => {
    const response = await authAxios.get(`/publications/?page=${pageParam}&pages=10`)
    return response.data
} 

export const addPublication = async (data) => {
    await authAxios.post("/publications/", data)
}
