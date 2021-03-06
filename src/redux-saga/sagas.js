import { put, takeLatest, all, select } from 'redux-saga/effects';
import moment from 'moment';
import * as Searchselectors from '../reducers/search/selectors.js';

function* fetchHotels() {
  const query = yield select(Searchselectors.searchValue);
  const checkoutDate = yield moment(query.checkInDate).add(query.daysInHotelAmount, 'days').format('YYYY-MM-DD');
  const json = yield fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${query.location}&currency=rub&checkIn=${query.checkInDate}&checkOut=${checkoutDate}&limit=25`)
        .then(response => response.json(), );    
  yield put({ type: "HOTELS_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_HOTELS', fetchHotels)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}