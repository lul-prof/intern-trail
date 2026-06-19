import React from 'react'
import { assets } from '../../assets/assets'
import './WhyComponent.css'

const WhyComponent = () => {
  return (
    <>
    <div className="why">
      {/*--------------------*/}
      <div className="why-class">
        <div className="why-class-left">
          <div className="why-class-left-header">
            <h1>WHY CHOOSE US</h1>
          </div>
          <img src={assets.whyChooseUs} alt="Image" />
        </div>
        <div className="why-class-right">
          <div className="why-class-right-header">
            <h1>WHY CHOOSE US</h1>
          </div>
          {/********************************/}
          <div className="why-class-right-item">
            <div className="why-class-item-left">
              <img src={assets.tickIcon} alt="tick" />
            </div>
            <div className="why-class-item-right">
              <div className="why-class-item-right-top">
                <h3>Reduced Instutional supervision Charges</h3>
              </div>
              <div className="why-class-item-right-bottom">
                <p>
                  By automating the supervision process, the system eliminated the need for physical supervision.
                </p>
              </div>
            </div>
          </div>
          {/********************************/}
          <div className="why-class-right-item">
            <div className="why-class-item-left">
              <img src={assets.tickIcon} alt="tick" />
            </div>
            <div className="why-class-item-right">
              <div className="why-class-item-right-top">
                <h3>
                  Improved Time Management
                </h3>
              </div>
              <div className="why-class-item-right-bottom">
                <p>
                  Attachees can directly apply for posted attachment opportunities from thier portal thus reduced time wasted visiting different organizations.
                </p>
              </div>
            </div>
          </div>
          {/********************************/}
          <div className="why-class-right-item">
            <div className="why-class-item-left">
              <img src={assets.tickIcon} alt="tick" />
            </div>
            <div className="why-class-item-right">
              <div className="why-class-item-right-top">
                <h3>
                  Go Green Initiative
                </h3>
              </div>
              <div className="why-class-item-right-bottom">
                <p>
                  Our system reduces the need for physical paperwork by automating the entire process from application, acceptance to logbook submission
                </p>
              </div>
            </div>
          </div>
          {/********************************/}
          <div className="why-class-right-item">
            <div className="why-class-item-left">
              <img src={assets.tickIcon} alt="tick" />
            </div>
            <div className="why-class-item-right">
              <div className="why-class-item-right-top">
                <h3>
                  Reduced corruption
                </h3>
              </div>
              <div className="why-class-item-right-bottom">
                <p>
                  If adopted, our system aims to ensure fairness in the selection process for an attachment post since everything will be done from 1 platform.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      {/*--------------------------*/}
    </div>
    </>
  )
}

export default WhyComponent