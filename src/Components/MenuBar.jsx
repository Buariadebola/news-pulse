import React, { useContext} from 'react'
import { HiHome, HiInformationCircle, HiNewspaper } from 'react-icons/hi'
import { TiWeatherDownpour } from 'react-icons/ti'
import { MenuContext } from '../Context/MenuProvider';
import { Link } from 'react-router-dom';
import logo from '../assets/newspulse-logo.png'
import { BiLogInCircle } from 'react-icons/bi';

const MenuBar = () => {

    const {showMenubar} = useContext(MenuContext);

  return (
    <div className={`menubar ${showMenubar ? 'active' : ''}`}>
      <img src={logo} alt="" className='menu-logo'/>
      <div className="menu-options">
          <li>
            <Link to="/home"><span>Home</span><HiHome style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
          <li>
            <Link to="/news"><span>News</span><HiNewspaper style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
          <li>
            <Link to="/weather"><span>Weather</span><TiWeatherDownpour style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
            <li>
            <Link to="/about"><span>About</span><HiInformationCircle style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
          <li>
            <Link to="/signin"><span>Sign in</span><BiLogInCircle style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
          </div>
    </div>
  )
}

export default MenuBar
