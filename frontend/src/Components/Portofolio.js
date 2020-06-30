import React from 'react';
//components
import Modal from 'react-modal';
import BlogModal from './Modals/BlogModal';
import PhoneBookModal from './Modals/PhoneBookModal';
import ApiProject from './Modals/ApiProject'
import DotnetReact from './Modals/DotnetReact'

Modal.setAppElement('#root')
const Portfolio = (props) => {
   //hand picking individual datas b4 supplying further
   const phoneData = props.projectdata.find(phone => phone.id === 1)
   const blogData = props.projectdata.find(blog => blog.id === 2)
   const apiProjectData = props.projectdata.find(apiData => apiData.id === 3)
   const reactDonetCore = props.projectdata.find(reactnet => reactnet.id === 4)
   
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