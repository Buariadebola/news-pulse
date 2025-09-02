import React, { useContext } from 'react'

import { WeatherContext } from '../Context/WeatherProvider';

const WeatherUpdate = () => {

  const {weather, city, setCity} = useContext(WeatherContext);

  return (
    <div className='weather-update'>
      <h3>Weather Update</h3>
      {weather ? (
        <>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
      <p className='weather-temp'>{weather.main.temp}°C</p>
      <span className='weather-desc'>{weather.weather[0].description}, <span className='weather-name'>{weather.name}</span></span>
      <p className='weather-date'>{new Date().toLocaleDateString()}</p>
      <p className="weather-time">{new Date().toLocaleTimeString()}</p>
      </>
      ) :  (
        <input type="text" placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)}/>
      )}
    </div>
  )
}

export default WeatherUpdate
