import React from 'react'
import './restinfo.css'
import AnchorLink from '../AnchorLink/AnchorLink'
import InfoTitle from '../InfoTitle/InfoTitle'
import star from '../../images/star.svg'
import star1 from '../../images/star1.svg'
import comment from '../../images/comment.svg'
import kitchen from '../../images/kitchen.svg'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import MenuItem from '../MenuItem/MenuItem'
import RestComment from '../RestComent/RestComment'



const dataLinks1 = ['Обзор', 'Фото', 'Меню', 'Отзывы']
const dataLinks2 = ['Все', 'Еда', 'Напитки', 'Интерьер']
const RestInfo = (props) => {
    console.log(props)
    const linksList1 = dataLinks1.map((el, index) => <AnchorLink name={el} key={index} />)
    const linksList2 = dataLinks2.map((el, index) => <AnchorLink name={el} key={index} />)
    return (
        <div className='rest-main'>
            <div className='rest-main__links'>
                {linksList1}
            </div>
            <div className='rest-info__name'>
                <h1 className="rest-info__title">{props.name ? (props.name) : ('Ресторан Москва')}</h1>
            </div>
            <div className='rest-description'>
                <div className='rest-score'>
                    <div className='rest-score__stars'>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star1} alt="star" />
                        <span>4.0</span>
                    </div>
                    <div className="rest-score__comment">
                        <img src={comment} alt="comment" />
                        <span>3 отзыва</span>
                    </div>
                    <div className="rest-score__kitchen">
                        <img src={kitchen} alt="kitchen" />
                        <span>Русская</span>
                    </div>

                </div>
                <div className="rest-description__text">
                    <span>{props.description ? (props.description) : ('Попробуйте лучшую русскую кухню')}</span>
                </div>
            </div>
            <div className='rest-photos'>
                <InfoTitle name='10 Фотографий' />
                <div className='rest-main__links'>
                    {linksList2}
                </div>
                <div className='rest-photos__images'>
                    <div className="rest-photos__img">
                        <img src={img1} alt="img_res" />
                    </div>
                    <div className="rest-photos__img">
                        <img src={img2} alt="img_res" />
                    </div>
                    <div className="rest-photos__img">
                        <div className="block-img3">
                            <span>Еще +8</span>
                            <img src={img3} alt="img_res" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='rest-menu'>
                <InfoTitle name='Меню' />
                <div className='rest-menu__list'>
                    <div className='rest-menu__list-item'>
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                    </div>
                    <div className='rest-menu__list-item'>
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                        <MenuItem name='Еда 100 RUB' />
                    </div>
                </div>
            </div>
            <div className='rest-comments'>
                <InfoTitle name='Отзывы' />
                <div className='rest-comments__list'>
                    <RestComment text='Лучший ресторан' />
                    <RestComment text='Лучший ресторан' />
                    <RestComment text='Лучший ресторан' />
                </div>
            </div>
        </div>
    )
}

export default RestInfo