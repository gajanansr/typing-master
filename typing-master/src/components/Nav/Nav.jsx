import React from 'react'
import './Nav.css'
import logo from './../../assets/logo.png'

const Nav = () => {
    return (
        <>

          <div className="nav-container">
                <div className="nav-left">
                    <img className='flash-logo' src={logo}  alt="logo"  />
                    <p className='flash-logo-text' > Typing Master </p>

                </div>

                <div className="nav-right">
                     <a  rel="noopener noreferrer"
                       className='nav-bar-link'
                       target="_blank"  
                       href="https://gajanansr-portfolio.netlify.app/" 
                        >
                           
                          @Gajanan Rathod
                          
                      </a>
                       
                       
                 </div>

          </div>

        </>
    )
}

export default Nav