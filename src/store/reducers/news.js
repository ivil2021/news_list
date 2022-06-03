import actionTypes from '../actionTypes';

const INITIAL_STATE = {
  newsList: [],
  isLoading: false,
  newsAmount: 0,
  selectedNews: {
    news_title: '',
    news_text: '',
    createdAt: null,
  },
  limit: 2,
  totalPages: 1,
  currentPage: 1,
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
        newsList: action.payload.requestedNews,
        newsAmount: action.payload.count,
        totalPages: Math.ceil(action.payload.count / state.limit),
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

    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    // --- DELETE SELECTED NEWS --- //
    case actionTypes.DELETE_SELECTED_NEWS:
      return {
        ...state,
        selectedNews: {},
      };

    default:
      return state;
  }
};

export default newsReducer;
