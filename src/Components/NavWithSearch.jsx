import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { BiMenu } from 'react-icons/bi'
import { MenuContext } from '../Context/MenuProvider'
import { NewsSearchContext } from '../Context/NewsSearchProvider'
import logo from '../assets/newspulse-logo.png'

const NavWithSearch = () => {

    const { handleMenubar } = useContext(MenuContext);
    const {handleKeywordChange, keyword} = useContext(NewsSearchContext);

  return (
    <>
      <div className='nav-bar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='nav-links'>
        <Link to="/home">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/about">About</Link>
      </div>
      <div className='search-box'>
        <FaMagnifyingGlass className='search-icon'/>
        <input type="text" placeholder='Search news...' value={keyword} onChange={(e) => handleKeywordChange(e.target.value)}/>
      </div>
      <Link to="/signin"><button className='signup-btn'>Sign in</button></Link>
      <button className='menu-button' onClick={handleMenubar}><BiMenu className='menu-icon'/></button>
    </div>
    </>
  )
}

export default NavWithSearch
