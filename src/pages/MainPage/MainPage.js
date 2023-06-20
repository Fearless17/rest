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
            <div class="wrapper_header">
                <div class="header__content">
                    <div class="header__content-title">
                        <h1>Найти столик</h1>
                    </div>
                    <BookingForm />
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

                                <Link to="/restaraunt" class="section__city">Москва</Link>
                                <Link href="./restaraunt" class="section__city">Москва</Link>
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                            </div>
                            <div class="sections__cities-item-2">
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                            </div>
                            <div class="sections__cities-item-3">
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                                <Link to="/restaraunt" class="section__city">Москва</Link>
                                <Link to="/restaraunt" class="section__city">Москва</Link>
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
                            {isFormOpen ? (<button class="info__button default-button" onClick={handleCloseForm}>Закрыть форму</button>) 
                            : (<button class="info__button default-button" onClick={() => setIsFormOpen(true)}>Добавить ресторан</button>)}
                            
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