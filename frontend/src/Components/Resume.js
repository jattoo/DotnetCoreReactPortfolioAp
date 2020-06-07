import React from 'react' 

const Resume = () => {

return (
<React.Fragment>
   <section id="resume">
      <div className="row education">

         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="row item">

               <div className="twelve columns">

                  <h3>Laurea University Of Applied Sciences</h3>
                  <p className="info">Barchelors in Information Technology <span>&bull;</span> <em className="date">January 2017 - Present</em></p>

                  <p>Information Technology studies where I've mostly specialized in software development studies in different fields</p>
               </div>
            </div> 
         </div> 
      </div> 
      
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
                    <p>As a technical minded person, I learnt to evaluate my skills based on what end results
                    I am able to carry out with a programming language and this means that I don't count a programming language in itself
                    as part of my skills. I believe knowing a programming language in itself does not help attain professionality but instead
                    your professionality comes from what you are able to do with that particular language.
                    </p>
				<div className="bars">
				   <ul className="skills">
                        <li><span className="bar-expand reactjs"></span><em>ReactJS</em></li>
                        <li><span className="bar-expand nodejs"></span><em>NodeJS</em></li>
                        <li><span className="bar-expand django"></span><em>Django & Templates</em></li>
                        <li><span className="bar-expand djangorest"></span><em>DjangoRestFramework</em></li>
                        <li><span className="bar-expand dotnetcore"></span><em>. Net Core</em></li>
						<li><span className="bar-expand css"></span><em>CSS</em></li>
						<li><span className="bar-expand html5"></span><em>HTML5</em></li>
                        <li><span className="bar-expand mysql"></span><em>MySQl</em></li>
                        <li><span className="bar-expand mongodb"></span><em>MongoDB</em></li>
                        <li><span className="bar-expand github"></span><em>Github & Git</em></li>
					</ul>
				</div>
			</div> 
      </div> 
   </section> 
</React.Fragment>
)
}

export default Resume