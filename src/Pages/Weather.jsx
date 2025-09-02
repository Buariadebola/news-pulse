import React, { useContext } from 'react'
import video from '../assets/large.mp4'
import NavBar from '../Components/NavBar'
import WeatherResult from '../Components/WeatherResult'
import MenuBar from '../Components/MenuBar'
import AISearch from '../Components/AISearch'
import WeatherHome from '../Components/WeatherHome'
import { WeatherContext } from '../Context/WeatherProvider'

const Weather = () => {

    const {weather} = useContext(WeatherContext);

  return (
    <div className='weather-page'>
      <MenuBar/>
      <AISearch/>
      <NavBar/>
      <div className='weather-page'>
      <div className="video-bg">
        <video src={video} autoPlay loop muted playsInline></video>
      </div>
      {weather ?
       <WeatherResult
       img={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
       name={weather.name}
       temp={weather.main.temp}
       desc={weather.weather[0].description}
       humidity={weather.main.humidity}
       wind={weather.wind.speed}
       pressure={weather.main.pressure}
       max={weather.main.temp_max}
       min={weather.main.temp_min}
       date={new Date().toLocaleDateString()}
       time={new Date().toLocaleTimeString()}
       />
        :
      <WeatherHome/>
      }
    </div>
    </div>
  )
}

export default Weather
