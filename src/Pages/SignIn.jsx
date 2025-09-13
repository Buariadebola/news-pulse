import React, { useState } from 'react'
import api from '../api'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import {FaExclamationTriangle } from "react-icons/fa";
import { BiLock } from 'react-icons/bi';
import logo from '../assets/newspulse-logo.png'

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

      const handleSignin = async (event) => {
        event.preventDefault();
        try{
          const response = await api.post("/api/signin", { username, password });
          const token = response.data.token;
          localStorage.setItem('token', token)
          localStorage.setItem('username', username);
          navigate('/info');
        } catch (error) {
  setError(error.response?.data?.message || 'Error signing in');
}
      }

  return (
    <>
    <div className='signin'>
        <div className="signin-box">
            <div className="login-left">
                <div className="login-content">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <p>Don't have an account?</p>
                    <Link to="/signup"><button>SIGN UP</button></Link>
                </div>
            </div>
            <div className="login-right">
                <img src={logo} alt="" className='login-logo' />
                <h1>Sign in to News Pulse</h1>
            <form className="login-form" onSubmit={handleSignin}>
                <div className="input-box"><FaUserCircle className='input-icon'/>
                <input id="username" type="text" name="username" placeholder='Email or username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input-box"><BiLock className='input-icon'/>
                <input id="password" type="password" name="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
                <button type="submit" id="login-button">SIGN IN</button>
            </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default SignIn
