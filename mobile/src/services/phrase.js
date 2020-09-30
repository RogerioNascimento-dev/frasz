import api from './api';

export async function likeOrUnlike(phrase_id,action){
          
    const response = await api.post('likeOrDeslike',{phrase_id,action});                
    return  {success:true};
       
}

export async function phrasesLiked(){
    try{        
        const response = await api.get('phrasesLiked');        
        const {data} = response;
        return  {success:true,data};
    }catch(ex){        
        return {success:false,data:[]}
    }    
}

export async function phrases(){
    const response = await api.get('phrases');    
    const {data} = response.data;  
    return data;
}