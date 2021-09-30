import {extend} from "../../utils/common.js";
import produce from 'immer';
import moment from 'moment';

export const initialState = {
  search: {
    location: 'Moscow',
    checkInDate: moment().format('YYYY-MM-DD'),
    daysInHotelAmount: 1,
  }
};

export const ActionType = {
  CHANGE_SEARCH_DATA: `CHANGE_SEARCH_DATA`,
}

export const ActionCreator = {
  setSearchData: (searchData) => ({
    type: ActionType.CHANGE_SEARCH_DATA,
    payload: searchData,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CHANGE_SEARCH_DATA':
      return {...state, search: action.payload}
    default:
      return state;
  }
}