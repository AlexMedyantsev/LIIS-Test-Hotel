import {reducer as reducerData} from "./data/data.js";
import {reducer as reducerUser} from "./user/user.js";
import {reducer as reducerSearch} from "./search/search.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.DATA]: reducerData,
  [NameSpace.USER]: reducerUser,
  [NameSpace.SEARCH]: reducerSearch,
});
