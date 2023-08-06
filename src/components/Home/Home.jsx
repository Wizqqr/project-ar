import {React, useState, useEffect} from 'react'
import { Modal, Button } from "react-bootstrap";
import '../Things/darkMode.css'
import '../Home/Home.css'
import ural1 from '../pictures/URAL1.jpg'
import ural2 from '../pictures/URAL2.jpg'
import ural3 from '../pictures/URAL3.jpg'
import ural4 from '../pictures/Zidane1.jpg'
import arrow from '../pictures/true.png'
import {Link} from 'react-router-dom'
import Carter from '../Carter'
import CardCar1 from '../pictures/cardcar.jpg'
import CardCar2 from '../pictures/cardcar2.jpg'
import CardCar3 from '../pictures/cardcar3.jpg'
import CardCar4 from '../pictures/cardcar4.jpg'
import Messi from '../pictures/pepsi.jpg'
import Fut1 from '../pictures/fut1.jpg'
import Fut2 from '../pictures/fut2.jpg'
import Fut3 from '../pictures/fut3.jpg'
import Fut4 from '../pictures/fut4.jpg'
import Footer from '../Footer/Footer'
const Home=()=>  {
  function handleClick() {
    const bodyStyle = document.getElementsByClassName('HomeLi')[0].style;
     if (bodyStyle.color === 'black') {
       bodyStyle.color = 'green';
     } else {
       bodyStyle.color = 'black';
     }
   }
   const [showModal, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    return (
    <div className="Home"> 
        <div className="Ural">
         <p>THE BEST CLOTHES </p>
        </div>
            <header className="HomeHead">
                <nav className="HomeNav">
                  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeLi">MEN</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeLi">WOMEN</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeLi">KIDS</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeNavLi">BACK TO SCHOOL</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeNavLi">SALE</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
  <div className="HeaderDivNum1">
                  <a class='gta' href='#'>
                    <Link to='/sport'>  <a onClick={handleClick}className="HomeNavLi">3 STRIPE LIFE</a></Link>    
                    </a>
                    <div class="dropdown-content">
                      <div className="Bishkek">
    <nav className="dropdown-contentNav">
      <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    <nav className="dropdown-contentNav">
    <h1>NEW & TRENDING</h1>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
      <li>New Arrivals</li>
    </nav>
    </div>

  </div>
  </div>
                </nav>
            </header>
            <div className="HomeHeadNum2">
            <p>BACK TO SCHOOL SAVINGS: KIDS STYLES UP TO 60% OFF WITH CODE: KIDS</p>
            <button>SHOP NOW</button>
            </div>
            <div className="MainFirst">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
                <div className="MainFirstDiver">
                <h1 className="MainFirstH1">Welcome to our Shop</h1>
                <p className="MainFirstP">Mix and match 3-Stripes classics to create a look for fall that’s all<br></br> your own.Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us.</p>
                </div>
                <div className="MainFirstButtons">
<Link to='/sport'><button class="wrapper">
<a class="cta" href="#">
    <span>SHOP MEN</span>
    <span>
      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
  </a>
</button>
</Link>
<Link to='/sport'><button class="wrapper">
  <a class="cta" href='#'>
    <span>SHOP WOMEN</span>
    <span>
      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
  </a>
</button>
</Link>
<Link to='/sport'><button class="wrapper">
  <a class="cta" href="#">
    <span>SHOP KIDS</span>
    <span>
      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink">
        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
          <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </span> 
    </a>
</button>
</Link>
                </div>
            </div>
            <div className="MainOfStarting">
              <div className="Textering">
              <h1>YEEZY</h1>
              <p>AVAILABLE ON CONFIRMED. DOWNLOAD, REGISTER, PARTICIPATE 
<br></br>
A PORTION OF THE SALE OF THESE ITEMS WILL BE DONATED IN SUPPORT OF THE FIGHT AGAINST DISCRIMINATION, HATE, RACISM, AND ANTISEMITISM.</p>
</div>
<button>SHOP NOW</button><br></br>
<button>READ THE BEST RELEASE</button>
            </div>
            <div className="MainOfHome">
           <Carter/>
           <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
            </div>
            <div className="MainOfCards">
              <div className="CardsOfMain">
                <div className="Cardochka">
                  <div className="CardochkaImg">
                  <img src={CardCar1} alt="" />
                  </div>
                  <div className="CardochkaText">
                   <Link to='/panth'><a  className='Cardochka_a'>MEN'S PANTH</a></Link> 
                  </div>
                </div>
                <div className="Cardochka">
                <div className="CardochkaImg">
                  <img src={CardCar2} alt="" />
                  </div>
                  <div className="CardochkaText">
                  <Link to='/sport'><a >MEN'S HOODIES</a></Link> 
                  </div>
                </div>
                <div className="Cardochka">
                <div className="CardochkaImg">
                  <img src={CardCar3} alt="" />
                  </div>
                  <div className="CardochkaText">
                  <Link to='/sport'><a >MEN'S SHORTS</a></Link> 
                  </div>
                </div>
                <div className="Cardochka">
                <div className="CardochkaImg">
                  <img src={CardCar4} alt="" />
                  </div>
                  <div className="CardochkaText">
                  <Link to='/sport'><a >MEN'S CLOTHING</a></Link> 
                  </div>
                </div>
              </div>
            </div>
            <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
            <div className="MainHomeCards">
              <div className="CardsJake">
                <div className="CartMen">
                  <div className="CartMenImg">
                    <img src={ural1} alt="" />
                  </div>
                  <div className="CartMenText">
                    <h1>ICONIC THEN. ICONIC NOW</h1>
                    <p>Elevate your everyday style with the Samba.</p>
                    <button className='JakeUp'>SHOP NOW</button>
                  </div>
                </div>
                <div className="CartMen">
                <div className="CartMen We">
                  <div className="CartMenImg">
                    <img src={ural4} alt="" />
                  </div>
                  <div className="CartMenText">
                    <h1>THE LIGHTEST ULTRABOOST EVER</h1>
                    <p>Ultraboost Light, with 30% lighter Boost </p>
                    <button className='JakeUp'>SHOP NOW</button>
                  </div>
                </div>
                  </div>
                  
                  <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
                   <div className="CartMen">
                  <div className="CartMen">
                  <div className="CartMenImg">
                    <img src={ural2} alt="" />
                  </div>
                  <div className="CartMenText">
                    <h1>YOUR WORLD CUP CLEATS</h1>
                    <p>Engineered for speed</p>
                    <button className='JakeUp'>SHOP NOW</button>
                  </div>
                </div>
                  </div>
                  <div className="CartMen">
                  <div className="CartMen">
                  <div className="CartMenImg">
                    <img src={ural3} alt="" />
                  </div>
                  <div className="CartMenText">
                    <h1>BACK TO SCHOOL STYLES</h1>
                    <p>Kick-start you fall wardrobe with tees</p>
                    <button className='JakeUp'>SHOP NOW</button>
                  </div>
                </div>
                  </div>
              </div>
            </div>
            <div className="Messi">
              <div className="MessiDiv">
                <div className="MessiDivInDiv2">
                  <img src={Messi} alt="" />
                </div>
                <div className="MessiDivInDiv">
                  <div className='MessiText'>
                  <h1>MESSI T-SHIRT INTER MIAMI</h1>
                  <p>After months — years, even — of speculation, Messi finally revealed his decision to join a Miami franchise that has been led by another global soccer icon, David Beckham, since its inception but has yet to make any real splashes on the field.</p>
                  <p>SIZES</p>
                  <div className="Sizes">
                    <button>S</button><button>M</button><button>L</button><button>XL</button><button>XXL</button><button>XXXL</button>
                  </div>
                  <button className='Buying'>BUY</button>
                  <p> Pay in 4 interest-free payments of $47.50 <br></br> with QIWI <button className='ButIm'>Learn More</button></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Foot">
           <Link to='/BookMark'><h1>FOOTBALL</h1></Link>   
              <div className="Ronaldo">
              <div className="FoorCards">
                <div className='CardOfImg'>
                  <img src={Fut1} alt="" />
                </div>
                <div className='CardOfText'>
                  <h1>What Is A Penalty Kick In Soccer</h1>
                 <p>Are you curios about what a penalti is, <br></br>when it happens and what the rules are? Read<br></br>about they are and when they happen<br></br> with adiclub.</p>
                </div>
              </div>
              <div className="FoorCards">
              <div className='CardOfImg'>
                  <img src={Fut2} alt="" />
                </div>
                <div className='CardOfText'>
                  <h1>What Is A Penalty Kick In Soccer</h1>
                 <p>Are you curios about what a penalti is, <br></br>when it happens and what the rules are? Read<br></br>about they are and when they happen<br></br> with adiclub.</p>
                </div>
              </div>
              <div className="FoorCards">
              <div className='CardOfImg'>
                  <img src={Fut3} alt="" />
                </div>
                <div className='CardOfText'>
                  <h1>What Is A Penalty Kick In Soccer</h1>
                 <p>Are you curios about what a penalti is, <br></br>when it happens and what the rules are? Read<br></br>about they are and when they happen<br></br> with adiclub.</p>
                </div>
              </div>
              <div className="FoorCards">
              <div className='CardOfImg'>
                  <img src={Fut4} alt="" />
                </div>
                <div className='CardOfText'>
                  <h1>What Is A Penalty Kick In Soccer</h1>
                 <p>Are you curios about what a penalti is, <br></br>when it happens and what the rules are? Read<br></br>about they are and when they happen<br></br> with adiclub.</p>
                </div>
              </div>
              </div>
            </div>
            <hr></hr>
            <div className="FooterEndOfHome">
              <h1>Popular Right Now</h1>
              <div className="FooterEndOfHomeDiv">
                <a href="">ultraboost</a><a href="">nmd</a><a href="">backpacks</a>
              </div>
              <div className="FooterEndOfHomeDiv">
                <a href="" >cleats</a>
                <a href="">stan smith</a>
                <a href="">samba</a>
              </div>
            </div>
            <div className="FooterFinallyEnd">
              <div className="FooterEndDivs">
                <h1>Stories, style, and<br></br> sporting goods at<br></br> adidas, since 1949</h1>
                <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring</p>
                <p>us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the</p>
                <p>latest technologies help us beat our personal best. adidas is home to the runner, the basketball player,</p>
                <p>the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The</p>
                <p>3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows,</p>
                <p>during the race, and at the finish line. We’re here to support creators. To improve their game. To live their </p>
                <p>lives. And to change the world.</p>
                <div className="FooterEndDivsFromDiv">
                  <p>adidas is about more than sportswear and workout clothes. We partner with the best in the industry to</p>
                  <p>co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs,</p>
                  <p>while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change.</p>
                  <p>And we think about the impact we have on our world.</p>
                </div>
              </div>
              <div className="FooterEndDivs2">
                <h1>Workout clothes, for any sport</h1>
                <div className="Karkas">
                <p>adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge</p>
                <p>conventions, break the rules, and define new ones. Then break them all over again. We design sports</p>
                <p>apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female</p>
                <p>athletes who play just as hard as the men. From low to high support. Maximum comfort. We design,</p>
                <p>innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool.</p>
                <p>We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD and Ozweego to</p>
                <p>our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on</p>
                <p>the streets and the stages around the world.</p>
                <div className="FooterEndDivsFromDiv">
                  <p>Through our collections we blur the borders between high fashion and high performance. Like our adidas</p>
                  <p>by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym.</p>
                  <p>Or some of our adidas Originals lifestyle pieces, that can be worn as sports apparel too. Our lives are</p>
                  <p>constantly changing. Becoming more and more versatile. And adidas designs with that in mind.
</p>
                </div>
                </div>
              </div>
            </div>

<Footer/>
        </div>
    );
}
    
export default Home;
