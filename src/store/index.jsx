import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import apiSaga from './sagas/api-saga';
import rootReducer from './reducers';

const mySaga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(mySaga)));

mySaga.run(apiSaga);

export default store;
