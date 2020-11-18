import { combineReducers } from "redux";
import { QuotesReducer as quotes } from "./QuotesReducer";

export default combineReducers({
  quotes,
});
