import React, { useEffect, useRef } from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import BreakingNews from '../Components/BreakingNews'
import Highlight from '../Components/Highlight'
import LatestNews from '../Components/LatestNews'
import WeatherUpdate from '../Components/WeatherUpdate'
import Footer from '../Components/Footer'
import Subscribe from '../Components/Subscribe'
import Settings from '../Components/Settings'
import MenuBar from '../Components/MenuBar'
import AISearch from '../Components/AISearch'

const Home = () => {

      const HeroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeOutStartPoint = 50;
      const fadeOutEndPoint = 400;

      if (HeroRef.current) {
        if (scrollPosition >= fadeOutStartPoint && scrollPosition <= fadeOutEndPoint) {
          const opacity = 1 - (scrollPosition - fadeOutStartPoint) / (fadeOutEndPoint - fadeOutStartPoint);
          HeroRef.current.style.opacity = opacity.toString();
        } else if (scrollPosition > fadeOutEndPoint) {
          HeroRef.current.style.opacity = '0';
        } else {
          HeroRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      <MenuBar/>
      <NavBar/>
      <AISearch/>
      <Hero ref={HeroRef}/>
      <div className="home-content">
        <div className="home-left">
        <BreakingNews/>
        <LatestNews/>
      </div>
      <div className="home-right">
        <Highlight/>
        <WeatherUpdate/>
        <Subscribe/>
        <Settings/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
