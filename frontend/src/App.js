import React from 'react';

//components
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Portfolio from './Components/Portofolio'
import Resume from './Components/Resume'


const App = () =>{

    return (
      <div>
          <Navbar />
          <Header/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Footer/>
      </div>
    );
  }

export default App