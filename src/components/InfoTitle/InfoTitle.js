import React from 'react'
import './infotitle.css'
const InfoTitle = (props) => {
    return (
        <div className='info-title'>
            <h2>{props.name}</h2>
        </div>
    )
}

export default InfoTitle