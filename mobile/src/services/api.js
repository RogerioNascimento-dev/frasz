import axios from 'axios';


const api = axios.create({
    baseURL:'http://c4fdd2e76a60.ngrok.io'    
})

export default api;