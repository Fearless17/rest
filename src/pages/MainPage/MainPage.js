import React from 'react'
import './mainpage.css'
import AnchorLink from '../../components/AnchorLink/AnchorLink'
import BookingForm from '../../components/BookingForm/BookingForm'

const MainPage = () => {
    return (
        <

            >
            <div class="wrapper_header">
                <div class="header__content">
                    <div class="header__content-title">
                        <h1>Найти столик</h1>
                    </div>

                    <div class="header__table">
                        <BookingForm />


                        <div class="header__inputs">
                      <div class="header__input">
                          <input type="text" placeholder="Дата" class="header__input-item1"/>
                      </div>    
                      <div class="header__input">
                          <input type="text" placeholder="Время" class="header__input-item2"/>
                      </div>  
                      <div class="header__input">
                          <input type="text" placeholder="Количество людей" class="header__input-item3"/>
                      </div>
                  </div>    
                  
                  <div class="header__input">
                      <input type="text" placeholder="Ресторан" class="header__input-item4"/>
                  </div>  
                  <button class="header__button default-button">
                    Заказать
                  </button> 
                  
                    </div>

                </div>
            </div>

            <section class="section">
                <div class="container__mainpage">
                    <div class="section__content">
                        <div class="section__buttons">
                            <AnchorLink name='Города' />
                            <AnchorLink name='Регионы' />
                            <AnchorLink name='Поблизости' />
                        </div>
                        <div class="section__cities">
                            <div class="sections__cities-item-1">
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                            </div>
                            <div class="sections__cities-item-2">
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                            </div>
                            <div class="sections__cities-item-3">
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                                <a href="./restaraunt" class="section__city">Москва</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="info">
                <div class="container_info">
                    <div className="info__content">
                        <div class="info__cont">
                            <h2 class="info__title">Присоединяйтесь к рестораном, которые уже есть в сервисе<br />
                                и управляйте бронированием с помощью Open
                            </h2>
                            <button class="info__button default-button">Узнать больше</button>
                        </div>
                    </div>
                </div>
            </section>
        </>



    )
}

export default MainPage