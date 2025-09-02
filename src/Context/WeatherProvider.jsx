import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [error, setError] = useState('');
    const API_KEY = '5ef40e583820fe952eb07e462b0d6f47';

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
                setWeather(response.data);
            } catch (error) {
                setError('Error fetching weather data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchWeather();
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        setCity(searchInput);
    };

  return (
    <WeatherContext.Provider value={{error, loading, weather, city, setCity, setWeather, handleSearch, setSearchInput, searchInput}}>
        {children}
    </WeatherContext.Provider>
  )
}

export { WeatherProvider, WeatherContext }
