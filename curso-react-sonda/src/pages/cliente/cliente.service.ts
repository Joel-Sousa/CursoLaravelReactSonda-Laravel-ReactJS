import apiService from '../../services/api.service';

class Cliente {
    async list() {
        const resp = await apiService.get('cliente').catch((err) => err.response);
        
        return resp.data;
        
    };

}

export default new Cliente();