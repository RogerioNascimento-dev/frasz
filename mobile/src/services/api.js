import axios from 'axios';


const api = axios.create({
    baseURL:'http://a2842b260ebe.ngrok.io'    
})

export default api;