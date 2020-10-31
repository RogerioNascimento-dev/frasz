import axios from 'axios';


const api = axios.create({
    baseURL:'http://95fd12a64386.ngrok.io'    
})

export default api;