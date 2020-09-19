import axios from 'axios';


const api = axios.create({
    baseURL:'http://3fa745844806.ngrok.io'    
})

export default api;