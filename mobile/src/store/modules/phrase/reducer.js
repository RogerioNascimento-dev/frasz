import produce from 'immer';
const phrase = (state = [], action)=>{
    switch(action.type){
        /*
        case 'PUSH_PHRASES_HOME':{              
            return [...action.phrases];            
        }*/    
        case 'PUSH_PHRASES_HOME':{              
            return produce(state, draft =>{
                draft.push(...action.phrases);
            });
        } 
        case 'CLEAN':{
            return [];
        }
        default:
            return state
    }
    
    return state;
}

export default phrase;