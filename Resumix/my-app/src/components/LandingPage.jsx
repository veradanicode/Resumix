import React from 'react'
import './LandingPage.css'
import stamp from '../assets/stamp.png'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Templates from './templates';


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className='container'>
          <Navbar/>
          <div className='content'>
            <img src={stamp} alt="stamp" />
              <h1 className='header'>RES<span className='u'>U</span>MIX</h1>
              <p>Mix, match, and build your perfect resume in minutes.</p>
              <button onClick={() => navigate('/resume-form')}> Generate resume</button>
          </div>
       </div>
       <div>
          <Templates/>
        </div>
    </div>

  )
}

export default LandingPage
