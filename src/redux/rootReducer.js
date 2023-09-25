import { combineReducers } from 'redux';
import {dr,woList,todoList,backgroundChangeRedux} from './reducer';
import { EditInputReducer } from './EditReducer';
import {TaskStatusReducer} from './reducers/jira'

    const rootReducer = combineReducers({
        dr,
        woList,
        todoList,
        backgroundChangeRedux,
        EditInputReducer,
        TaskStatusReducer
    });

    export default rootReducer;