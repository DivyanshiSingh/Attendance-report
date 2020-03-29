import { fork } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import userSaga from "./userSaga"
export default function* rootSaga(){
  yield all([
    fork(userSaga)
  ]);
}