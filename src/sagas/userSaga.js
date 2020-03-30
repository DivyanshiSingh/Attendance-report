import { all, call, put, takeLatest, take } from "redux-saga/effects";
import {loginAPI} from '../api/auth';
import {profileAPI} from '../api/profile';
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
function* getUserProfile(action){
    try{
        const parameters = action.payload;
        const responseBody = yield call(
            profileAPI,
            parameters
        )
        yield put({
            type: 'GET_USER_PROFILE_SUCCESS',
            payload: responseBody
        })
        
    } catch (error) {   
        yield put({
            type:'GET_USER_PROFILE_FAILED',
            payload: {
                error: true
            }
        })
        
    }
}

export default function* watchUser(){
    yield takeLatest('LOGIN_USER_START',dologin);
    yield takeLatest('GET_PROFILE_START',getUserProfile);
}