import React from 'react'
import { assets } from '../../assets/assets'
import './WhyComponent.css'

const WhyComponent = () => {
  return (
    <>
    <div id='about' className="why">
      {/*----------------------*/}
      <div className="why-top"></div>
      {/*----------------------*/}
      <div className="why-mid">

        <div className="why-mid-left">
          <img src={assets.aboutUs1} fetchPriority='high' referrerPolicy="no-referrer" alt="image" />
        </div>
      
      <div className="why-mid-right">
        <div className="why-mid-right-header">
          <h2>WHY CHOOSE US</h2>
        </div>
        <div className="why-mid-right-class">
          {/***************************************/}
          <div className="why-mid-right-class-item">
            <div className="why-mid-right-class-item-left">
              <p>01</p>
            </div>
            <div className="why-mid-right-class-item-right">
              <h3>Go Green Initiative</h3>
              <p>InternTrail reduces the need for physical paperwork by automating the entire process.</p>
            </div>
          </div>
          {/***************************************/}
          <div className="why-mid-right-class-item">
            <div className="why-mid-right-class-item-left">
              <p>02</p>
            </div>
            <div className="why-mid-right-class-item-right">
              <h3>Time Management</h3>
              <p>Attachees can directly apply for posted attachment opportunities from thier portal.</p>
            </div>
          </div>
          {/***************************************/}
          <div className="why-mid-right-class-item">
            <div className="why-mid-right-class-item-left">
              <p>03</p>
            </div>
            <div className="why-mid-right-class-item-right">
              <h3>Reduced Attachment Charges</h3>
              <p>Supervision process is fully automated and no printing charges are required.</p>
            </div>
          </div>
          {/***************************************/}
          <div className="why-mid-right-class-item">
            <div className="why-mid-right-class-item-left">
              <p>04</p>
            </div>
            <div className="why-mid-right-class-item-right">
              <h3>Corruption reduction</h3>
              <p>The system aims to ensure fairness in the selection process for an attachment post.</p>
            </div>
          </div>
          {/***************************************/}
          <div className="why-mid-right-class-item">
            <div className="why-mid-right-class-item-left">
              <p>05</p>
            </div>
            <div className="why-mid-right-class-item-right">
              <h3>Progress Tracking & Analytics</h3>
              <p>Attachees can track progress & get insights from their portal</p>
            </div>
          </div>
          {/***************************************/}
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default WhyComponent