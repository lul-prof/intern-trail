import React from 'react'
import './AboutComponent.css'
import {assets} from '../../assets/assets'

const AboutComponent = () => {
  return (
    <>
    <div className="about">
      {/*----------------------*/}
      <div className="about-left">
        <div className="about-left-header">
          <h1>ABOUT US</h1>
        </div>
        <div className="about-left-class">
          <p>
            <span>INTERNTRAIL</span> is a sophisticated Industrial Attachment Management System. For years now, industrial attachment has been costly, time consuming and Stressing. Attachees have to struggle to find companies offering opportunities, print and fill out logbooks, and raise transport fare to and from work places.
          </p>
          <p className='para-2'>
            INTERN<span>TRAIL</span> brings together all actors; Lecturers, Companies, Attachees and Supervisors in 1 platform to ensure a streamlined, time-saving industrial attachment process
          </p>
          <p>
            The system has been tested and implemented and the feedback from the actors is positive. Try out the system and feel free to write a honest review.
          </p>
        </div>
      </div>
      {/*-----------------------*/}
      <div className="about-right">
        <div className="about-right-header">
          <h1>ABOUT US</h1>
        </div>
        <div className="about-right-img">
          <img src={assets.aboutUs1} alt="image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutComponent