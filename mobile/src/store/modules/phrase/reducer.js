import produce from 'immer';
const phrase = (state = [], action)=>{
    switch(action.type){
        case 'PUSH_PHRASES_HOME':{              
            const newState = [...action.phrases];
            return newState;
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