const API_KEY = "";
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?';

const getWeatherData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, key: API_KEY,days:'5'})

    console.log(url)
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export default getWeatherData;