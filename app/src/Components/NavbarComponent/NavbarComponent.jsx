import React from 'react'
import './NavbarComponent.css'
import { assets } from '../../assets/assets'

const NavbarComponent = () => {
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
          <li>HOME</li>
          <li>REVIEWS</li>
          <li>ABOUT</li>
          <li>FAQS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      {/*-----------------------*/}
      <div className="navbar-right">
        <button>LOGIN</button>
      </div>
    </div>
    <div id='sidemenu' className="sidemenu">
      <div className="sidemenu-header">
        <h2>WELCOME</h2>
      </div>
      <div className="sidemenu-content">
        <ul>
          <li>HOME</li>
          <li>REVIEWS</li>
          <li>ABOUT</li>
          <li>FAQS</li>
          <li>CONTACT</li>
          <li>LOGIN</li>
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