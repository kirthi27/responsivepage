import React from 'react'
import { Link } from "react-router-dom"
import './navbar.css'
import { Navbar } from 'react-bootstrap'

const navbar = () => {
  return (
    <Navbar>
      <nav className='navbar1'>
    
          <h3>SENCHOLA UNIVERSITY</h3>
          <ul className='nav-links'>
          <Link to="/Home" className='Home'>
             <li>HOME</li>
             </Link>    
             <Link to="/Career" className='career'>
             <li>CAREER</li>
             </Link>    
             <Link to="/about" className='about'>
             <li>ABOUTUS</li>
             </Link>       
             <Link to="/contact" className='contact'>
             <li>CONTACTUS</li>
             </Link>
                    
         </ul>
           </nav>
    

  </Navbar>
     )
    }
   
export default navbar