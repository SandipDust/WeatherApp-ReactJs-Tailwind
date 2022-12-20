import React from "react";


function Forecast({  items:{forecastday} }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
       

        {forecastday.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.date}</p>
            <img
              src={item.day.condition.icon}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.day.condition.text}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;