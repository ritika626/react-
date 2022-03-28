import { combineReducers } from 'redux';
import {dr,woList} from './reducer';

    const rootReducer = combineReducers({
        dr,
        woList
    });

    export default rootReducer;