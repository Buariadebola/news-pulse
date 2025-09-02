import React, { useContext } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { GiWindTurbine } from 'react-icons/gi'
import { MdWaterDrop } from 'react-icons/md'
import { WiBarometer } from 'react-icons/wi'
import { FcDown, FcUp } from 'react-icons/fc'
import { BiCalendarAlt } from 'react-icons/bi'
import { FaClock } from 'react-icons/fa'
import { WeatherContext } from '../Context/WeatherProvider'

const WeatherResult = ({name, temp, desc, humidity, wind, pressure, max, min, date, time, img}) => {

  const { handleSearch, setSearchInput, searchInput} = useContext(WeatherContext);

  return (
    <>
      <div className="weather-content">
              <div className="search-box">
                <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Enter city'/>
                <button onClick={handleSearch}><FaMagnifyingGlass /></button>
              </div>
              <div className='top-weather'>
                <div className="top-sec sec1">
                  <span className='weather-date'><BiCalendarAlt style={{marginRight: '5px', scale: '1.2'}}/>{date}</span>
                  <span className='weather-time'><FaClock style={{marginRight: '5px', scale: '1.2'}}/>{time}</span>
                  <h1 className='weather-name'>{name}</h1>
                  <img src={img} alt="" className="weather-icon" />
                </div>
                <div className='right-sec'>
                  <div className="top-sec sec2">
                  <p className='temp'><span>Temp: </span>{temp}°C </p>
                  <p className="weather-des"><span>Weather: </span>{desc}</p>
                </div>
                <div className="range">
                  <p><FcUp style={{scale: '1.2'}}/>Max Temp: <span>{max}°C</span></p>
                  <p><FcDown style={{scale: '1.2'}}/>Min Temp: <span>{min}°C</span></p>
                </div>
                </div>
              </div>
              <div className="bottom-weather">
                <div className="bottom-sec">
                  <p>Humidity<MdWaterDrop/></p>
                  <span>{humidity}%</span>
                </div>
                <div className="bottom-sec">
                  <p>Wind speed<GiWindTurbine/></p>
                  <span>{wind}m/s</span>
                </div>
                <div className="bottom-sec">
                  <p>Pressure<WiBarometer style={{scale: '1.5'}}/></p>
                  <span>{pressure}hPa</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default WeatherResult
