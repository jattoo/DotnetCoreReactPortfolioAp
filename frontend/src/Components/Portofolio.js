import React,{useState, useEffect } from 'react';
import axios from 'axios'

//components
import Modal from 'react-modal';
import BlogModal from './Modals/BlogModal';
import PhoneBookModal from './Modals/PhoneBookModal';
import ApiProject from './Modals/ApiProject'
import DotnetReact from './Modals/DotnetReact'

//redux




Modal.setAppElement('#root')
const Portfolio = () => {
   const [PortFolioData, setPortFolioData] = useState([])

    const blogData = PortFolioData.find(blog => blog.id === 1)
    const phoneData = PortFolioData.find(phone => phone.id === 4)
    const apiProjectData = PortFolioData.find(apiData => apiData.id === 2)
    const reactDonetCore = PortFolioData.find(reactnet => reactnet.id === 5)


    console.log('phonedata: ', phoneData)
   useEffect(()=> {
      console.log('useEffect')
      axios
      .get('https://localhost:44334/api/PortfolioAppModels')
      .then(response => {
         
         setPortFolioData(response.data)
         
      })
      .catch(error => error.Message)
   }, [])
    
return (
<React.Fragment>
   <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                        <BlogModal data={blogData}/>
                        <PhoneBookModal data={phoneData} />
                        <ApiProject data={apiProjectData} />
                        <DotnetReact data={reactDonetCore}/>
            </div> 
         </div>
      </div> 
   </section> 
</React.Fragment>
)}

export default Portfolio