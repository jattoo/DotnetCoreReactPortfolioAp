import React from 'react' 

const navWrap = {
   font: '12px opensans-bold sans-serif',
   width: '100%',
   textTransform: 'uppercase',
   letterSpacing: '2.5px',
   zIndex: '100',
   position: 'fixed',
   top: '0',
   textAlign: 'center',
   backgroundColor: '#333',
}

const listStyle = {
   display: 'inline-block',
   padding: '8px 13px',
   lineHeight: '32px',
	textDecoration: 'none',
   color: 'white'

}


const Navbar = () => {
return (
    <div>
      <nav style={navWrap} className="navbar navbar-expand-lg navbar-light" > 
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav m-auto">
            <li  className="nav-item active"><a  style={listStyle} href="#home">Home</a></li>
            <li className="nav-item" ><a style={listStyle} className="nav-link text-uppercase text-white ml-5"  href="#about">About</a></li>
	         <li className="nav-item" ><a style={listStyle} className="nav-link text-uppercase text-white ml-5" href="#resume">Resume</a></li>
            <li className="nav-item" ><a style={listStyle} className="nav-link text-uppercase text-white ml-5"  href="#portfolio">Works</a></li>
            <li className="nav-item" ><a style={listStyle} className="nav-link text-uppercase text-white ml-5" href="#contact">Contact</a></li>
         </ul> 
         </div>
      </nav> 
    </div>
)
}

export default Navbar