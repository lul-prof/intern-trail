import React from 'react'
import {assets} from '../../assets/assets'
import './ReviewsComponent.css'

const ReviewsComponent = () => {
  return (
    <>
    <div id='reviews' className="reviews">
      {/*-----------------------*/}
      <div className="reviews-header">

      </div>
      {/*--------------------------*/}
      <div className="reviews-mid">
        <div className="reviews-mid-header">
          <h2>HOW INTERNTRAIL WORKS</h2>
        </div>
        <div className="reviews-mid-class">
          {/***********************************/}
          <div className="reviews-mid-class-item">
            <div className="reviews-mid-class-item-top">
              <img src={assets.applyIcon} alt="image" />
            </div>
            <div className="reviews-mid-class-item-text">
              <h3>Apply For Attachment</h3>
            </div>
          </div>
          {/***********************************/}
          <div className="reviews-mid-class-item">
            <div className="reviews-mid-class-item-top">
              <img src={assets.submitIcon} alt="image" />
            </div>
            <div className="reviews-mid-class-item-text">
              <h3>Submit Acceptance Documents</h3>
            </div>
          </div>
          {/***********************************/}
          <div className="reviews-mid-class-item">
            <div className="reviews-mid-class-item-top">
              <img src={assets.fillIcon} alt="image" />
            </div>
            <div className="reviews-mid-class-item-text">
              <h3>Fill Logbook</h3>
            </div>
          </div>
          {/***********************************/}
          <div className="reviews-mid-class-item">
            <div className="reviews-mid-class-item-top">
              <img src={assets.trackIcon} alt="image" />
            </div>
            <div className="reviews-mid-class-item-text">
              <h3>Track Attachee Progress</h3>
            </div>
          </div>
          {/***********************************/}
        </div>
      </div>
      {/*---------------------------*/}
      <div className="reviews-bottom">
        {/*********************************/}
        <div className="reviews-bottom-class">
          <div className="reviews-bottom-class-top">
            <img src={assets.searchIcon} alt="image" />
          </div>
          <div className="reviews-bottom-class-mid">
            <h3>SEARCH FOR ATTACHMENTS</h3>
            <p>Attachees can search for posted opportunities from their portal</p>
          </div>
          <div className="reviews-bottom-class-btn">
            <button>LOGIN</button>
          </div>
        </div>
        {/*********************************/}
        <div className="reviews-bottom-class">
          <div className="reviews-bottom-class-top">
            <img src={assets.superviseIcon} alt="image" />
          </div>
          <div className="reviews-bottom-class-mid">
            <h3>SUPERVISE ATTACHEES</h3>
            <p>Lecturers can easily monitor attachee progress onlne.</p>
          </div>
          <div className="reviews-bottom-class-btn">
            <button>LOGIN</button>
          </div>
        </div>
        {/*********************************/}
        <div className="reviews-bottom-class">
          <div className="reviews-bottom-class-top">
            <img src={assets.approveIcon} alt="image" />
          </div>
          <div className="reviews-bottom-class-mid">
            <h3>APPROVE APPLICATIONS</h3>
            <p>The Admin is responsile for approving companies & Schools</p>
          </div>
          <div className="reviews-bottom-class-btn">
            <button>LOGIN</button>
          </div>
        </div>
        {/**************************/}
      </div>
    </div>
    </>
  )
}

export default ReviewsComponent