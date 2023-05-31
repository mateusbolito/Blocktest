import axios from 'axios'

export const apiFamilies = axios.create({
    baseURL: import.meta.env.VITE_APP_FAMILIES_URL,
});