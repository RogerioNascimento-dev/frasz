const phraseLikeds = (state = [], action)=>{
    switch(action.type){
        case 'PUSH_PHRASES_LIKED':{                              
            return [...action.phrases];
        }
        default:
            return state
    }}

    export default phraseLikeds;