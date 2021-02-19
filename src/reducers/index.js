import { combineReducers } from "redux";
import inbox from "./inbox";
import spam from "./spam";

export default combineReducers({
  inbox,
  spam,
});
