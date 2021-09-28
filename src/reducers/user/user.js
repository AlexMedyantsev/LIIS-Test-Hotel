import {extend} from "../../utils/common.js";
import produce from 'immer';

export const initialState = {
  isAuthentificated: false,
};

export const ActionType = {
  CHANGE_IS_AUTHENTICATED: `CHANGE_IS_AUTHENTICATED`,
  loginForm: {
    loginInput: null,
    passwordInput: null,
  }
}

export const ActionCreator = {
  setUserData: (userData) => ({
    type: ActionType.CHANGE_IS_AUTHENTICATED,
    payload: userData,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_IS_AUTHENTICATED:
      return extend(state, {isAuthentificated: !state.isAuthentificated});

    default:
      return state;
  }
};