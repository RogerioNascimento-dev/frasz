import axios from 'axios';


const api = axios.create({
    baseURL:'http://82319fb0b6fa.ngrok.io'    
})

export default api;