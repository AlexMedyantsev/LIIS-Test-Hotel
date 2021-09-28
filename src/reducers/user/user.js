import {extend} from "../../utils/common.js";
import produce from 'immer';

export const initialState = {
  user: {
    login: null,
    password: null,
  }
};

export const ActionType = {
  SET_USER_DATA: `SET_USER_DATA`
}

export const ActionCreator = {
  setUserData: (userData) => ({
    type: ActionType.SET_USER_DATA,
    payload: userData,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_USER_DATA:
      return extend(state, {user: action.payload});

    default:
      return state;
  }
};