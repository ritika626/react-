import { fetchTodoListSaga } from "./fetchTodoListSaga";
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

export default function* mySaga() {
    yield all([
        ...fetchTodoListSaga,
    ]);
  }
