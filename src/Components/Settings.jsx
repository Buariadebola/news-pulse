import React, { useContext, useState } from 'react'
import { BiFlag } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import { CgColorPicker } from 'react-icons/cg'
import { PiGearSixBold } from 'react-icons/pi'
import { ThemeContext } from '../Context/ThemeProvider'
import { NewsContext } from '../Context/NewsProvider'

const Settings = () => {

    const [showContent1, setShowContent1] = useState(true);
    const [showRegion, setShowRegion] = useState(true);
    const {theme, setTheme} = useContext(ThemeContext);
    const { setCountry} = useContext(NewsContext);

    const handleClick = () => {
        setShowContent1(! showContent1);
    };

    const handleRegion = () => {
        setShowRegion(! showRegion);
    };

  return (
    <div className='settings'>
        {showRegion ? (
            <>
        {showContent1 ? (
        <div className='settings-content1'>
          <h3>Settings <PiGearSixBold/></h3>
          <button onClick={handleClick}>Change Theme <CgColorPicker/></button>
          <button onClick={handleRegion}>Change region <BiFlag/></button>
        </div>
        ) : (
        <div className='settings-content2'>
            <h3>Settings <PiGearSixBold/></h3>
            <div className="theme-section">
                <span className={`theme-btn light ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}></span>
                <span className={`theme-btn dark ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}></span>
            </div>
            <button onClick={handleClick}><BsArrowLeft/>Back</button>
        </div>
        )}
        </>
    ) : (
        <div className='settings-content2'>
            <h3>Settings <PiGearSixBold/></h3>
            <div className='regions'>
                <button onClick={() => setCountry("us")}>US</button>
                <button onClick={() => setCountry("fr")}>France</button>
                <button onClick={() => setCountry("de")}>Germany</button>
                <button onClick={() => setCountry("ca")}>Canada</button>
                <button onClick={() => setCountry("au")}>Australia</button>
                <button onClick={() => setCountry("br")}>Brazil</button>
                <button onClick={() => setCountry("in")}>India</button>
                <button onClick={() => setCountry("jp")}>Japan</button>
                <button onClick={() => setCountry("gb")}>UK</button>
                <button onClick={() => setCountry("it")}>Italy</button>
            </div>
            <button onClick={handleRegion}><BsArrowLeft/>Back</button>
        </div>
    )}
    </div>
  )
}

export default Settings
