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
          <img src={assets.whyChooseUs} alt="Image" />
        </div>
        <div className="why-class-right">
          {/********************************/}
          <div className="why-class-right-item">
            <div className="why-class-item-left">
              <img src={assets.tickIcon} alt="tick" />
            </div>
            <div className="why-class-item-right">
              <div className="why-class-item-right-top">
                <h3>Reduced Attachment Costs</h3>
              </div>
              <div className="why-class-item-right-bottom">
                <p>
                  The system aims to reduce costs.
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