import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import MenuBar from '../Components/MenuBar'
import AISearch from '../Components/AISearch'
import { BsEyeFill, BsPeopleFill } from 'react-icons/bs'
import { BiBulb, BiShield } from 'react-icons/bi'

const About = () => {
  return (
    <div className='about-page'>
      <MenuBar/>
      <NavBar/>
      <AISearch/>
      <div className="about-content">
        <section className='about-welcome'>
          <h1>About News Pulse</h1>
          <p>In a world where information is power, News Pulse is your trusted source for timely and accurate news and insights. Whether you're looking for local news, national news, or international news, we've got you covered. Our mission is to provide comprehensive coverage of local and global event, empowering our readers to stay informed and engaged.</p>
        </section>
        <section className="about-section2">
          <div className='wwc'>
            <h2>What We Cover</h2>
            <p><span>Politics: </span>Politics is the heart of our democracy, and we're dedicated to providing in-depth coverage of the issue that shape our world. We cover everything from elections and policy debates to government scandals and international relations. Our politics coverage is designed to keep you up-to-date on the issues that matter most.</p>
            <p><span>Sport: </span>Sport is a big part of our lives, and we're passionate about bringing you the latest news and update from the world of sports. From football and basketball to baseball and soccer, we provide in-depth coverage of sport news.</p>
            <p><span>Business: </span>The world of business is constantly changing, and we're here to provide regular update on the latest trends and developments. We provide in-depth coverage of the industries that drive our economy, including technoloy, finance and healthcare.</p>
            <p><span>Entertainment: </span>From blockbuster movies and hit TV shows to music and celebrity gossip, we provide reviews, interviews, and behind-the-scenes stories from the world of entertainment.</p>
          </div>
          <div className="our-mission">
            <h2>Our Mission</h2>
            <p>At News Pulse, our mission is to provide unbiased and in-depth reporting on the issues that matters most. We're commited to upholding the highest standards of journalism, including accuracy, fairness, and transparency. We strive to foster a well-informed community through our coverage of politics, sports, business and more.</p>
          </div>
        </section>
        <div className="about-section3">
          <h2>Our Value</h2>
        <div className='our-values'>
          <div className='value'>
            <BsEyeFill className='value-icon'/>
            <h3>Transparency</h3>
            <p>We believe in open, honest journalism that serves the public interest.</p>
          </div>
          <div className='value'>
            <BiShield className='value-icon'/>
            <h3>Integrity</h3>
            <p>Our commitment to accuracy and ethical reporting guides every story we publish.</p>
          </div>
          <div className='value'>
            <BsPeopleFill className='value-icon'/>
            <h3>Community</h3>
            <p>We serve our readers and communities with respect and dedication.</p>
          </div>
          <div className='value'>
            <BiBulb className='value-icon'/>
            <h3>Innovation</h3>
            <p>Embracing new technologies and methods to deliver news in the digital age.</p>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
