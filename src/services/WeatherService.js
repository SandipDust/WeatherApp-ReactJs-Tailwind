const API_KEY = "";
const BASE_URL = 'http://api.weatherapi.com/v1/current.json?';

const getWeatherData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, key: API_KEY})


    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export default getWeatherData;