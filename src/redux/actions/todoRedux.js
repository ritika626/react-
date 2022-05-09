import { TodoListReduxActionTypes } from './types'

function action(type, payload = {}) {
    return { type, ...payload };
}

const getTodoListAction = {
    request: (data) =>
       action(TodoListReduxActionTypes.SET_TODO_LIST_REQUEST, data),
    received: (data) =>
        action(TodoListReduxActionTypes.SET_TODO_LIST_RECEIVED, data),
}


const actions = {
    getTodoListAction
};
export default actions;