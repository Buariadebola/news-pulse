import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../assets/newspulse-logo.png'

const Welcome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/signin');
        }, 9000);
        
        return () => clearTimeout(timer);
    }, [navigate]);

  return (
    <div className="welcome-body">
      <div className="page-content">
        <div className="image">
          <img className="logo" src={img} alt="" />
        </div>
      </div>
      <div className="loader2" style={{backgroundColor: 'transparent'}}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <hr className="footer-hr" />
      <div className="bottom-page">
          <p>&copy; 2025 News Pulse. All rights reserved.</p>
          <div className="brand-logo">
            <p>Renova codes</p>
          </div>
      </div>
    </div>
  )
}

export default Welcome
