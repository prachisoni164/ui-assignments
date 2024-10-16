import axios from 'axios';

const baseUrl = process.env.API_URL;

export const get = async (path) => {
    return await axios.get(`${baseUrl}${path}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const post = async (path, data) => {
    return await axios.post(`${baseUrl}${path}`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const put = async (path, data) => {
    return await axios.put(`${baseUrl}${path}`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const remove = async (path) => {
    return await axios.delete(`${baseUrl}${path}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}