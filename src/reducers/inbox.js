import { GET_INBOX_DATA } from "../actions/Types";

const initialState = {
  inboxData: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INBOX_DATA:
      return {
        ...state,
        inboxData: payload,
      };

    default:
      return state;
  }
}
