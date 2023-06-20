import React from 'react'
import './form.css'



const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка отправки формы
    };

    return (
        <div className='rest-form'>
            <h2 className='rest-form__title'>Введите информацию о вашем ресторане</h2>
            <form onSubmit={handleSubmit} className="form-items" >
                
                    <div className="rest-form__input">
                        <input type="text" placeholder="Название ресторана" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Описание ресторана" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Город" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Время работы" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Кухни" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Веб-сайт" className='default-input' />
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Телефон" className='default-input' />
                    </div>
                <button type="submit" className='default-button'>Добавить</button>

            </form>
        </div>
    );
}

export default Form