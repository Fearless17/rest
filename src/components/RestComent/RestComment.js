import React from 'react'
import './restcomment.css'
import avatar from '../../images/avatar.png'
import star from '../../images/star.svg'
import star1 from '../../images/star1.svg'
const RestComment = (props) => {
    return (
        <div className='rest-comment'>
            <div className='rest-comment__user'>
                <div className="rest-comment__user-avatar">
                    <img src={avatar} alt="user" />
                </div>
                <span className="rest-comment__user-name">MyName</span>
            </div>
            <div className='rest-comment__user-score'>
                <div className='rest-comment__user-stars'>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star1} alt="star" />
                </div>
                <span className='rest-comment__user-text'>{props.text}</span>
            </div>
        </div>
    )
}

export default RestComment