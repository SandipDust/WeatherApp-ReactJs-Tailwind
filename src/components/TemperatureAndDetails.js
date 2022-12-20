import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({weather:{current, location}}) {
  
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl
         text-cyan-300">
            <p>{current.condition.text}</p>
         </div>

         <div className="flex flex-row items-center justify-between
          text-white py-3">
            <img 
                src={current.condition.icon}
                alt="" 
                className='w-20'
            />
            <p className="text-5xl"> {current.temp_c}°C</p>


            <div className='flex flex-col space-y-2'>
              <div className='flex font-light text-sm items-center 
              justify-center'>
                <UilTemperature  size={18} className="mr-1"/>
                Real Feel: 
                <span className="font-medium ml-1">{current.feelslike_c}°</span>
              </div>

              <div className='flex font-light text-sm items-center 
              justify-center'>
                <UilTear  size={18} className="mr-1"/>
                Humidity: 
                <span className="font-medium ml-1">{current.humidity}%</span>
              </div>

              <div className='flex font-light text-sm items-center 
              justify-center'>
                <UilWind size={18} className="mr-1"/>
                Wind: 
                <span className="font-medium ml-1">{current.wind_kph} km/h</span>
              </div>
            </div>

         </div>


       
    </div>
  )
}

export default TemperatureAndDetails;