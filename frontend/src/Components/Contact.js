import React, { useState } from 'react' 
import Emailjs from 'emailjs-com'
import 'react-notifications/lib/notifications.css'
import {  NotificationManager, NotificationContainer } from 'react-notifications'

const Contact = () => {
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [title, setTitle] = useState('')
    const [feedBack, setFeedBack] = useState('')

    const handleNameChange = (e) => {
        setNameField(e.target.value)
    }

    const handeEmailChange = (e) => {
        setEmailField(e.target.value)
    }

    const handleSubjectChange = (e) => {
        setTitle(e.target.value)
    }
    const handleMessageChange = (e) => {
        setFeedBack(e.target.value)
    }
 

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = {
            nameField,
            emailField,
            title,
            feedBack
        }

        const message_html = {...message}
        const user_id = process.env.REACT_APP_USER_ID
        const template_id = process.env.REACT_APP_TEMPLATE_ID
        const service_id = process.env.REACT_APP_SERVICE_ID
        //console.log(message_html, userId, templateID, serviceId)
       
        //CONFIGURE AND SEND WITH EMAILJS
        Emailjs.send(service_id, template_id, message_html, user_id)
        .then(res => {
            NotificationManager.success(<p>Thank you!,<br/>I'll be in touch as soon as possible.</p>)
        })
        .catch(error => {
            NotificationManager.error(<p>Sending message failed</p>)
        })
        clearAllFields()
    }

    const clearAllFields = () => {
        setNameField('')
        setEmailField('')
        setTitle('')
        setFeedBack('')
    }

return (
    <React.Fragment>
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead">
                        Please don not hesitate..Incase i did not reply immidiately,
                        then it means i am not home may gone to the gym or outside. 
                        Please dont worry i will reply as soon as it it possible. 
                        Thank you for you time...You are the best!</p>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                    <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName"> <span className="required"></span></label>
                                <input type="text" value={nameField} size="35" id="contactName" placeholder="name here..."  onChange={handleNameChange} required/>
                            </div>
                            <div>
                                <label htmlFor="contactEmail"><span className="required"></span></label>
                                <input type="email" value={emailField} size="35" id="contactEmail" placeholder="your email.." onChange={handeEmailChange} required />
                            </div>
                            <div>
                                <label htmlFor="contactSubject"></label>
                                <input type="text" value={title} size="35" placeholder="subject..." id="contactSubject" onChange={handleSubjectChange} required/>
                            </div>
                            <div>
                                <label htmlFor="contactMessage"> <span className="required"></span></label>
                                <textarea cols="50" rows="15" value={feedBack} placeholder="message me..." onChange={handleMessageChange} required />
                            </div>
                            <div>
                                <button className="submit">Submit</button>
                                <span id="image-loader">
                                </span>
                            </div>
                        </fieldset>
                    </form> 
                    
                    </div>
                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                        <p className="address">
                                Momodou Krubally<br/>
                                Vantaa Finland<br/>
                                <span>(358) 466 858 166</span>
                            </p>
                        </div>
                    
                    </aside>
                </div>
        </section> 
        <NotificationContainer />
    </React.Fragment>
)}

export default Contact
