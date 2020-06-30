import React, {useState} from 'react' 
import Modal from 'react-modal'



//images
import bloglist from './../../assets/images/portfolio/bloglist.JPG'


const Style = {
   overlay: {
   backgroundColor: 'grey',
},
   content: {
      textAlign: 'center',
      marginLeft: '10em',
      marginRight: '10em',
      
   }
}



const BlogModal = (props) => {
   const [modalIsOpen, setModalIsOpen] = useState(false)

    let Blogdata = 
        {
            'name': 'database not yet connected',
            'id': 1,
            'details': 'database not yet connected',
            'specs': 'database not yet connected',
        }

    const info = props.data === undefined ? Blogdata : props.data

    
return (
    <div className="columns portfolio-item" >
    <div className="item-wrap" >
          <img alt="" src={bloglist}/>
          <div className="overlay" style={ {textAlign: 'center'}}>
             <div className="portfolio-item-meta">
                <h5>Bloglist</h5>
                <p>By Moe</p>
             </div>
             <button onClick={() => setModalIsOpen(true)}>Details</button>
          </div>
          <div>
             <Modal 
             isOpen={modalIsOpen}  
             onRequestClose={() =>  setModalIsOpen(false)}
             style={ Style}
             >
                   <div className="container">
                      <img alt="" src={bloglist}/>
                      <ul className="nav nav-tabs" role="tablist">
                         <li className="nav-item">
                               <a href="#introduction" className="nav-link active" role="tab" 
                               data-toggle="tab"
                               >About</a>
                         </li>
                         <li className="nav-item">
                               <a href="#learned" className="nav-link" data-toggle="tab" role="tab"
                               >Specs</a>
                            </li>
                            <li className="nav-item">
                                <a href="#topics" className="nav-link" data-toggle="tab" role="tab"
                                >Topics</a>
                            </li>
                      </ul>
                   </div>
                   {/*Tap contents */}
                   <div className="container tab-content">
                        <div id="introduction" className="tab-pane active text-justify" >
                            <h2 className="mb-3 mt-3 text-center">About the project</h2>
                            <div>
                               <h3>Check It Out: <a href="https://bloglistsovellus.herokuapp.com">Bloglist App Live</a></h3>
                            </div>
                            <p>{info.details}</p>
                      </div>
                      <div id ="learned" className="tab-pane text-justify" >
                            <h2 className="mb-3 mt-3 text-center">What I learned</h2>
                            <p>{info.specs}</p>
                      </div>
                      <div id="topics" className="tab-pane text-justify" >
                          <h2 className="mb-3 mt-3 text-center">Topics Covered</h2>
                            <p className='display-4' style={{ color: '#34abeb'}}>{info.topics}</p>
                      </div>
                   </div>
                   <span className="categories"><i className="fa fa-tag"></i>The power of coffee</span>
                   <div>
                        <button onClick={() =>  setModalIsOpen(false)}>Dismiss</button>
                    </div>
             </Modal>
          </div>
    </div>
 </div>
    )
}

export default BlogModal