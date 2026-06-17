import React from 'react'
import './FooterComponent.css'
import {Link} from 'react-router-dom'
import {assets} from '../../assets/assets'

const FooterComponent = () => {
  const year=new Date().getFullYear();
  return (
    <>
    <div className="footer">
        <div className="footer-top">
          <h2>INTERNTRAIL</h2>
        </div>
        <div className="footer-mid">
          <h6>&copy;{year} <Link to={'https://portofolio-two-rosy-31.vercel.app/'} target='_blank'>CAPIOF.</Link> ALL RIGHTS RESERVED</h6>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-class">
            <img src={assets.instaIcon} alt="image" />
          </div>
          <div className="footer-bottom-class">
            <img src={assets.facebookIcon} alt="image" />
          </div>
          <div className="footer-bottom-class">
            <img src={assets.whatsappIcon} alt="image" />
          </div>
          <div className="footer-bottom-class">
            <img src={assets.emailIcon} alt="image" />
          </div>
          <div className="footer-bottom-class">
            <img src={assets.twitterIcon} alt="image" />
          </div>
        </div>
    </div>
    </>
  )
}

export default FooterComponent