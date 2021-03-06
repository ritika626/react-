import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TodoListReduxActionTypes } from '../actions/types';
import actions from '../actions/todoRedux';
import axios from 'axios';
import {TodoApi} from '../api';
// import Api from '...'

/* export function* fetchUser(action) {
    try {
       const user = yield call(Api.fetchUser, action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 } */
  function fetchTodo() {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get(TodoApi);
  };

function* todoListSaga(){
        try{
            const response = yield call(fetchTodo);
            yield put(actions.getTodoListAction.received(response.data));
        }
        catch(e){
            console.log('error',e);
        }
  }

export const fetchTodoListSaga=[
    takeLatest([TodoListReduxActionTypes.SET_TODO_LIST_REQUEST], todoListSaga)
];

    

