
import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import "./Register.css"

export default function Menu() {
  const [values, setValues] = useState({})
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()    

    await axios.post('https://jbdev.com.br/create', values)

    history.push('/list')
  }

  function handleChange(event) {
    const { name, value } = event.target    

    setValues({...values, [name]: value})
  }

  return(
    <> 
      <div className="register">
        <div className="register__title">
          Cadastrar Entrega
        </div>
        
        <div className="register__form">          
          <form onSubmit={handleSubmit}>
            <div className="register__input">            
              <input type="text" name="client" placeholder="Nome do cliente" onChange={handleChange} />        
            </div>
            
            <div className="register__input">            
              <input type="date" name="deliveryDate" placeholder="Data da entrega" onChange={handleChange} />          
            </div>

            <div className="register__input">            
              <input type="text" name="startPoint" placeholder="Ponto de partida" onChange={handleChange}/>
            </div>

            <div className="register__input">            
              <input type="text" name="endPoint" placeholder="Ponto de chegada" onChange={handleChange} />          
            </div>

            <button type="submit" className="register__button">Registrar</button>
          </form>      
        </div> 
      </div>   
    </>
  )
}