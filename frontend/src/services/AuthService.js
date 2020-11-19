import { AsyncStorage } from "react-native";

class AuthService {
    TOKEN_KEY = "token";
    USER_DATA_KEY = "userData";

    isUserLogged() {
        return !!this.getToken();
    }
    async setToken(token) {
        await AsyncStorage.setItem(this.TOKEN_KEY, token)
    }

    async getToken() {
        return await AsyncStorage.getItem(this.TOKEN_KEY)
    }

    async  setUserData(userData) {
        await AsyncStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData))
    }

    async getUserData() {
        const userData = await AsyncStorage.getItem(this.USER_DATA_KEY)
        if (userData)
            return JSON.parse(userData)
        return null;
    }
}

const auth = new AuthService()
export default auth;