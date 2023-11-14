import apiService from "./api.service";
import Cookies from 'universal-cookie';
import moment from 'moment';
import { Subject } from 'rxjs';


class Auth {
    protected subject = new Subject();
    protected cookies = new Cookies();

    async login(email: string, password: string) {
        // console.log("password", password);
        const resp = await apiService.post("login", { email, password, })
            .then((response) => {
                console.log("response:", response);
                if (response.data.token) {
                    this.cookies.set('user', JSON.stringify(response.data.user), { path: '/', expires: moment().add(8, 'hour').toDate() });
                    this.cookies.set('token', JSON.stringify(response.data.token), { path: '/', expires: moment().add(8, 'hour').toDate() });
                    // cookies.set('roles', JSON.stringify(response.data.user.roles), { path: '/', expires : moment().add(8, 'hour').toDate() });
                    console.log(response.data.token);
                    this.observable.setToken(response.data.token)
                }
                return response.data;
            })
            .catch((err) => {
                return err.response;
            });
        return resp;
    };

    logout = () => {
        this.cookies.remove('user');
        this.cookies.remove('token');
        this.observable.clearToken();
        return true;

    };

    getToken = () => {
        let token = this.cookies.get('token');
        if (token !== undefined) {
            return token;
        }
        return null;
    };

    observable = {
        setToken: (token: any) => this.subject.next(token),
        clearToken: () => this.subject.next(null),
        onToken: () => this.subject.asObservable()
    };

    callApiUrl = (url: string) => {
        return apiService.get(url).then((response) => {
            return response;
        });
    };
}

export default new Auth();
