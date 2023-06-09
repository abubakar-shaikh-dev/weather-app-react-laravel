import React from "react";

export default function Weather(props) {
  const iconurl = "http://openweathermap.org/img/w/" + props.icon + ".png";
  return (
    <div className="w-full card-body flex flex-col items-center justify-center">
      <h2 className="card-title w-full">
        {props.city},{props.country}
      </h2>

      
<img src={iconurl} />
          <h2 className="card-title">{props.title}</h2>
      <div className="flex items-center justify-between w-full">
        <p>Temperature</p>
        <p className="text-right">{props.temperature} °C</p>
      </div>

      <div className="flex items-center justify-between w-full">
        <p>Humidity</p>
        <p className="text-right">{props.humidity}%</p>
      </div>
    </div>
  );
}
