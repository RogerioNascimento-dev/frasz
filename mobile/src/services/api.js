import axios from 'axios';


const api = axios.create({
    baseURL:'http://c4904da1d9be.ngrok.io/'
    //baseURL:'http://127.0.0.1:3333/' 
})

export default api;