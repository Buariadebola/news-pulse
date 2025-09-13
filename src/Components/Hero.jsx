import React, { useContext, useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { UserContext } from '../Context/UserProvider';
import BN from '../assets/breaking news.jpg'
import NC from '../assets/global news.jpg'
import LW from '../assets/weather forecast isometric.jpg'
import PN from '../assets/businesswoman-working-laptop.jpg'

const features = [
    {text: 'Your trusted source for breaking news and in-depth analysis.', image: BN },
    {text: 'Comprehensive coverage of global events, politics, sports and entertainment.', image: NC },
    {text: 'Live weather updates and more to keep you informed.', image: LW },
    {text: 'Get personalized news recommendations tailored to your interests.', image: PN }
]

const Hero = () => {

      const [currentIndex, setCurrentIndex] = useState(0);
      const {name} = useContext(UserContext);

        useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
        }, 3000)

        return () => clearInterval(intervalId);
        }, []);

        const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  return (
    <div className='hero'>
      <div className="left-section">
        <h1>Hi <span>{name ? name : username}</span>, Welcome to News pulse</h1>
        <p>Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of events that matter.</p>
        <button>Get Started <BsRocketTakeoffFill/></button>
      </div>
      <div className="right-section">
            {features.map((feature, index) => (
                <FeatureCard
                key={index}
                image={feature.image}
                text={feature.text}
                isActive={currentIndex === index}
                />
            ))}
      </div>
    </div>
  )
}

export default Hero
