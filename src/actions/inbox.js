import { GET_INBOX_DATA } from "./Types";
const JsonData = require("../global/inbox.json");

export const setInboxDataFromJson = () => (dispatch) => {
  dispatch({
    type: GET_INBOX_DATA,
    payload: JsonData,
  });
};
