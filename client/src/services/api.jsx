import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL

export async function getWeather(data){
    const {location} = data;
    try {
        const {data,status} = await axios.get(`${BASE_URL}/weather/${location}`)
        const weatherData = {
            title:data.weather[0].main,
            temperature:data.main.temp,
            humidity:data.main.humidity,
            city:data.name,
            country:data.sys.country,
            icon:data.weather[0].icon
        }
        return Promise.resolve(weatherData)
        // console.log(weatherData);
    } catch (error) {
        return Promise.reject({ msg: "City not Found." });
    }
}
