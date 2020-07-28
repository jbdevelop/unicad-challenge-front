
import React from 'react'

import "./Logo.css"

import logo from '../assets/unicad_challenge.png'

export default function Menu() {

  return(
    <> 
      <div className="topbar__logo">          
        <img src={logo} alt="" />                   
      </div>    
    </>
  )
}