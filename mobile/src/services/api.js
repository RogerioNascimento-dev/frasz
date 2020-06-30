import axios from 'axios';


const api = axios.create({
    baseURL:'http://e0fb0df9a657.ngrok.io/'    
})

export default api;