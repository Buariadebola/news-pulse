import React, { useContext } from 'react'
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { NewsContext } from '../Context/NewsProvider'

const Footer = () => {

    const {category, handleChangeCategory} = useContext(NewsContext);

  return (
    <div className='footer'>
        <div className="top-footer">
            <div className="footer-sec">
                <h2>NewsPulse</h2>
                <p>Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of events that matter.</p>
                <div className="socials">
                    <BsFacebook style={{scale: '1.2'}}/>
                    <BsYoutube style={{scale: '1.4'}}/>
                    <BsInstagram style={{scale: '1.2'}}/>
                    <BsTwitterX style={{scale: '1.2'}}/>
                </div>
            </div>
            <div className="footer-sec">
                <h3>Categories</h3>
                <ul>
                    <li className={`category-btn ${category === 'general' ? 'active' : ''}`} onClick={() => handleChangeCategory('general')}>General</li>
                    <li className={`category-btn ${category === 'politics' ? 'active' : ''}`} onClick={() => handleChangeCategory('politics')}>Politics</li>
                    <li className={`category-btn ${category === 'business' ? 'active' : ''}`} onClick={() => handleChangeCategory('business')}>Business</li>
                    <li className={`category-btn ${category === 'sports' ? 'active' : ''}`} onClick={() => handleChangeCategory('sport')}>Sports</li>
                    <li className={`category-btn ${category === 'entertainment' ? 'active' : ''}`} onClick={() => handleChangeCategory('entertainment')}>Entertainment</li>
                    <li className={`category-btn ${category === 'technology' ? 'active' : ''}`} onClick={() => handleChangeCategory('technology')}>Technology</li>
                </ul>
            </div>
            <div className="footer-sec">
                <h3>Company</h3>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Advertise</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
                    
            </div>
            <div className="footer-sec">
                <h3>Stay Connected</h3>
                <p>Subscribe to our newsletter for daily updates</p>
                <div className='sub-box'>
                    <input type="text" />
                    <button>Join</button>
                </div>
            </div>
        </div>
        <hr />
        <div className="bottom-footer">
            <p>&copy; 2025 NewsPulse. All rights reserved.</p>
            <div><span>Privacy</span><span>Terms</span><span>Cookies</span></div>
        </div>
    </div>
  )
}

export default Footer
