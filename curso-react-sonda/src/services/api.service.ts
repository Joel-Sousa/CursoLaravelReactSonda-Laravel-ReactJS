import axios from "axios";
import authService from "./auth.service";


const configValue: string = (process.env.REACT_APP_API_URL as string);
const apiService = axios.create({
    baseURL: configValue
    // baseURL: "http://127.0.0.1:8000/"
});

apiService.interceptors.request.use(async config => {
    const token = authService.getToken();
    if (token) {
        config.headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    return config;
});

export default apiService;