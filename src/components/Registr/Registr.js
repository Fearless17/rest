import React from 'react'
import'./registr.css';
import logo from '../../images/logo.svg'
const Registr = () => {
    return (
        <div className="reg">
            <div className="container">
                <div className="reg__block">
                    <img src={logo} className="logo-reg" alt="logo" />
                    <div className="header__input">
                        <input type="text" placeholder="Имя" className="header__input-item1" />
                    </div>
                    <div className="header__input">
                        <input type="text" placeholder="Email" className="header__input-item1" />
                    </div>
                    <div className="header__input">
                        <input type="text" placeholder="Пароль" className="header__input-item1" />
                    </div>
                    <button className="reg__button default-button">
                        Регистрация
                    </button>
                    <a href="#" className="section__city">Забыли пароль?</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Registr;