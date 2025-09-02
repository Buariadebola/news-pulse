import React from 'react'
import { CgMail } from 'react-icons/cg'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h3>Stay Informed</h3>
        <p>Get the latest news delivered to your inbox every morning.</p>
      <input type="text" placeholder='Enter your email'/>
      <button><CgMail style={{scale: '1.4'}}/> Subscribe</button>
    </div>
  )
}

export default Subscribe
