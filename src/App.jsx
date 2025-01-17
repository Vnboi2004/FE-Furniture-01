import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useDarkMode } from './DarkModeContext';
import Home from './Components/Home/Home';
import Products1 from './Components/Products/Products1';
import Beautify from './Components/Beautify/Beautify';
import Products2 from './Components/Products/Products2';
import Works from './Components/Works/Works';
import Footer from './Components/Footer/Footer';
const App = () => {
  
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className='overflow-x-hidden'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Home/>
      <Products1/>
      <Beautify/>
      <Products2/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default App
