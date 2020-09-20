import axios from 'axios';


const api = axios.create({
    baseURL:'http://db1274ed502e.ngrok.io'    
})

export default api;