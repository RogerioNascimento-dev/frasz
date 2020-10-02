export function pushPhrases(phrases){    
    return {type:'PUSH_PHRASES_HOME',phrases}
}

export function clean(){    
    return {type:'CLEAN_HOME'}
}

export function pushPhrasesLiked(phrases){    
    return {type:'PUSH_PHRASES_LIKED',phrases}
}

export function cleanLiked(){    
    return {type:'CLEAN_LIKED'}
}