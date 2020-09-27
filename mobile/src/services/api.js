import axios from 'axios';


const api = axios.create({
    baseURL:'http://afac82a96128.ngrok.io'    
})

export default api;