import { all, call, put, takeLatest, take } from "redux-saga/effects";
import {loginAPI} from '../api/auth';
 function* dologin(action){
    try {
        const parameters = action.payload;
        const responseBody = yield call(
            loginAPI,
            parameters
        )
        yield put({
            type: 'LOGIN_DONE',
            payload: responseBody
        })
        
    } catch (error) {   
        yield put({
            type:'LOGIN_FAILED',
            payload: {
                error: true
            }
        })
        
    }
}

export default function* watchUser(){
    yield takeLatest('LOGIN_USER_START',dologin)
}