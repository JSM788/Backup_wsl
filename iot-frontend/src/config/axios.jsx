import axios from 'axios'


export const clienteAxiosValhalla = axios.create({
    baseURL: "https://api.valhalla.com.pe"
})