import axios from 'axios'

const token = localStorage.getItem('tokenHeroId')

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: { Authorization: `bearer ${token}` },
})
