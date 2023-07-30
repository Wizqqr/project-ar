import React from 'react';
import '../pages/Navbar.css';
import '../pages/Navbar.js'
// import AboutMan from '../pictures/free-icon-about-us-8644718.png'
// import FAQMan from '../pictures/free-icon-question-10771919.png'
// import SignUp from '../components/SignUp/SignUp.jsx'
// import Rest from '../components/Rest/Rest.jsx'

import {Link} from 'react-router-dom'
function Navbar() {
    return (
       <div className="Navbar">
        <div className="sale">
            <h1 className="saleh1">LAST DAY: СКИДКИ -60%</h1>
        </div>
        <nav className="Navbar_Start">
            <div className="Start">
            <h1 className="Company">The   Sill</h1>
                <div class="clockpage">
        <span id="clock"></span> 
        <span id="dayOfWeek"></span>
    </div>
             <div className="PageNum2">
            <Link to='/about'><li className='Navbar_li_work_About'>About us</li></Link>       
            <Link to='/faq'><li className="Navbar_li_work_FAQ">Location</li></Link>
            <li className="Navbar_li_work">Hello, Sign In</li>          
           <Link to='/main'><li className="Navbar_li_work_Main">To own</li></Link>
            <button className='ButHav'> Sign Up
</button>

            </div>
            </div>
        </nav>
        <hr></hr>
        <nav className="Navbar_Navigations">
            <div className="PageNum1"> 
            <Link to='/rest'><button className='ButNavLi'>Отдых</button></Link>
           
            <Link to='/sport'><button className='ButNavLi'>Спорт</button></Link>
            <Link to='/home'><button className='ButNavLi'>Недвижимости</button></Link>
            <Link to='/things'><button className='ButNavLi'>Одежда</button></Link>
            <Link to='/job'><button className='ButNavLi'>Работа</button></Link>
            </div>
        </nav>
        <hr></hr>
        </div> 
    );
}
export default Navbar;