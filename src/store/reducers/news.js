import actionTypes from '../actionTypes';

const INITIAL_STATE = {
  newsList: [],
  isLoading: false,
  newsAmount: 0,
  selectedNews: {},
};

const newsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    // --- GET NEWS LIST --- //
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
      // --- GET NEWS LIST --- //

      // --- GET NEWS RECORD BY ID --- //
    case actionTypes.GET_NEWS_RECORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_NEWS_RECORD_SUCCESS:
      return {
        ...state,
        selectedNews: action.payload,
      };

    case actionTypes.GET_NEWS_RECORD_ERROR:
      return {
        ...state,
        isLoading: false,
      };
      // --- GET NEWS RECORD BY ID --- //

    default:
      return state;
  }
};

export default newsReducer;
