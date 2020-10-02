import produce from 'immer';


const phrase = (state = {phraseHome:[],phraseLiked:[]}, action)=>{
    switch(action.type){
        case 'PUSH_PHRASES_HOME':{                    
            return produce(state, draft =>{
                draft.phraseHome.push(...action.phrases)                
            });
        }
        case 'CLEAN_HOME':{        
            return produce(state, draft =>{
                draft.phraseHome = []               
            });            
        }
        case 'PUSH_PHRASES_LIKED':{                    
            return produce(state, draft =>{
                draft.phraseLiked.push(...action.phrases)                
            });
        }
        case 'CLEAN_LIKED':{        
            return produce(state, draft =>{
                draft.phraseLiked = []               
            });           
        }
        default:
            return state
    }
    
    return state;
}

export default phrase;