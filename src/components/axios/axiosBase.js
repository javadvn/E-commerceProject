import axios from "axios";



export const axiosBase = axios.create({
    baseURL:'https://fakestoreapi.com',
    timeout:10000
})