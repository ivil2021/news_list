import { combineReducers } from 'redux';

import newsReducer from './news';

// объединяет несколько редюсеров в один. У меня пока только один редюсер.
const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
