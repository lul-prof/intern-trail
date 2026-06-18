import React from 'react'
import './HeroComponent.css'
import { assets } from '../../assets/assets'

const HeroComponent = () => {
  return (
    <>
    <div id='home' className="hero">
      {/*--------------------*/}
      <div className="hero-left">
        <div className="hero-left-top">
          <h1>
            INDUSTRIAL ATTACHMENT MANAGEMENT SYSTEM
          </h1>
          <p>
            Welcome to InternTrail Kenya.
          </p>
          <p className='para-1'>
            Intern<span>Trail</span> focuses of streamlining the entire industrial attachment process by efficiently managing time while reducing costs.
          </p>
          <p className='para-2'>
            Go Green initiative is our main focus. We aim to eradicate the need for physical paperwork via our online submission system.
          </p>
          <p className='para-3'>
            Join us today and experience the amazing things other institutions are saying about Us.
          </p>
        </div>
        <div className="hero-left-bottom">
          <button>GET STARTED FOR FREE</button>
        </div>
      </div>
      {/*----------------------*/}
      <div className="hero-right">
        <img src={assets.heroImage} alt="image" />
      </div>
    </div>
    </>
  )
}

export default HeroComponent