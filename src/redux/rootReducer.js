import { combineReducers } from 'redux';
import {dr,woList,todoList,backgroundChangeRedux} from './reducer';
import { EditInputReducer } from './EditReducer';

    const rootReducer = combineReducers({
        dr,
        woList,
        todoList,
        backgroundChangeRedux,
        EditInputReducer
    });

    export default rootReducer;