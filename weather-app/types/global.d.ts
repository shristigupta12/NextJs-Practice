declare type WeatherType = {
    city: string;
    humidity: number;
    cloud: number;
    windDirection: string;
    temp: number;
    condition: {
      text: string;
      icon: string;
    };
  };