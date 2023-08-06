  import React, {Component} from 'react';
  import '../Things/Things.css'
  import Carousel from 'react-bootstrap/Carousel';
import image1 from '../pictures/arcjhe,ent.jpg';
import image2 from '../pictures/anim1.jpg'
import Sizer from '../Things/Sizer'
import karkas1 from '../pictures/karkas-1.jpg'
import karkas2 from '../pictures/karkas-2.jpg'
import karkas3 from '../pictures/karkas-3.jpg'
import karkas4 from '../pictures/karkas-4.jpg'

const Things = () => {
    function viewDiv(){
        const btnSt=document.getElementsByClassName(`offer__carousel`)[0].style;
        if(btnSt.display==='none'){
            btnSt.display='flex'
        }else{
            btnSt.display='none'
        }
      };
    return (
      
        <div className='Things'>
            <header className="ThingsHead">
                <nav className="ThingsHeadNav">
                    <div>
                    <h1>Ronex</h1>
                    </div>
                    <div className='Lishki'>
                    <li className='Likerki'>О нас</li>
                    <li className='Likerki'>Преимущество</li>
                    <li className='Likerki'>Наши Работы</li>
                    <li className='Likerki'>Отзывы</li>
                    <li className='Likerki'>Контакты</li>
                    </div>
                </nav>
            </header>
            <div className="ThingsDiv1">
                <div className="ThingsTex">
                <h1>ПРОДАЖА ДАЧНЫХ ДОМОВ И <br></br>КОТТЕДЖЕЙ</h1>
                <p>На участок поставляются готовые модули, производится их монтаж в короткие<br></br> сроки. Мы гарантируем выполнение всех взятых на себя обязательств и <br></br>доступные цены.</p>
                <button className="ThingsDiv1Btn">Оформить заказ</button>
                </div>
            </div>
            <div className="ThingsDiv2">
                <div className="ThingsDiv2Start">
                <h1>Главное для нас, работать так, что-бы наши заказчики обращались к нам еще и рекомендовали своим <br></br>знакомым. На все наши строения распространяется гарантия.</h1>
                </div>
                <div className="ThingsDiv2End">
                    <div><img src={image1} alt="" /></div>
                    <div className='Erder'>
                        <div className="ErdersDiv">
                            <div className="ErdersText">
                            <h1>Высточные товары</h1>
                            <p>Увидеть, ощутить себя внутри и обсудить необходимые<br></br> размеры с нашими специалистами.</p>
                            </div>
                        </div>
                        <div className="ErdersDiv">
                        <div className="ErdersText">
                            <h1>Бесплатная консультация</h1>
                            <p>подробный расчёт стоимости «без сюрпризов». при<br></br> необходимости выезжаем на участок.</p>
                            </div>
                        </div>
                        <div className="ErdersDiv">
                        <div className="ErdersText">
                                <h1>Составление плана готового интерьера</h1>
                                <p>Наши специалисты ответят на все Ваши вопросы, подскажут<br></br> по сезону, размеру, с удовольствием подберут всё <br></br>необходимое для Вашего удобства, комфорта и<br></br> индивидуальности!!!</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ThingsDiv3">
              <div className="ThingsForH1">
                <h1>Наши работы</h1>
                </div>
                <div className="ThingsDiv3Btn">
                    <a onClick={viewDiv} className="tab">Каркасные Дома</a> 
                    <a onClick={viewDiv}  className="tab">Бани</a>
                    <a onClick={viewDiv}  className="tab">Беседки</a>
                    <a onClick={viewDiv}  className="tab">Хоз.постройки</a>
                    <a onClick={viewDiv} className="tab">Бытовки</a>
                </div>
                <div className="ThingsDiv3Divs">
                <div className="offer__carousel">
        <div className="offer__item item-offer">
          <div className="item-offer__box">
            <img className="item-offer__img" src={karkas1} alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балконом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <p className="item-offer__text item-offer__text_price"><strong>$12 300</strong>
              </p>
              <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
            </div>
          </div>
        </div>
        <div className="offer__item item-offer">
          <div className="item-offer__box">
            <img className="item-offer__img" src={karkas2} alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балконом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <div className="item-offer__wrap-bot">
                <p className="item-offer__text item-offer__text_price"><strong>$13 300</strong>
                </p>
                <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
              </div>
            </div>
          </div>
        </div>
        <div className="offer__item item-offer">
          <div className="item-offer__box">
            <img className="item-offer__img" src={karkas3} alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балконом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <div className="item-offer__wrap-bot">
                <p className="item-offer__text item-offer__text_price"><strong>$14 300</strong>
                </p>
                <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
              </div>
            </div>
          </div>
        </div>
        <div className="offer__item item-offer">
          <div className="item-offer__box">
            <img className="item-offer__img" src={karkas4} alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балкоом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <div className="item-offer__wrap-bot">
                <p className="item-offer__text item-offer__text_price"><strong>$15 300</strong>
                </p>
                <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
      <div className="CarouselDom">
   
      {/* <Carousel fade>
      <Carousel.Item>
        <img
          className="blockerr"
          src={image1}
          alt="First slide"
        />
               <div className="item-offer__box">
            <img className="item-offer__img" src="images/offer__carousel/karkas-1.jpg" alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балконом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <p className="item-offer__text item-offer__text_price"><strong>$12 300</strong>
              </p>
              <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
            </div>
          </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="blockerr"
          src={image1}
          alt="Second slide"
        />
       <div className="item-offer__box">
            <img className="item-offer__img" src="images/offer__carousel/karkas-1.jpg" alt="" />
            <div className="item-offer__descr">
              <h5 className="item-offer__title">Каркасный дом с балконом LK-2</h5>
              <p className="item-offer__text item-offer__text_size">
                <span>Размер:</span><span>4х6
                  м</span>
              </p>
              <p className="item-offer__text item-offer__text_area">
                <span>Площадь:</span><span>34.8
                  м2</span>
              </p>
              <p className="item-offer__text item-offer__text_rooms"><span>Количество
                  комнат:</span><span>3 шт</span>
              </p>
              <p className="item-offer__text item-offer__text_price"><strong>$12 300</strong>
              </p>
              <a href="#popup" className="item-offer__btn popup">Оформить заказать</a>
            </div>
          </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="blockerr"
          src={image1}
          alt={Sizer}
        />
      
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
                {/* <div class="block_with_text2">Lorem ipffsum dolor sit amet</div>
                <div class="block_with_text3">Lorem ipsum dolor sit amet</div>
                <div class="block_with_text4">Lorem ipsum dolor sit amet</div>
                <div class="block_with_text5">Lorem ipsum dolor sit amet</div> */}
                </div>
            </div>
</div>
    ); 
}


export default Things;
