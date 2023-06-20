import React from 'react'
import './footer.css';
import vk from '../../images/vk.svg'
import inst from '../../images/inst.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <a href="tel:+375777777777" className="footer__tel">+ 375 77 777 77 77</a>
        <a href="mailto:open@gmail.com">Open@gmail.com"</a>
        <div className="footer__icons">
          <a href="#" className="footer__icon"><img src={vk} alt="vk"/></a>
          <a href="#" className="footer__icon"><img src={inst} alt="inst"/></a>
          <a href="#" className="footer__icon"><img src={facebook} alt="facebook"/></a>
          <a href="#" className="footer__icon"><img src={twitter} alt="twitter"/></a>
        </div>
        <div className="footer__copyright">
          Copyright © 2023 Open
        </div>
      </div>
    </div>
  )
}

export default Footer