import React from 'react'
import './descriptionitem.css'
const DescriptionItem = (props) => {
  return (
    <div className='add-info__description-item'>
        <div className='add-info__description-item_img'>
            <img src={props.img} alt={props.alt}/>
        </div>
        <div className='add-info__description-item_titles'>
            <span className='add-info__description-item_title'>{props.title}</span>
            <span className='add-info__description-item_subtitle'>{props.subtitle}</span>
        </div>
    </div>
  )
}

export default DescriptionItem