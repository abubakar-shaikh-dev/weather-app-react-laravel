import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "./css/App.css";
import Weather from "./Weather";

//api
import * as api from "../services/api";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [weatherData, setWeatherData] = useState(null);

  function onSubmit(data) {
    if (!data.location) {
      toast.error("Enter City Name.",{duration:1000});
    } else {
      const response = api.getWeather(data)

      toast.promise(response, {
        loading: "Searching...",
        error: (err)=>"Not Found.",
        success: (data)=>`${data.city}, ${data.country}`,
        
      },
      {
        success:{
          duration:1000,
          icon:'📍'
        },
        error:{
          duration:1000
        }
      }
      
      );
      
        response.then(response=>setWeatherData(response))
                .catch(err=>err)
    }
  }

  return (
    <div id="app" className="flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div>
        <h1 className="text-center">WEATHER APP</h1>

        <div className="card py-5 w-96 glass flex items-center justify-center">
          <form
            className="w-full px-5 flex gap-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Enter City Name"
              className="rounded-full input input-bordered w-full max-w-xs"
              {...register("location")}
            />
            <button type="submit" className="btn btn-neutral rounded-full">
              <svg
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="1"
                    d="M14 5H20"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="1"
                    d="M14 8H17"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="1"
                    d="M22 22L20 20"
                    stroke="#fff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </form>

          {weatherData && <Weather title={weatherData.title} city={weatherData.city} country={weatherData.country} humidity={weatherData.humidity} temperature={weatherData.temperature} icon={weatherData.icon}/>}
          
        
        </div>
      </div>
    </div>
  );
}
