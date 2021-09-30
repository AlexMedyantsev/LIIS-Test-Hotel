import {extend} from "../../utils/common.js";
import {carouselImages} from "../../utils/const"
import produce from 'immer';

export const initialState = {
  carouselImages: carouselImages,
  hotels: null,
  loading: null,
  favoriteHotels: [],
};

export const ActionType = {
  CHANGE_IS_AUTHENTICATED: `CHANGE_IS_AUTHENTICATED`,
}

export const ActionCreator = {
  setUserData: (userData) => ({
    type: ActionType.CHANGE_IS_AUTHENTICATED,
    payload: userData,
  }),
  // getNews: () => ({
  //   type: 'GET_HOTELS',
  // }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_HOTELS':
      return {...state, loading: true};
    case 'HOTELS_RECEIVED':
      return {...state, hotels: action.json, loading: false}
    default:
      return state;
  }
}