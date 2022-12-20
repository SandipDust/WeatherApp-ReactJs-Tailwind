
import { useState, useEffect } from 'react';
import './App.css';

import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getWeatherData from './services/WeatherService';
import Forecast from './components/Forecast';


function App() {
  const [query, setQuery] = useState({q:'london'}); 
  const [newWeatherData, setNewWeatherData] = useState(null);

  useEffect(() =>{
    const fetchWeather = async () =>{
       await getWeatherData('weather', query).
       then((data) => {
        setNewWeatherData(data);
        console.log(data)
       });
      
    
    }

    fetchWeather();
  }, [query])
  

  const fetchQuery = (query) =>{
    setQuery(query)
  }

  

  return (
    <div className="mx-auto
     max-w-screen-md 
     mt-4 py-5 px-32 
     bg-gradient-to-br from-cyan-500 to-blue-700
     h-fit
     ">
      
      <TopButtons setNewQuery={fetchQuery}/>
      <Inputs setNewQuery={fetchQuery}/>

      {newWeatherData && (
      <div>
        <TimeAndLocation weather={newWeatherData}/>
        <TemperatureAndDetails weather={newWeatherData}/>

          <Forecast items={newWeatherData.forecast} />
           
      </div>
      )}
    </div>
  );
}

export default App;
