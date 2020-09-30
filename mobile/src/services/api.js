import axios from 'axios';


const api = axios.create({
    baseURL:'http://12d1eb853c73.ngrok.io'    
})

export default api;