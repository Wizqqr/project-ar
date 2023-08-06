import {React, useRef,useState} from 'react';
import '../Cruises/Cruises.css'
import imager1 from '../pictures/guests.svg'
import imager2 from '../pictures/members.svg'
import imager3 from '../pictures/partners.svg'
import imager4 from '../pictures/travel_products.svg'
import imager5 from '../pictures/countries.svg'
import egypt from '../pictures/139859.jpg'
import turkey from '../pictures/turkish-flag-and-turkey-turkiye-700-151081580.jpg'
import Byt2 from '../pictures/Byt2.jpg'
import { Modal, Button } from "react-bootstrap";
import Carter from '../CarterForRest'
import cruis from '../pictures/cruise-ship.png'
const Cruises = () => {
    const [showModal, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [showModal2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [showModal3, setShow3] = useState(false);
   
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
  
    const [showModal4, setShow4] = useState(false);
   
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    return (  
        <div className="RestOfCruises">
        <div className='Cruises'>

        <header className="CruisesHead">
            <li>Cruises</li>
            <li>Turkey</li>
            <li>Egypt</li>
            <li>Europe</li>
            <li>Vietnam</li>
        </header>
        <div className="CruisesMain">
            <h1>МЫ ДЕЛАЕМ ВАШИ<br></br> МЕЧТЫ О<br></br>ПУТЕШЕСТВИЯХ</h1>
            <div className="CruisesGroupOfp">
                <p>ДОСТИЖИМЫМИ</p>
                <p>ДОСТУПНЫМИ</p>
                <p>ПРИБЫЛЬНЫМИ</p>
        
            </div>
            {/* <div className="imgforme">
            <img src={cruis} alt="" />
            </div> */}
        </div>
        <div className="CruisesOneButton">
        <button>Cмотреть видео</button>
        </div>
        </div>
        <div className="CruisesMainAbout">
            <h1 className='AboutIm'>О НАС</h1>
        <div className="AboutCruisesNum2">
                <p>Наши сотрудники знают все пути и несут полностью ответстевенности за вас. Наши отели наши корабли имеють лучших охранников</p>
                <p>Наши сотрудники разговаривають на Английский, Русском, Турецком, Кыргызском и Арабским языком. Вы можете взять нашего сотрудники</p>
                <p>как гида, охранника. С нами вы сможете увидеть такие страны как Турция, Египет, Кыргызстан, Казахстан, ОАЭ, Саудовская Аравия,</p>
                <p>Европеские страны, Вьетнам и т.д. Мы всегда встретим вас с улыбкой и хорошим настроением с любовью Ronex</p>
            </div>
            <div className="AboutCruises">
            <h1>У нас вы можете найти такие отдыхы как:</h1>
            <p>1.Круизы</p>
            <p>2.Отдыхы в Турции, Египте и Вьетнаме</p>
            <p>3.Отдыхы в горах</p>
            </div>
        </div>
        <h1 className='Archemen'><span>Turkey</span> Vs <span>Egypt</span></h1>
        <div className="CruisesVs">
<div class="gallery">
  <img src={turkey} alt="Archer from Fate/Stay"/>
  <img src={egypt} alt="Saber from Fate/Stay"/>
</div>

</div>
<div className="CruisesAboutVs">
    <div className="Turkey">
    <div className="CruisesAboutVsDiv">
    {/* <img src={turkey} alt="" /> */}
    </div>
    <div className="CruisesAboutVsDiv">
        <h1>TURKEY</h1>
        <p>7-days- 1500$</p>
        <p>14-days- 2400$</p>
        <p>21-days- 4000$</p>
        <p>1-month- 7000$</p>
    </div>
    </div>
    <div className="Egypt">
    <div className="CruisesAboutVsDiv">
    {/* <img src={egypt} alt="" /> */}
    </div>
    <div className="CruisesAboutVsDiv">
    <h1>TURKEY</h1>
        <p>7-days- 1500$</p>
        <p>14-days- 2400$</p>
        <p>21-days- 4000$</p>
        <p>1-month- 7000$</p>
    </div>
    </div>
</div>
<hr className='Ilkay'></hr>
<div className="Texteringer">
<h1 className='All text'>Лучшие отели  </h1>

<h1 className='EgyptText'>Египта</h1>
<h1 className='And'>И </h1>
<h1 className='TurkeyText'>Турции</h1>
</div>
<div className="NewDivFromCruises">
    <div className='Turkish'>
    </div>
    <div className="Egyptian">
        <Carter/>
    </div>
</div>
        <div className='CruisesFooter'>
            <div className='CruisesFooterIsStarting'>
                <div className="CruisesFooterDivs">
                    <img src={imager2} alt="" />
                    <h1>1 371 320</h1>
                    <p>Совместно<br></br> зарегистрированные<br></br> Члены Клуба

</p>
                </div>
                <div className="CruisesFooterDivs">
                <img src={imager3} alt="" />
                <h1>294 061

</h1>
                <p>Общее число<br></br> Партнёров</p>


                </div>
                <div className="CruisesFooterDivs">
                <img src={imager5} alt="" />
                <h1>204</h1>
                    <p>Число стран - и это<br></br> не предел

</p>
                </div>
                <div className="CruisesFooterDivs">
                <img src={imager4} alt="" />
                <h1>192 204

</h1>
                <p>Круизные и<br></br> гостиничные <br></br>предложения



</p>
                </div>
                <div className="CruisesFooterDivs">
                <img src={imager1} alt="" />
                <h1>315 188

</h1>
                <p>Всего гостей в<br></br> забронированных<br></br> круизах/отелях



</p>
                </div>
            </div>
        </div>
        <div className="FooterEndInMyLife">
                <h1>Есть вопросы?</h1>
                <h1>Все ответы вы найдете в PDF-документе</h1>
                <div className="buttonsFooter">
                    <div className="buttonsFooterDivs">
                        <button>Презентация Команды</button><button>Обзор Компенсационного Плана</button><button>Подтверждение надежности</button><button>Соглашение Независимого Партнера</button>
                    </div>
                    <div className="buttonsFooterDivs">
                    <button>Презентация Команды</button><button>Обзор Компенсационного Плана</button><button>Подтверждение надежности</button><button>Соглашение Независимого Партнера</button>
                    </div>
                </div>
                </div>
</div>
    );
}

export default Cruises;
