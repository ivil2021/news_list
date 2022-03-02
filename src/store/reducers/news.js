import actionTypes from '../actionTypes';

import fakeNews from '../../utils/constants';

const INITIAL_STATE = {
  newsList: fakeNews,
  isLoading: false,
};

const newsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        newsList: action.payload,
      };

    case actionTypes.GET_NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default newsReducer;
