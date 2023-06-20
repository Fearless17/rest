import React from 'react'
import './additionalinfo.css'
import DescriptionItem from '../DescriptionItem/DescriptionItem'
import city from '../../images/city.svg'
import clock from '../../images/clock.svg'
import kitchen1 from '../../images/kitchen1.svg'
import card from '../../images/card.svg'
import site from '../../images/site.svg'
import phone from '../../images/phone.svg'

const dataListAddInfo = [
  {
    img: city,
    alt: 'city',
    title: 'Город',
    subtitle: 'Москва'
  },
  {
    img: clock,
    alt: 'clock',
    title: 'Время работы',
    subtitle: 'Вт 11:00-16:00'
  },
  {
    img: kitchen1,
    alt: 'kitchen',
    title: 'Кухни',
    subtitle: 'Русская'
  },
  {
    img: card,
    alt: 'card',
    title: 'Варианты оплаты',
    subtitle: 'MasterCard, Visa'
  },
  {
    img: site,
    alt: 'site',
    title: 'Веб-сайт',
    subtitle: 'https://moscow-restaraunt.com'
  },
  {
    img: phone,
    alt: 'phone',
    title: 'Телефон',
    subtitle: '+ 375 77 777 77 77'
  }
]
const AdditionalInfo = () => {
  const addInfoList = dataListAddInfo.map((el, index) => <DescriptionItem img={el.img} alt={el.alt} title={el.title} subtitle={el.subtitle} key={index} />)

  return (
    <div className='add-info'>
      <div className='add-info__book'>
        <span className='add-info__book-title'>Сделать заказ</span>
        <div className='add-info__book-inputs'>
          <div className="add-info__book-input">
            <input type="text" placeholder="Дата" className="default-input input-item" />
          </div>
          <div className="add-info__book-input">
            <input type="text" placeholder="Время" className="default-input input-item" />
          </div>
          <div className="add-info__book-input">
            <input type="text" placeholder="Количество людей" className="default-input input-item" />
          </div>
          <div className="add-info__book-input">
            <input type="text" placeholder="Ресторан" className="default-input input-item" />
          </div>
          <button className="header__button default-button">
            Заказать
          </button>
        </div>
      </div>
      <div className='add-info__description'>
        <span className='add-info__description-title'>Дополнительная информация</span>
        <div className='add-info__description-info'>
          {addInfoList}
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo