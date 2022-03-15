import actionTypes from '../actionTypes';

const INITIAL_STATE = {
  newsList: [],
  isLoading: false,
  newsAmount: 0,
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
        newsList: action.payload.items,
        newsAmount: action.payload.count,
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
