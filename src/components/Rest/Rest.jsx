import React from 'react';
import '../Rest/Rest.css'
import Cruises from '../Cruises/Cruises.jsx'
const Rest = (props) => {
    const {image,title,btn,price}=props
    return (
        <div className='Rest'>
     <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <header className="HeaderRest">
        <nav className="HeaderRestIcon">
            <h1 className="HeaderRestIconH1">
                The Sill
            </h1>
        </nav>
        <nav className="HeaderRestNav">
            <li className="HeaderRestLi">Cruises</li>
            <li className="HeaderRestLi">Airlines</li>
            <li className="HeaderRestLi">Vouchers</li>
            <li className="HeaderRestLi">The cheapest</li>
            <li className="HeaderRestLi">The richest</li>
            <li className="HeaderRestLi">Where to buy?</li>
        </nav>
    </header>
    <div className="HeaderRestMain">
        <h1 className="HeaderRestMainH1">WELCOME</h1>
        <p className="HeaderRestMainP">Welcome to our studio. We are a passionated group of people,<br></br>
making high quality products designed to make your life easier.</p>
<h1 className="HeaderRestMainH1Text">
YOUR NEXT CRUISE HOLIDAY, DEPARTING FROM A<br></br> PORT NEAR YOU
</h1>
    </div>
    </div>
    </div>
 
    </div>
    );
}

export default Rest;
