import {React , useState} from 'react'
import './mainpage.css'
import AnchorLink from '../../components/AnchorLink/AnchorLink'
import BookingForm from '../../components/BookingForm/BookingForm'
import Form from '../../components/Form/Form'
import { Link } from 'react-router-dom';



const MainPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);


    const handleCloseForm = () => {
        setIsFormOpen(false);
      };


    return (
        <>
            <div className="wrapper_header">
                <div className="header__content">
                    <div className="header__content-title">
                        <h1>Найти столик</h1>
                    </div>
                    <BookingForm />
                </div>
            </div>

            <section className="section">
                <div className="container__mainpage">
                    <div className="section__content">
                        <div className="section__buttons">
                            <AnchorLink name='Города' />
                            <AnchorLink name='Регионы' />
                            <AnchorLink name='Поблизости' />
                        </div>
                        <div className="section__cities">
                            <div className="sections__cities-item-1">

                                <Link to="/restaraunt" className="section__city">Москва</Link>
                                <Link to="./restaraunt" className="section__city">Москва</Link>
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                            </div>
                            <div class="sections__cities-item-2">
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                            </div>
                            <div className="sections__cities-item-3">
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                                <Link to="/restaraunt" className="section__city">Москва</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info">
                <div className="container_info">
                    <div className="info__content">
                        <div className="info__cont">
                            <h2 className="info__title">Присоединяйтесь к рестораном, которые уже есть в сервисе<br />
                                и управляйте бронированием с помощью Open
                            </h2>
                            {isFormOpen ? (<button className="info__button default-button" onClick={handleCloseForm}>Закрыть форму</button>) 
                            : (<button className="info__button default-button" onClick={() => setIsFormOpen(true)}>Добавить ресторан</button>)}
                            
                        </div>
                    </div>
                </div>
            </section>

            <div>
                
                {isFormOpen ? (
                    <Form onClose={handleCloseForm} />
                ) : (
                    ''
                )}
            </div>


        </>
    )
}

export default MainPage