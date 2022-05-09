import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TodoListReduxActionTypes } from '../actions/types';
import actions from '../actions/todoRedux';
// import Api from '...'

/* export function* fetchUser(action) {
    try {
       const user = yield call(Api.fetchUser, action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 } */

export function* todoListSaga(data){
        console.log(data,'data in saga');
        try{
            yield put(actions.getTodoListAction.received(data));
        }
        catch(e){
            console.log('error',e);
        }
  }

export const fetchTodoListSaga=[
    takeLatest([TodoListReduxActionTypes.SET_TODO_LIST_REQUEST], todoListSaga)
];
    

