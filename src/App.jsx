import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Particles from './components/Particle'

const App = () => {

  
  return (
    <> 
        <Particles />
       

        <div>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        </div>
    </>
  )
}

export default App