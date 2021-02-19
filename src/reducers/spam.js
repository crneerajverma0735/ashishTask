import { GET_SPAM_DATA } from "../actions/Types";

const initialState = {
  spamData: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SPAM_DATA:
      return {
        ...state,
        spamData: payload,
      };

    default:
      return state;
  }
}
