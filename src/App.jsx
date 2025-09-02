import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Weather from './Pages/Weather'
import News from './Pages/News'
import About from './Pages/About'
import Info from './Pages/Info'
import { ThemeProvider } from './Context/ThemeProvider'
import { MenuProvider } from './Context/MenuProvider'
import { AISearchProvider } from './Context/AISearchProvider'
import { WeatherProvider } from './Context/WeatherProvider'
import { NewsProvider } from './Context/NewsProvider'
import { NewsSearchProvider } from './Context/NewsSearchProvider'
import Welcome from './Pages/Welcome'
import { UserProvider } from './Context/UserProvider'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'

function App() {
  return (
    <>
    <UserProvider>
      <NewsSearchProvider>
      <NewsProvider>
      <WeatherProvider>
      <AISearchProvider>
      <MenuProvider>
            <ThemeProvider>
              <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/info' element={<Info/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/weather' element={<Weather/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/signup' element={<SignUp/>}/>
              </Routes>
            </ThemeProvider> 
          </MenuProvider>
    </AISearchProvider>
    </WeatherProvider>
    </NewsProvider>
    </NewsSearchProvider>
    </UserProvider>
    </>
  )
}

export default App
