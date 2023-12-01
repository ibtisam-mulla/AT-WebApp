import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg'
import ho from './home.jpg'


function App() {
  return (
    <>
    <nav>
        <li>
          <Link to="./component/Into.js">Into</Link>
        </li>
        <li>
          <Link to="./component/Vision.js">Vision</Link>
        </li>
        <li>
          <Link to="./component/Mission.js">Mission</Link>
        </li>
        <li>
          <Link to="./component/Services.js">Our Services</Link>
        </li>
        <li>
          <Link to="./component/Team.js">Our Team</Link>
        </li>
        <li>
          <Link to="./component/Contact.js">Contact us</Link>
        </li>
    </nav>
    <div className='white-block'>
        <img src={logo} alt="company Logo"/>
        <div className='container'>
            <p className='name'>ACRANTON TECHNOLOGIES</p>
            <div className='div2'>
                <p className='spandiv1'>"Empowered</p>
                <p className='spandiv2'>by</p>
                <p className='spandiv3'>Innovation"</p>
            </div>
            <hr/>
        </div>
        </div>
        <svg viewBox='0 0 310 400'>
          
          <path d="M100 10 L180 50 L180 135 L100 177 L20 136 L20 50 Z"  stroke-width="2" fill="white"/>
          
       </svg>
        <div className="hexagon-container">
        <img className="hexagon-image" src={ho} alt="HexagonImage"/>

        </div>

    </>
  );
}

export default App;
