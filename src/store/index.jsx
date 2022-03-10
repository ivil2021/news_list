import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import apiSaga from './sagas/api-saga';
import rootReducer from './reducers';

// создаем объект саги из ф-ии createSagaMiddleware
// initialiseSagaMiddleware - это Middleware, который нужно добавить в applyMiddleware
const mySaga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(mySaga)));
// привязываем watcher к саге
mySaga.run(apiSaga);

export default store;

// const initialState = {
//   posts: [],
//   loginModal: {
//     open: false,
//   },
// };
