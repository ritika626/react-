import { DrActionTypes, WoListActionTypes, TodoListReduxActionTypes } from './actions/types';

const woListIniState = { list: [], search: '' }
const todoIntialState = { list: [], loader: false }

export const dr = (state = {}, action) => {
    switch (action.type) {
        case DrActionTypes.REQUESTED:
            return {
                ...state,
                date: action.payload
            }
        default:
            return state
    }
}

export const woList = (state = woListIniState, action) => {
    console.log('actio=====>', action);
    let searchList = state.list;
    switch (action.type) {
        case WoListActionTypes.SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case WoListActionTypes.WO_LIST:
            return {
                ...state,
                list: action.payload
            }

        default:
            return state;
    }
}

export const todoList = (state = todoIntialState, action) => {
    console.log('action in todo', action);
    switch (action.type) {
        case TodoListReduxActionTypes.SET_TODO_LIST_REQUEST:
            console.log('data list in request',action.payload);
            return {
                ...state,
                loader: true,
            }
        case TodoListReduxActionTypes.SET_TODO_LIST_RECEIVED:
            console.log('data list in received',action.payload);
            return {
                ...state,
                loader: false,
                list:action.payload
            }
        default:
            return state
    }
}
