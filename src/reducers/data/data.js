import {extend} from "../../utils/common.js";
import {carouselImages} from "../../utils/const"
import produce from 'immer';

export const initialState = {
  carouselImages: carouselImages,
};

export const ActionType = {
  CHANGE_IS_AUTHENTICATED: `CHANGE_IS_AUTHENTICATED`,
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