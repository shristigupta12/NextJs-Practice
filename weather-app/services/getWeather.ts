import { WEATHER_API_KEY } from "@/common/env";

const getWeatherData = async ( city:string ) => {
    try {

      const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${WEATHER_API_KEY}`)
      const data = await response.json();

      const weatherData: WeatherType = {
        city,
        humidity: data['current']['humidity'] as number,
        cloud: data['current']['cloud'] as number,
        windDirection: data['current']['wind_dir'] as string,
        temp: data['current']['temp_c'],
        condition: {
          text: data['current']['condition']['text'] as string,
          icon: data['current']['condition']['icon'] as string,
        },
      };
      return weatherData;
    } catch (error) {
      return null;
    }
  };

export {getWeatherData}