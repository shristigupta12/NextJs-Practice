"use client"
import React, { useState, useEffect } from "react";
import { ViewContainer } from "@/components/layouts/view-container";
import { Button } from "@/components/ui/button";
import { getWeatherData } from "@/services/getWeather";
import Cities from "@/components/ui/cities";

export default function Home() {

  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [cloudy, setCloudy] = useState(0);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("")

  const handleChange = async (event:any) => {
    setLocation(event.target.value)
    if(getWeatherData(location)!=null){
      const data = await getWeatherData(location);  
      console.log(data)
      if(data?.temp) setTemp(data?.temp);
      if(data?.humidity) setHumidity(data?.humidity);
      if(data?.cloud) setCloudy(data?.cloud);
      if(data?.condition?.text) setDescription(data?.condition?.text);
      if(data?.condition?.icon) setIcon(data?.condition?.icon);
    }
  }


  return (
    <ViewContainer>
      <main className="flex flex-col h-screen py-2 gap-3 ">
        <div className="search-city flex flex-col gap-2 mx-auto h-1/2  items-center justify-center">
          <div>
            <input type="text" placeholder="Enter the city" className="cityInput border-2 border-neutral-200   p-2 rounded-md outline-none hover:border-neutral-400" onChange={handleChange} value={location}/>
          </div>
          <div className="flex justify-between w-full">
            <Button variant="primary">Add below</Button>
            <Button withArrow>Weather</Button>
          </div>
        </div>   
        <Cities location={location} temp={temp} icon={icon}  />
      </main>
    </ViewContainer>
  );
} 
