import React from 'react'
import './anchorlink.css'
const AnchorLink = (props) => {
  return (
    <a href={props.href} className='anchor_link'>{props.name}</a>
  )
}

export default AnchorLink