import { TodoListReduxActionTypes } from './types'

function action(type, payload = {}) {
    return { type, payload };
}

const getTodoListAction = {
    request: (data) =>
      action(TodoListReduxActionTypes.SET_TODO_LIST_REQUEST, data),
    received: (data) =>
        action(TodoListReduxActionTypes.SET_TODO_LIST_RECEIVED, data),
}

const deleteTodo = {
    request: (data) =>
      action(TodoListReduxActionTypes.DELETE_TODO_LIST_REQUEST, data),
}

const editTodo = {
  request: (data) =>
    action(TodoListReduxActionTypes.EDIT_TODO_LIST_REQUEST, data),
  editSubmit:(data)=>action(TodoListReduxActionTypes.SUBMIT_EDIT_TODO_LIST_REQUEST, data)
}

const checkedTodo = {
    request: (data) =>
      action(TodoListReduxActionTypes.CHECKED_TODO_LIST_REQUEST, data),
}

const actions = {
    getTodoListAction,
    deleteTodo,
    checkedTodo,
    editTodo
};
export default actions;