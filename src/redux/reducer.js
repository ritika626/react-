import { DrActionTypes, WoListActionTypes, TodoListReduxActionTypes, BackgroundChange, ListInPractice } from './actions/types';

const woListIniState = { list: [], search: '' }
const todoIntialState = { list: [], loader: false, status: false, openModal: false, inputValue: '' }

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
    //console.log('action in todo', action.type,action);
    switch (action.type) {
        case TodoListReduxActionTypes.SET_TODO_LIST_REQUEST:
            //console.log('data list in request',action.payload);
            return {
                ...state,
                loader: true,
            }
        case TodoListReduxActionTypes.SET_TODO_LIST_RECEIVED:
            //console.log('data list in received',action.payload);
            return {
                ...state,
                loader: false,
                list: action.payload
            }
        case TodoListReduxActionTypes.DELETE_TODO_LIST_REQUEST:
            //console.log('delete todo request',action.payload);
            return {
                ...state,
                list: state.list.filter(i => i.id !== action.payload)
            }
        case TodoListReduxActionTypes.EDIT_TODO_LIST_REQUEST:
            return {
                ...state,
                editID: action.payload.id,
                status: action.payload.status
            }
        case TodoListReduxActionTypes.ADD_NEW_TODO_MODAL_REQUEST:
            return {
                ...state,
                openModal: action.payload.openModal
            }
        case TodoListReduxActionTypes.VALUE_NEW_TODO_INPUT_REQUEST:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        case TodoListReduxActionTypes.SUBMIT_NEW_TODO_INPUT_REQUEST:
            let newList1 = [...state.list, { id: new Date(), title: action.payload.inputValue, completed: false }]
            return {
                ...state,
                list: newList1
            }
        case TodoListReduxActionTypes.SUBMIT_EDIT_TODO_LIST_REQUEST:
            let editList = [...state.list]
            editList.map(i => {
                if (i.id === state.editID) {
                    i.title = action.payload.valueInput
                }
            })
            return {
                ...state,
                list: editList,
                editID: action.payload.id,
                status: action.payload.status
            }
        case TodoListReduxActionTypes.CHECKED_TODO_LIST_REQUEST:
            const newList = [...state.list]
            newList.map((i, index) => {
                if (i.id === action.payload.id) {
                    i.completed = action.payload.isChecked
                }
            }
            )
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}

export const backgroundChangeRedux = (state = { color: 'white' , backgroundColor:''}, action) => {
    switch (action.type) {
        case BackgroundChange.SET_BACKGROUND_REQUEST:
            return {
                ...state,
                color: action.payload
            }

        case BackgroundChange.SET_HEADER_COLOR_REQUEST:
            return {
                ...state,
                backgroundColor: action.payload
            }
        default:
            return state
    }
}

