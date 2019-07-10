import {
  CLEAR_USER_PROPS,
  SET_AUTH_USER,
  SET_USER_PROPS
} from "../constants/Types";

const initialState = {
  auth: null,
  currentUserProps: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_USER_PROPS: {
      return {
        ...state,
        auth: null,
        currentUserProps: {}
      };
    }
    case SET_AUTH_USER: {
      return {
        ...state,
        auth: action.user
      };
    }
    case SET_USER_PROPS: {
      return {
        ...state,
        currentUserProps: action.payload
      };
    }
    default:
      return state;
  }
}

export default userReducer;
