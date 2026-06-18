import React from 'react'
import './ReviewsComponent.css'
import {assets, reviews} from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <>
    <div id='reviews' className="reviews">
      <div className="reviews-header">
        <h1>REVIEWS <span>& TESTIMONIALS</span></h1>
      </div>
      <div className="reviews-class">
        {
          reviews.map((review)=>(
            <div key={review._id} className="review">
              <div className="review-top">
                <img src={assets.starIcon} alt="star" />
                <img src={assets.starIcon} alt="star" />
                <img src={assets.starIcon} alt="star" />
                <img src={assets.starIcon} alt="star" />
                <img src={assets.starIcon} alt="star" />
              </div>
              <div className="review-mid">
                <p>{review.description}</p>
              </div>
              <div className="review-bottom">
                <div className="review-bottom-left">
                  <img src={review.image} alt="avatar" />
                </div>
                <div className="review-bottom-right">
                  <div className="review-bottom-right-top">
                    <p>{review.name}</p>
                  </div>
                  <div className="review-bottom-right-bottom">
                    <p style={{fontWeight:"600"}}>{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default ReviewsComponent