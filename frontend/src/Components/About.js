import React from 'react' 

const About = () => {

return (
<React.Fragment>
   <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
                    <p>You are most welcome to my portfolio website. My name is 
                    Momodou Krubally from Helsinki. A developer enthusiast. I 
                    found myself mostly amuzed with web stack technologies. 
                    I build JavaScript both frontend and backend web apps. I 
                    like to call myself a fullstack in the making. Python was 
                    my first programming language and still find its usefulness 
                    on the backend with the DjangoRestFramework. There is still 
                    room to grow and not afraid of picking on new toys along the 
                    way.
                    </p>
                    <p>I am at the end of my Bsc. Information Technology studies
                        and already have some developer experience under my belt.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                        <p className="address">
						   <span>
                               Momodou Krubally
                            </span><br/>
                            <span>
                                Vantaa Finland
                            </span><br/>
						   <span>
                               (358) 466 858 166
                            </span><br/>
                            <span>
                                    <a href="https://jattoo.github.io/jattoo/#/contact">Contact me</a>
                            </span><br/>
                            <span>momo.krubs@tutanota.com</span>
					   </p>
            </div>
            </div> 
         </div> 
      </div>
   </section> 
</React.Fragment>
)}

export default About