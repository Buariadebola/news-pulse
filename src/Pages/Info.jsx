import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeProvider';
import { GiClick } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserProvider';
import { NewsContext } from '../Context/NewsProvider';
import { WeatherContext } from '../Context/WeatherProvider';

const Info = () => {

    const {theme, setTheme} = useContext(ThemeContext);
    const { name, setName } = useContext(UserContext);
    const {setCountry} = useContext(NewsContext);
    const { city, setCity } = useContext(WeatherContext);

    const handleAlert = () => {
      alert('Oga just select "US" and continue, no need to overdo');
    }

  return (
    <div className='info-page'>
      <div className='info'>
        <h2>What's your name? </h2>
        <input type="text" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)}/>
        <h3>your location?</h3>
        <input type="text" placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>
      <div className='info'>
        <h3>Select Region</h3>
        <div className='regions'>
          <button onClick={() => setCountry("us")}>US</button>
            <button onClick={() => setCountry("fr")} onMouseDown={handleAlert}>France</button>
            <button onClick={() => setCountry("de")} onMouseDown={handleAlert}>Germany</button>
            <button onClick={() => setCountry("ca")} onMouseDown={handleAlert}>Canada</button>
            <button onClick={() => setCountry("au")} onMouseDown={handleAlert}>Australia</button>
            <button onClick={() => setCountry("br")} onMouseDown={handleAlert}>Brazil</button>
            <button onClick={() => setCountry("in")} onMouseDown={handleAlert}>India</button>
            <button onClick={() => setCountry("jp")} onMouseDown={handleAlert}>Japan</button>
            <button onClick={() => setCountry("gb")} onMouseDown={handleAlert}>UK</button>
            <button onClick={() => setCountry("it")} onMouseDown={handleAlert}>Italy</button>
        </div>
      </div>
      <div className='info'>
        <h3>Theme Preference</h3>
        <div className="theme-choice">
            <div className="theme">
                <p>Light Theme</p>
                <span className={`theme-btn light ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}></span>
            </div>
            <div className="theme">
                <p>Dark Theme</p>
                <span className={`theme-btn dark ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}></span>
            </div>
        </div>
      </div>
      <Link to="/home"><button className='next-button'>click here to Continue <GiClick/></button></Link>
    </div>
  )
}

export default Info
