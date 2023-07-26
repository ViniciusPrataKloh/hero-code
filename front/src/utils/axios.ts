import axios from 'axios'

// const token = localStorage.getItem('tokenHeroId')

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('tokenHeroId')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})
