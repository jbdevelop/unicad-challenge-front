import React from 'react'

import "./Developer.css"

export default function Topbar() {

  return(
    <>      
      <div className="topbar__dev">
      <span className="topbar__dev-title">Criado por jbernardo</span>
      <div className="topbar__dev-socials">
        <a href="https://github.com/jbdevelop"><i className="fa fa-github"></i></a>          
        <a href="https://www.linkedin.com/in/julio-bernardo/"><i className="fa fa-linkedin"></i></a>
      </div>
      </div>
    </>
  )
}

