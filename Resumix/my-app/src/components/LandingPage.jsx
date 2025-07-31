import React from 'react'
import './LandingPage.css'
import stamp from '../assets/stamp.png'

const LandingPage = () => {
  return (
    <div className='container'>
        <div className='content'>
          <img src={stamp} alt="stamp" />
            <h1 className='header'>RES<span className='u'>U</span>MIX</h1>
            <p>Mix, match, and build your perfect resume in minutes.</p>
            <button> Generate resume</button>
        </div>
    </div>
  )
}

export default LandingPage
