import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import AppStore from './components/AppStore'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing:'ease-in-sine',
      delay:100,
    })
    Aos.refresh();
  }, [])

  
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
