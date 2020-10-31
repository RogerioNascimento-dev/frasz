import api from './api';

export async function likeOrUnlike(phrase_id,action){          
    await api.post('likeOrDeslike',{phrase_id,action});                
    return  {success:true};
       
}

export async function phrasesLiked(){           
        const response = await api.get('phrasesLiked');        
        const {data} = response;
        return data;        
}

export async function phrases(){
    const response = await api.get('phrases');    
    const {data} = response.data;  
    return data;
}