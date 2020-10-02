import axios from 'axios';


const api = axios.create({
    baseURL:'http://e3a5762542c2.ngrok.io'    
})

export default api;