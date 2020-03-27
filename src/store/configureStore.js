import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from '../reducer/index';
import rootSaga from '../sagas/index';