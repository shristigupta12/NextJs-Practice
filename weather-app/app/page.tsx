"use client"
import React, { useState, useEffect } from "react";
import { ViewContainer } from "@/components/layouts/view-container";
import { Button } from "@/components/ui/button";
import { getWeatherData } from "@/services/getWeather";

export default function Home() {

  const [location, setLocation] = useState("");
  const [weatherdata, setWeatherData]= useState<WeatherType>({ city: "",
    humidity: 0,
    cloud: 0,
    windDirection: "",
    temp: 0,
    condition: {
      text: "",
      icon: "",
    }});


  const handleChange = (event:any) => {
    setLocation(event.target.value)
    if(getWeatherData(location)!=null){
      const data = getWeatherData(location);
      console.log(data)
    }
  }



 

  return (
    <ViewContainer>
      <main className="flex h-screen py-2 gap-5">
        <div className="search-city flex flex-col gap-2 mx-auto h-1/2  items-center justify-center">
          <div>
            <input type="text" placeholder="Enter the city" className="cityInput border-2 border-neutral-200   p-2 rounded-md outline-none hover:border-neutral-400" onChange={handleChange} value={location}/>
          </div>
          <div className="flex justify-between w-full">
            <Button variant="primary">Add below</Button>
            <Button withArrow>Weather</Button>
          </div>
        </div>

        <div>

        </div>
      </main>
    </ViewContainer>
  );
}
