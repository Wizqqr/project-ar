import React from 'react';
import Image1 from '../icons/LaucK-W0qKYrOWVHArW6yafkop73Ywbcb_RgoshtXsJxcIeLcMVseivGAr6BeyP4iaGUvMrpsmz-FH_EXTLRvl4S.webp'
import Image2 from '../icons/1.jpg'
import Image3 from '../icons/adidas-Ultra-Boost-4.0-DNA-2-e1645870069937.jpg'
import Byt1 from '../pictures/Byt1.jpg'
import Byt2 from '../pictures/Byt2.jpg'
import Byt3 from '../pictures/Byt3.jpg'
import Byt4 from '../pictures/Byt4.jpg'
import Byt5 from '../pictures/Byt5.jpg'
import Byt6 from '../pictures/Byt6.jpg'
import Byt7 from '../pictures/Byt7.jpg'
import Byt8 from '../pictures/Byt8.jpg'
import Byt9 from '../pictures/Byt9.jpg'
import Byt10 from '../pictures/Byt10.jpg'
import Byt11 from '../pictures/Byt11.jpg'
import Byter1 from '../pictures/Byter1.jpg'
import StartB1 from '../pictures/StartB1.jpg'
import StartB2 from '../pictures/StartB2.jpg'
import StartB3 from '../pictures/StartB3.jpg'
import Rak1 from '../pictures/Rak1.jpg'
import Rak2 from '../pictures/Rak2.jpg'
import Rak3 from '../pictures/Rak3.jpg'
import Rak4 from '../pictures/Rak4.jpg'
import Rak5 from '../pictures/Rak5.jpg'
import Rak6 from '../pictures/Rak6.jpg'
import Rak7 from '../pictures/Rak7.jpg'
import Rak8 from '../pictures/Rak8.jpg'
import ToMain from '../pictures/arrowstar.png'
import './Sport'
import '../Sport/Sport.css'
import {Link} from 'react-router-dom'

const Sport = () => {
  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })
    return (

        <div className="Sport">
          <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target="#exampleModalCenter"
  >
    Запустить модальное окно
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
           <Link to='/home'><button className="ToMain">
            <img src={ToMain} alt="" />
            <p className="ToMainClass">Главная</p>       
           </button>
           </Link>
            <h1 className="SportH1Start">NEW MEN'S ULTRABOOST 23 SHOES: ULTRABOOST LIGHT</h1>
            <p className="SportPStart">ULTRABOOST RUNNING & LIFESTYLE SHOES</p>
            <div className="SportImg"> <img src={StartB1} alt="" />
            <img src={StartB2} alt="" />
            <img src={StartB3} alt="" />
            <button className="ButtonMen">Men</button>
<button className="ButtonWomen">Women</button>
<button className="ButtonCHild">Child</button>
</div>
<div className="NavbarSport">
    <nav className="NavSport">
        <li className="SportLi">Adicolor Clothing</li>
        <li className="SportLi">Adiletter Sliddes</li>
        <li className="SportLi">Five Ten</li>
        <li className="SportLi">Gazello</li>
        <li className="SportLi">Originals</li>
        <li className="SportLi">Samba</li>
        <li className="SportLi">Samba</li>
        <li className="SportLi">Samba</li>
        <li className="SportLi">Samba</li>
        <li className="SportLi">Samba</li>
        <button className="SportBtn">FILTER & SORT</button>
    </nav>
</div>
<hr></hr>
<div className="Cards">
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={Byt1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button className="card-btn">Buy</button>
      <div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Какой-то текст в модальном..</p>
  </div>

</div>

    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt3}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt4}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={Byt5}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt6} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt7} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt8}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={Byt9}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt10} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt11} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Byt11}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className="card-top">
  <div className="cardoftop">
    <img src={Byter1} alt="" className="cardoftopimg" />
    
  </div>
  <div className="cardofdown">
    <h1 className="cardofdownh1">BEST IN CLASS
    </h1>
    <p className="cardofdownp">Praised for its cushioning, stability and style, the all-new adidas Ultraboost Light is <br></br>recognized by Runner’s World as one of 2023's best training shoes—emerging from <br></br>more than 100 models tested over several months for their annual Shoe Awards.<br></br> Experience epic energy with a 30% lighter BOOST midsole today.
</p>
  </div>
</div>
<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={Rak1}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak4}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={Rak5}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak6} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak7} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Rak8}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className="card-top">
  <div className="cardoftop">
    <img src={Byter1} alt="" className="cardoftopimg" />
    
  </div>
  <div className="cardofdown">
    <h1 className="cardofdownh1">BEST IN CLASS
    </h1>
    <p className="cardofdownp">Praised for its cushioning, stability and style, the all-new adidas Ultraboost Light is <br></br>recognized by Runner’s World as one of 2023's best training shoes—emerging from <br></br>more than 100 models tested over several months for their annual Shoe Awards.<br></br> Experience epic energy with a 30% lighter BOOST midsole today.
</p>
  </div>
</div>
<div class="card-deck">
<div class="card">
    <img class="card-img-top" src={Image1}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Image1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Image1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Image1}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
<hr></hr>
        <div className="Footer">
        <div className="FooterDiv1">  <h1 className="FooterNavNum1H1">OUR CLOTHING AND SHOE CATEGORIES</h1></div>
        <div className="FooterDiv2">
        <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
                <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
                <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
                <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
                <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
                <nav className="FooterNavN1">
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                <li className="FooterNavLi">Best Running Shoes</li>
                </nav>
             
        </div>
          <div className="FooterDiv3">
            <h1 className="FooterDiv3H1">MEN'S ULTRABOOST 23 IS HERE: ADIDAS MEN'S ULTRABOOST LIGHT</h1>
            <p className="FooterDiv3P">No matter how often, how far or how fast you run, the men's Ultraboost 23 running shoes help you experience epic energy in every stride. They're the next evolution of our<br></br> beloved adidas Ultraboost design, offering more energy and lightness than previous pairs. The magic all starts with the midsole. A new generation of adidas Boost cushioning,<br></br> adidas Boost Light is a 30% lighter material than before. Every time your feet hit the tarmac, it bursts with epic energy to help you keep your feet moving a step, a block or<br></br> many miles farther. Because heavy legs are the last thing you want when you're trying to defy gravity out on the pavement, this lightweight and extremely responsive material<br></br> helps you to run free, fast and energized.</p>
            <p className="FooterDiv3P">From upper to outsole, the men's Ultraboost 23 is designed with a comfortable, responsive ride in mind. An adidas Primeknit+ FORGED upper feels good from your first step<br></br>to your last, offering adaptive support that enhances the foot's natural movement. And because energy-return is the name of the game, an adidas Linear Energy Push system<br></br>enhances the responsive feel by giving you a little extra push in each step. It increases midfoot and forefoot stiffness to help guide the foot from heel strike to snappy toe off.<br></br>On the track, the road or the pavement, a Continental™ Rubber outsole offers extraordinary all-conditions grip for confident strides.</p>
            <p className="FooterDiv3P">Experience energy and lightness every time you lace into the men's UB 23. Whether you're just starting your running journey or you're training for your next finish line,<br></br> ultimate comfort and epic energy will help you chase your goals, one stride at a time. While you're at it, men's UB Light helps keep your impact light, because it has a lower <br></br>carbon footprint than the previous Ultraboost. It's time to say hello to high-energy running. Lace into men's Ultraboost Light running shoes and let your feet fly.

</p>
          </div>
            <div className="FooterDiv4">
                <h1 className="FooterDiv4H1">JOIN OUR ADICLUB & GET 15% OFF</h1>
               <Link to='/sign'><button className="buttonbek">
              <div class='button'>
    <div class="box">H</div>
    <div class="box">А</div>
    <div class="box">В</div>
    <div class="box">Е</div>
    <div class="box">Д</div>
    <div class="box">И</div>
    </div>
    </button>
    </Link> 
    </div>
            <div className="FooterDiv5">
                <nav className="FooterDiv5Nav">
                    <h1 className="FooterDiv5H1">PRODUCT</h1>
                    <li className="FooterDiv5Li">Shoes</li>
                    <li className="FooterDiv5Li">Clothing</li>
                    <li className="FooterDiv5Li">Accessories</li>
                    <li className="FooterDiv5Li">Gift Cards</li>
                    <li className="FooterDiv5Li">New Arrivals</li>
                    <li className="FooterDiv5Li">Best Sellers</li>
                    <li className="FooterDiv5Li">Release Dates</li>
                    <li className="FooterDiv5Li">Sale</li>
                </nav>
                <nav className="FooterDiv5Nav">
                <h1 className="FooterDiv5H1">SPORTS</h1>
                    <li className="FooterDiv5Li">Soccer</li>
                    <li className="FooterDiv5Li">Running</li>
                    <li className="FooterDiv5Li">Basketball</li>
                    <li className="FooterDiv5Li">Football</li>
                    <li className="FooterDiv5Li">Outdoor</li>
                    <li className="FooterDiv5Li">Golf</li>
                    <li className="FooterDiv5Li">Baseball</li>
                    <li className="FooterDiv5Li">Tennis</li>
                    <li className="FooterDiv5Li">Skateboarding</li>
                    <li className="FooterDiv5Li">Training</li>
                </nav>
                <nav className="FooterDiv5Nav">
                <h1 className="FooterDiv5H1">COLLECTIONS</h1>
                <li className="FooterDiv5Li">adicolor</li>
                    <li className="FooterDiv5Li">Ultraboost</li>
                    <li className="FooterDiv5Li">NMD</li>
                    <li className="FooterDiv5Li">Forum</li>
                    <li className="FooterDiv5Li">Supestart</li>
                    <li className="FooterDiv5Li">adilette</li>
                    <li className="FooterDiv5Li">Stan Smith</li>
                    <li className="FooterDiv5Li">adizero</li>
                    <li className="FooterDiv5Li">Tiro</li>
                    <li className="FooterDiv5Li">Cloudfoam Pure</li>
                </nav>
                <nav className="FooterDiv5Nav">
                <h1 className="FooterDiv5H1">SUPPORT</h1>
                <li className="FooterDiv5Li">Help</li>
                    <li className="FooterDiv5Li">Returns & Exchanges</li>
                    <li className="FooterDiv5Li">Shipping</li>
                    <li className="FooterDiv5Li">Order Tracker</li>
                    <li className="FooterDiv5Li">Store Locator</li>
                    <li className="FooterDiv5Li">Size Charts</li>
                    <li className="FooterDiv5Li">Gift Card Balance</li>
                    <li className="FooterDiv5Li">How to Clean Shoes</li>
                    <li className="FooterDiv5Li">Running Shoe Finder</li>
                    <li className="FooterDiv5Li">Bra Fit Guide</li>
                    <li className="FooterDiv5Li">Sports Bra Finder</li>
                    <li className="FooterDiv5Li">Breathing for Running</li>
                    <li className="FooterDiv5Li">Promotions</li>
                </nav>
                <nav className="FooterDiv5Nav">
                <h1 className="FooterDiv5H1">COMPONY INFO</h1>
                <li className="FooterDiv5Li">Shoes</li>
                    <li className="FooterDiv5Li">About Us</li>
                    <li className="FooterDiv5Li">Student Discount</li>
                    <li className="FooterDiv5Li">Military & Healthcare Discount</li>
                    <li className="FooterDiv5Li">adidas Stories</li>
                    <li className="FooterDiv5Li">adidas Apps</li>
                    <li className="FooterDiv5Li">Sustainability</li>
                    <li className="FooterDiv5Li">adiClub</li>
                    <li className="FooterDiv5Li">Affiliates</li>
                    <li className="FooterDiv5Li">Press</li>
                    <li className="FooterDiv5Li">Careers</li>
                    <li className="FooterDiv5Li">Californa Transparency in Supply Chains Act</li>
                    <li className="FooterDiv5Li">Responsible Diclosure</li>
                    <li className="FooterDiv5Li">Transparency in Coverage</li>
                    <li className="FooterDiv5Li">Country Selector</li>
                </nav>
                <nav className="FooterDiv5Nav">

                </nav>
            </div>
            </div>   
          
        </div>
    );
}
export default Sport;

