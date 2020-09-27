import api from './api';

export async function likeOrUnlike(phrase_id,action){
    try{        
        const response = await api.post('likeOrDeslike',{phrase_id,action});                
        return  {success:true};
    }catch(ex){        
        return {success:false}
    }    
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