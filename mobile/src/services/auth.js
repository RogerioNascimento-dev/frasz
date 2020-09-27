import api from './api';

export async function signInFacebook(email,password,name,imageProfile){

    try{
        const response = await api.post('sessions',{email,password,name,imageProfile,origin:'Facebook'});                
        return  {success:true,token: response.data.token.token, user: response.data.user};
    }catch(ex){
        return {success:false}
    }
    
}