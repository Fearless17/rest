import React from 'react'
import './bookingform.css'
const BookingForm = () => {
    return (
        
        <div className='form'>
            <div className="header__inputs">
                <div className="header__input">
                    <input type="text" placeholder="Дата" className='header__input-item1'/>
                </div>
                <div className="header__input">
                    <input type="text" placeholder="Время" className='header__input-item2'/>
                </div>
                <div className="header__input">
                    <input type="text" placeholder="Количество людей" className='header__input-item3' />
                </div>
            </div>
            <div className="section-user__bron">
                <div className="header__input ">
                    <input type="text" placeholder="Ресторан" className='header__input-item4'/>
                </div>
                <button className="header__button default-button">
                    Заказать
                </button>
            </div>
        </div>
            
    )
}

export default BookingForm