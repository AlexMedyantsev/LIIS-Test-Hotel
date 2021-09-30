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
  ADD_HOTEL_TO_FAVORITES: `ADD_HOTEL_TO_FAVORITES`,
  REMOVE_HOTEL_FROM_FAVORITES: `REMOVE_HOTEL_FROM_FAVORITES`
}

export const ActionCreator = {
  setUserData: (userData) => ({
    type: ActionType.CHANGE_IS_AUTHENTICATED,
    payload: userData,
  }),
  addHotelToFavorites: (hotel) => ({
    type: ActionType.ADD_HOTEL_TO_FAVORITES,
    payload: hotel,
  }),
  removeHotelFromFavorites: (hotel) => ({
    type: ActionType.REMOVE_HOTEL_FROM_FAVORITES,
    payload: hotel,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_HOTELS':
      return {...state, loading: true};
    case 'HOTELS_RECEIVED':
      return {...state, hotels: action.json, loading: false}
    case 'ADD_HOTEL_TO_FAVORITES':
      return {...state, favoriteHotels: [...state.favoriteHotels, action.payload]}
    case 'REMOVE_HOTEL_FROM_FAVORITES':
      return {...state, favoriteHotels: state.favoriteHotels.filter(item => item.hotelId !== action.payload.hotelId)}
    default:
      return state;
  }
}