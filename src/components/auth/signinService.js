import axios from 'axios';

const API_URL = 'http://localhost:8080'

class authService {
    authenticate(email, password){
        console.log("authenticate function");
        console.log(email);
        console.log(password);
        const data = {
            username:"email",
            password:"password"
        }
        return axios.post(`${API_URL}/authenticate`, data)
    }
}

export default new authService();