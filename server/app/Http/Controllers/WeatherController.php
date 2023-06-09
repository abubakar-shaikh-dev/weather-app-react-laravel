<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function show($city)
    {
        if(!$city){
           return response()->json(['msg'=>"City Does not Exist."],404);
        }
        
        $apiKey = '602310b8c455f7f3fc96d20974456558';
        $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";

        $response = file_get_contents($url);
        $weatherData = json_decode($response);

        if (!$weatherData) {
            return response()->json(['error' => 'Failed to fetch weather data.'], 500);
        }

        return response()->json($weatherData);
    }
}
