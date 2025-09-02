import React, { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { MenuContext } from '../Context/MenuProvider'
import logo from '../assets/newspulse-logo.png'

const NavBar = () => {

  const { handleMenubar } = useContext(MenuContext);
  
  return (
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
      <Link to="/signin"><button className='signup-btn'>Sign in</button></Link>
      <button className='menu-button' onClick={handleMenubar}><BiMenu style={{scale: '2'}}/></button>
    </div>
  )
}

export default NavBar
