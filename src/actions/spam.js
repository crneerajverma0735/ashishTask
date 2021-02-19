import { GET_SPAM_DATA } from "./Types";
const JsonData = require("../global/spam.json");

export const setSpamDataFromJson = () => (dispatch) => {
  dispatch({
    type: GET_SPAM_DATA,
    payload: JsonData,
  });
};
