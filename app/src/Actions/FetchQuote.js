import axios from "axios";

export const FetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "GET_QUOTE_START" });
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data.value);
        dispatch({ type: "GET_QUOTE_SUCCESS", payload: res.data.value });
      })
      .catch((err) => {
        dispatch({
          type: "GET_QUOTE_ERROR",
          payload: `${err.res.status}: ${err.res.data}`,
        });
      });
  };
};
