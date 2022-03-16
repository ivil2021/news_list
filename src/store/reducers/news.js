import actionTypes from '../actionTypes';

const INITIAL_STATE = {
  newsList: [],
  isLoading: false,
  newsAmount: 0,
  selectedNews: {},
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

    case actionTypes.GET_NEWS_RECORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        // TODO: maybe I will need it future
        // news: action.payload,
        // TODO: need to find out which option is better to use
        selectedNews: action.payload,
        // selectedNews: state.selectedNews.concat(action.payload),
        // selectedNews: [...state.selectedNews, action.payload],
      };

    case actionTypes.GET_NEWS_RECORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default newsReducer;
