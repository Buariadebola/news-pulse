import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { FaExclamationTriangle, FaUserCircle} from 'react-icons/fa'
import { BiLock} from 'react-icons/bi';
import { CgMail } from 'react-icons/cg';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

  const handleSignup = async (event) => {
    event.preventDefault();
    try{
      const response = await api.post("/api/signup", { username, email, password });
      console.log(response.data)
      setError(null);
    alert("Signup successful! You can now sign in.");
    } catch (error) {
  setError(error.response?.data?.message || 'Error signing up');
}
  }


  return (
    <div>
      <div className='signup'>
        <div className="signup-box">
        <div className="login-right">
            <h1>Create Account</h1>
            <form className="login-form" onSubmit={handleSignup}>
                <div className="input-box"><FaUserCircle className='input-icon'/>
                <input id="username" type="text" name="username" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input-box"><CgMail className='input-icon'/>
                <input id="email" type="email" name="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="input-box"><BiLock className='input-icon'/>
                <input id="password" type="password" name="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
                <button type="submit" id="login-button" >Sign Up</button>
            </form>
        </div>
                <div className="login-left">
            <div className='login-content'>
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details and start a journey with us</p>
                <p>Already have an account?</p>
                <Link to="/"><button>Sign in</button></Link>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SignUp
