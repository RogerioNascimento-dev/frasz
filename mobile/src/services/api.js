import axios from 'axios';


const api = axios.create({
    baseURL:'http://a0cf675ea747.ngrok.io'
})

export default api;