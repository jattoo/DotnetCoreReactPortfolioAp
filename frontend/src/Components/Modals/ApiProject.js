import React, { useState } from 'react'
import Modal from 'react-modal'



//images
import apiPic from './../../assets/images/portfolio/api.jpg'


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



const ApiProject = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    let ApiData = {
        'name': 'database not yet connected',
        'id': 1,
        'details': 'database not yet connected',
        'specs': 'database not yet connected',
    }

    const info = props.data === undefined ? ApiData : props.data


    return (
        <div className="columns portfolio-item" >
            <div className="item-wrap" >
                <img alt="" src={apiPic} />
                <div className="overlay" style={{ textAlign: 'center' }}>
                    <div className="portfolio-item-meta">
                        <h5>Api Project</h5>
                        <p>By Moe</p>
                    </div>
                    <button onClick={() => setModalIsOpen(true)}>Details</button>
                </div>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={Style}
                    >
                        <div className="container">
                            <img alt="" src={apiPic} />
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
                                <p>{info.details}</p>
                            </div>
                            <div id="learned" className="tab-pane text-justify" >
                                <h2 className="mb-3 mt-3 text-center">What I learned</h2>
                                <p>{info.specs}</p>
                            </div>
                            <div id="topics" className="tab-pane text-justify" >
                                <h2 className="mb-3 mt-3 text-center">Topics Covered</h2>
                                <p className='display-2' style={{ color: '#34abeb' }}>{info.topics}</p>
                            </div>
                        </div>
                        <span className="categories"><i className="fa fa-tag"></i>The power of coffee</span>
                        <div>
                            <button onClick={() => setModalIsOpen(false)}>Dismiss</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ApiProject