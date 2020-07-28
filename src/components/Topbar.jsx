import React from 'react'

import Menu from './Menu'
import Developer from './Developer'
import Logo from './Logo'

import "./Topbar.css"

export default function Topbar() {

  return(
    <>      
      <div className="topbar">
        <Logo />
        <Menu />
        <Developer />        
      </div>
    </>
  )
}