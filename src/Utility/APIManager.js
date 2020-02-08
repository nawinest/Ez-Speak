
import axios from 'axios'

export const APIManager = axios.create({
    baseURL: 'http://157.245.51.191:9093/api-gateway',
    timeout: 30000,
});

export const ValidateResponse = (response) => {
    if (response ) {
        let data = response.data
        if ((data.response_code !== "success") || data.content === null) {
            return false
        } else {
            return true
        }
    }
}