import {combineReducers} from 'redux';
import phrase from './phrase/reducer';
import phraseLikeds from './phraseLikeds/reducer';

export default combineReducers({
    phrase,
    phraseLikeds
})