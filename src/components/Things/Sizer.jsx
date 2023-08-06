import React from 'react';
import '../Things/Things.css'

const Sizer = () => {
    return (
        <div>
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
        </div>
    );
}

export default Sizer;
