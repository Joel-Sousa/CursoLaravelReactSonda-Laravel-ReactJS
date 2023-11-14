import apiService from "./api.service";
import Cookies from 'universal-cookie';



const list = () => {
    return apiService
        .get('cliente')
        .then((response) => {
            return response.data;
        });
};

const create = (data : any) => {
    return apiService.post('cliente', data).then((response) => {
        return response.data;
    });
};

export default {
    list,
    create
};