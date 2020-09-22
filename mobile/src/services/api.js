import axios from 'axios';


const api = axios.create({
    baseURL:'http://357d5bc6ef1e.ngrok.io'    
})

export default api;