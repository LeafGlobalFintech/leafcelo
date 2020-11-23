import http from "./HttpService";
import config from "./config";
import auth from "./AuthService";

class ApiServices {
    //url = ""// `http://${manifest.debuggerHost.split(':').shift()}:${config.BACKEND_PORT}`;
    url = `https://leafcelo.herokuapp.com`;
    // url = `http://192.168.1.4:${config.BACKEND_PORT}`;

    login(username, pin) {
        return http.post(this.url + "/api/public/login", { username, pin });
    }

    register(username, pin) {
        return http.post(this.url + "/api/public/register", { username, pin });
    }
    isUserNameExist(username) {
        return http.post(this.url + "/api/public/isUsernameExist", { username });
    }
    async applyForLoan(amount, interestAmount, Status, reasonForRejected) {
        return http.post(this.url + "/api/user/applyForLoan", { amount, interestAmount, Status, reasonForRejected }, {
            'Authorization': await auth.getToken(),
        });
    }

}

const api = new ApiServices();
export default api;