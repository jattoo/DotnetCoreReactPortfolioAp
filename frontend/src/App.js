import React,{useState, useEffect } from 'react';

//components
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Portfolio from './Components/Portofolio'
import Resume from './Components/Resume'
import projectService from './services/projects'

const App = () =>{
  const [PortFolioData, setPortFolioData] = useState([])

  useEffect(()=> {
    projectService
      .getAllProjects()
      .then(allProjects => {
        setPortFolioData(allProjects)
      })
      .catch(error => error.Message)
 }, [])

    return (
      <div>
          <Navbar />
          <Header/>
          <About/>
          <Resume/>
          <Portfolio projectdata={PortFolioData}/>
          <Contact/>
          <Footer/>
      </div>
    );
  }

export default App