import React from 'react' 

const Header = () => {

return (
<React.Fragment>
   <header id="home">
      
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Momodou Krubally.</h1>
            <h3>I'm a Helsinki based <span>Software developer</span>, <span>B.A. thesis student,</span>, <span>hobbyist
               </span> and a <span> Fullstack Developer</span>.</h3>
            <hr />
            <ul className="social">
               <li><a href="https://stackoverflow.com/users/6723219/moe?tab=profile"><i className="fa fa-stack-overflow"></i></a></li>
               <li><a href="https://twitter.com/jattoo3"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://github.com/jattoo"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header> 
</React.Fragment>
)
}
export default Header