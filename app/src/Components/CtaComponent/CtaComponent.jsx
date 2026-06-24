import React from 'react'
import './CtaComponent.css'
import toast from 'react-hot-toast'

const CtaComponent = () => {
  return (
    <>
    <div id='cta' className="cta">
      <div className="cta-top">
        <h2>HAVE ANY QUESTIONS?</h2>
      </div>
      <div className="cta-mid">
        <p>Feel free to reach us for assistance.</p>
      </div>
      <div className="cta-bottom">
        <button onClick={()=>(toast.success('Feature Under development!'))}>Contact Us</button>
      </div>
    </div>
    </>
  )
}

export default CtaComponent