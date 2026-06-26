import { useState } from 'react'
import {assets, faqs} from '../../assets/assets'
import './FaqsComponent.css'

const FaqsComponent = () => {
  const [open,setOpen]=useState(false);
  const [id,setId]=useState("");
  return (
    <>
    <div className="faqs">
      {/*----------------------*/}
      <div className="faqs-header">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>People often struggle to understand the Attachment process</p>
      </div>
      {/*----------------------*/}
      <div className="faqs-class">
        {
          faqs.map((faq)=>(
            <div key={faq._id} id="faq" className="faq">
              <div onClick={()=>(setId(faq._id),setOpen(!open))} className="faq-top">
                <div className="faq-top-left">
                  <h3>{faq.faq}</h3>
                </div>
                <div className="faq-top-right">
                  <img src={open && id===faq._id?assets.arrowUpIcon:assets.arrowDownIcon} alt="open" onClick={()=>(setId(faq._id),setOpen(!open))}/>
                </div>
              </div>
              {
                open && id===faq._id
                ?
                <div className="faq-bottom">
                  <p>{faq.ans}</p>
                </div>
              :
              <></>
              }
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default FaqsComponent