import {
  SET_BUDCALLS,
  LIKE_BUDCALL,
  UNLIKE_BUDCALL,
  LOADING_DATA,
  DELETE_BUDCALL,
  POST_BUDCALL,
  SET_BUDCALL,
} from "../types";

const initialState = {
  budcalls: [],
  budcall: {},
  loading: false,
};

let index = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_BUDCALLS:
      return {
        ...state,
        budcalls: action.payload,
        loading: false,
      };
    case SET_BUDCALL:
      return {
        ...state,
        budcall: action.payload,
      };
    case LIKE_BUDCALL:
    case UNLIKE_BUDCALL:
      index = state.budcalls.findIndex(
        (budcall) => budcall.budcallId === action.payload.budcallId
      );
      state.budcalls[index] = action.payload;
      if (state.budcall.budcallId === action.payload.budcallId) {
        state.budcall = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_BUDCALL:
      index = state.budcalls.findIndex(
        (budcall) => budcall.budcallId === action.payload
      );
      state.budcalls.splice(index, 1);
      return {
        ...state,
      };

    case POST_BUDCALL:
      return {
        ...state,
        budcalls: [action.payload, ...state.budcalls],
      };
    default:
      return state;
  }
}
