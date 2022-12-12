import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3001/api/test/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "all");
    }
    getUserContent() {
        return axios.get(API_URL + "user", { headers: authHeader() });
    }
    getModeratorContent() {
        return axios.get(API_URL + "mod", { headers: authHeader() });
    }
    getAdminContent() {
        return axios.get(API_URL + "admin", { headers: authHeader() });
    }
}

export default new UserService();