import React from 'react' 

const footerStyle = {
   color: 'white',
   display: 'inline-block',
   margin: '5px'
}
const Footer = () => {
return (
      <React.Fragment>
            <footer >
            <div>
                  <ul>
                     <li style={footerStyle}>&copy; Respect the power of coffee</li>
                     <li style={footerStyle}>| Template courtesy styleshout.com
                        <a style={footerStyle} href="https://www.styleshout.com/free-templates/ceevee/">check out their website</a>
                     </li>
                  </ul>
               </div>
            </footer> 
      </React.Fragment>
   )
}

export default Footer