import { WEATHER_API_KEY } from "@/common/env";

export async function getWeatherData ( city:string, ): Promise<WeatherType | null>{
    if (!location) return null;

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
        console.error(
            'Error while fetching weather data for location',
            location,
            error,
          );
        return null;
    }
  };
