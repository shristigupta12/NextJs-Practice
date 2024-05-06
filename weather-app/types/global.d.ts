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

declare type tableType = tableCellType[];

declare type tableCellType = {
  city: string;
  temp: number|undefined;
  icon: string|undefined;
}