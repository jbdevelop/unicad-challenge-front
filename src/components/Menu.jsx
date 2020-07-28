import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Menu.css"

export default function Menu() {

  return(
    <> 
      <nav className="menu">
        <ul>          
          <NavLink className="menu__link" exact to="/" activeClassName="active">
            
          </NavLink>          

          <NavLink className="menu__link" to="/create">
            <li><i className="fa fa-plus-circle"></i>Cadastrar Entrega</li>
          </NavLink>

          <NavLink className="menu__link" to="/list">
            <li><i className="fa fa-list"></i>Listar Entregas</li>          
          </NavLink>                    
        </ul>        
      </nav>     
    </>
  )
}


        