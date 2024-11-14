import React from 'react'

import Navbar from './Routes/Navbar'
import { BrowserRouter} from 'react-router-dom'
import About from './Routes/About'
import Skills from './Routes/Skills'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import Footer from './Routes/Footer'


const App = () => {
  return (
      <>
    <BrowserRouter>
     <Navbar/>

    <About/>
    <Skills/>
    <Services/>
    <Contact/>


    </BrowserRouter>
    <Footer/> 
    </>
  )
}

export default App
