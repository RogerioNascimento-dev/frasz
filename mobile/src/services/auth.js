import api from './api';

export async function signInFacebook(email,password){

    try{
        const response = await api.post('sessions',{email,password});        
        return  {success:true,token: response.data.token.token, user: response.data.user};
    }catch(ex){
        return {success:false}
    }
    
}