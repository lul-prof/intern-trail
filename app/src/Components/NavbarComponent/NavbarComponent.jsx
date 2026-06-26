import React, { useState } from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'
import {toast} from 'react-hot-toast'

const NavbarComponent = () => {
  const navigateTo=(id)=>{
    document.getElementById(id).scrollIntoView({behavior:'smooth'})
  }

  const [home,setHome]=useState(true);
  const [reviews,setreviews]=useState(false);
  const [about,setAbout]=useState(false);
  const [faqs,setFaqs]=useState(false);
  const [contact,setContact]=useState(false);
  const [why,setWhy]=useState(false);

  return (
    <div className="nav">
    <div className="navbar">
      {/*-----------------------*/}
      <div className="navbar-left">
        <div className="navbar-left-menu">
          <img src={assets.menuIcon} alt="menu Icon" onClick={()=>(document.getElementById("sidemenu").style.display="flex")} />
        </div>
        <div className="navbar-left-logo">
          <h1>INTERNTRAIL</h1>
        </div>
      </div>
      {/*-----------------------*/}
      <div className="navbar-center">
        <ul>
          <li style={{color:home?"#3232ff":"#121212"}} onClick={()=>(navigateTo('home'),setHome(!home),setreviews(false),setAbout(false),setFaqs(false),setContact(false),setWhy(false))}>HOME</li>
          <li style={{color:reviews?"#3232ff":"#121212"}} onClick={()=>(navigateTo('reviews'),setreviews(!reviews),setHome(false),setAbout(false),setFaqs(false),setContact(false),setWhy(false))}>REVIEWS</li>
          <li style={{color:about?"#3232ff":"#121212"}} onClick={()=>(navigateTo('about'),setAbout(!about),setHome(false),setreviews(false),setFaqs(false),setContact(false),setWhy(false))}>ABOUT</li>
          <li style={{color:faqs?"#3232ff":"#121212"}} onClick={()=>(navigateTo('faq'),setFaqs(!faqs),setHome(false),setreviews(false),setAbout(false),setContact(false),setWhy(false))}>FAQS</li>
          <li style={{color:contact?"#3232ff":"#121212"}} onClick={()=>(navigateTo('cta'),setContact(!contact),setFaqs(false),setHome(false),setreviews(false),setAbout(false),setWhy(false))}>CONTACT</li>
        </ul>
      </div>
      {/*-----------------------*/}
      <div className="navbar-right">
        <button onClick={()=>(toast.success('Feature Under development!'))}>LOGIN</button>
      </div>
    </div>
    <div id='sidemenu' className="sidemenu" onMouseLeave={()=>(document.getElementById("sidemenu").style.display="none")}>
      <div className="sidemenu-header">
        <h2>WELCOME</h2>
      </div>
      <div className="sidemenu-content">
        <ul>
          <li style={{color:home?"#3232ff":""}} onClick={()=>(navigateTo('home'),document.getElementById("sidemenu").style.display="none",setHome(!home),setreviews(false),setAbout(false),setFaqs(false),setContact(false),setWhy(false))}>HOME</li>
          <li style={{color:reviews?"#3232ff":""}} onClick={()=>(navigateTo('reviews'),document.getElementById("sidemenu").style.display="none",setreviews(!reviews),setHome(false),setAbout(false),setFaqs(false),setContact(false),setWhy(false))}>REVIEWS</li>
          <li style={{color:about?"#3232ff":""}} onClick={()=>(navigateTo('about'),document.getElementById("sidemenu").style.display="none",setAbout(!about),setHome(false),setreviews(false),setFaqs(false),setContact(false),setWhy(false))}>ABOUT</li>
          <li style={{color:faqs?"#3232ff":""}} onClick={()=>(navigateTo('faq'),document.getElementById("sidemenu").style.display="none",setFaqs(!faqs),setHome(false),setreviews(false),setAbout(false),setContact(false),setWhy(false))}>FAQS</li>
          <li style={{color:about?"#3232ff":""}} onClick={()=>(navigateTo('about'),document.getElementById("sidemenu").style.display="none",setAbout(!about),setFaqs(false),setHome(false),setreviews(false),setAbout(false),setContact(false))}>WHY US</li>
          <li style={{color:contact?"#3232ff":""}} onClick={()=>(navigateTo('cta'),document.getElementById("sidemenu").style.display="none",setContact(!contact),setFaqs(false),setHome(false),setreviews(false),setAbout(false),setWhy(false))}>CONTACT</li>
          <li onClick={()=>(toast.success('Feature Under development!'),document.getElementById("sidemenu").style.display="none")}>LOGIN</li>
        </ul>
      </div>
      <div className="sidemenu-footer">
        <p onClick={()=>(document.getElementById("sidemenu").style.display="none")}>CLOSE</p>
      </div>
    </div>
    </div>
  )
}

export default NavbarComponent