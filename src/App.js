import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Weather from './Components/Weather'
import Footer from './Components/Footer'
function App() {
  const[isDark,setIsDark]=useState(false)

 const handleClick = () => setIsDark(!isDark)
  return (
    <div className={isDark
      ? "bg-dark"
      :"bg-light" 
    }>

        
      <Navbar isDark={isDark} clicked={handleClick}/>
      <Weather/>
      <Footer/>
   </div>
  )
}

export default App
