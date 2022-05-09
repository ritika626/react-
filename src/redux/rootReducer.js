import { combineReducers } from 'redux';
import {dr,woList,todoList} from './reducer';

    const rootReducer = combineReducers({
        dr,
        woList,
        todoList
    });

    export default rootReducer;