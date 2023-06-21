import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
import DescriptionItem from '../DescriptionItem/DescriptionItem';



const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
       navigate(`/restaraunt/${name}/${description}/${city}`)
    };

    return (
        <div className='rest-form'>
            <h2 className='rest-form__title'>Введите информацию о вашем ресторане</h2>
            <form onSubmit={handleSubmit} className="form-items" >
                
                    <div className="rest-form__input">
                        <input type="text" placeholder="Название ресторана" className='default-input' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Описание ресторана" className='default-input' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="rest-form__input">
                        <input type="text" placeholder="Город" className='default-input' value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    {/* <div className="rest-form__input">
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
                    </div> */}
                <button type="submit" className='default-button'>Добавить</button>

            </form>
        </div>
    );
}

export default Form