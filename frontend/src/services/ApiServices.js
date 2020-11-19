import http from "./HttpService";
import config from "./config";
import auth from "./AuthService";

class ApiServices {
    //uri = ""// `http://${manifest.debuggerHost.split(':').shift()}:${config.BACKEND_PORT}`;
    uri = `http://192.168.1.3:${config.BACKEND_PORT}`;
    login(username, pin) {
        return http.post(this.uri + "/api/public/login", { username, pin });
    }

    register(username, pin) {
        return http.post(this.uri + "/api/public/register", { username, pin });
    }
    isUserNameExist(username) {
        return http.post(this.uri + "/api/public/isUsernameExist", { username });
    }

}

const api = new ApiServices();
export default api;