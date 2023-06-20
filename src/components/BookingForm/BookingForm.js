import React from 'react'

const BookingForm = () => {
    return (
        
        <div className='form'>
            <div class="header__inputs">
                <div class="header__input">
                    <input type="text" placeholder="Дата" class="header__input-item1" />
                </div>
                <div class="header__input">
                    <input type="text" placeholder="Время" class="header__input-item2" />
                </div>
                <div class="header__input">
                    <input type="text" placeholder="Количество людей" class="header__input-item3" />
                </div>
            </div>
            <div class="section-user__bron">
                <div class="header__input">
                    <input type="text" placeholder="Ресторан" class="header__input-item4"/>
                </div>
                <button class="header__button default-button">
                    Заказать
                </button>
            </div>
        </div>
            
    )
}

export default BookingForm