import React, { useContext, useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { WeatherContext } from '../Context/WeatherProvider'
import Loader from '../Loaders/Loader';

const WeatherHome = () => {

  const {loading, handleSearch, setSearchInput, searchInput} = useContext(WeatherContext);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 40;
  const textToType = `
        <h1>Welcome to our <span>Weather</span> Page</h1>
        <p>Search for a city or location to check current weather.</p>
  `

      useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < textToType.length) {
                setText(textToType.substring(0, index + 1));
                setIndex(index + 1);
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [index, textToType]);

  return (
    <div className='weather-home'>
        <span dangerouslySetInnerHTML={{__html: text}}/>
      <div className='weather-search'>
              <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search city...'/>
              <button onClick={handleSearch}>Search <FaMagnifyingGlass style={{scale: '0.8'}}/></button>
      </div>
      {loading ? <Loader/> : null}
    </div>
  )
}

export default WeatherHome
