
import axios from 'axios'

export const APIManager = axios.create({
    baseURL: 'http://157.245.51.191:9093',
    timeout: 30000,
});