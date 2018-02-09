import axios from 'axios';

const API_KEY = '150b0f9a1e863e44e09b0017491428f8';
//Open Weather API Key

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//use backticks `` for URL above


export const FETCH_WEATHER = 'FETCH_WEATHER';

//1. User enters search term (city) in search box and submits
//2. That calls the action creator fetchWeather with parameter city
//3. We use the url with the {city}
//4. Then make Ajax request with Axios
//5. Axios returns a Promise
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request

        //payload key with request is the returned Promise
        //payload: Object is Promise
    };
}

//Middleware is Redux Promise and looks at payload property of incoming Action
//If the payload is a Promise(request) Middleware manipulates it
//and then sends new Action back with requested info
