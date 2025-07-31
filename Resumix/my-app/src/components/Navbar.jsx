import React from 'react'
import './Navbar.css'
function Navbar () {
  return (
    <div className='navbar'>
      <header className='header-with-triangle'>
           <div className='triangle-background'></div>
      <nav>
      <div className='logo'>ResumeMix</div>
      <ul className='navbar' >
        <li><a href="#features">Features</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
      </header>
    
    </div>
  )
}

export default Navbar
