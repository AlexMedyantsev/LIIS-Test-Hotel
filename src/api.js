const API_BASE_ADDRESS = 'http://engine.hotellook.com/api/v2/cache.json?';

export default class Api {
   static getUsers() {
       const uri = API_BASE_ADDRESS + "location=Moscow&currency=rub&checkIn=2020-12-10&checkOut=2020-12-12&limit=10";
       
       return fetch(uri, {
           method: 'GET'
       });
   }
}