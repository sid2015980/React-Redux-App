const initialState = {
    quote: "",
    isFetching: false,
    error: "",
  };
  
  export const QuotesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_QUOTE_START":
        return {
          ...state,
          isFetching: true,
        };
      case "GET_QUOTE_SUCCESS":
        return {
          ...state,
          isFetching: false,
          quote: action.payload,
          error: "",
        };
      case "GET_QUOTE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  