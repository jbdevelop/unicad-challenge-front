import React, { useState, useEffect } from 'react'

import axios from 'axios';

import "./List.css"

export default function Menu() {

  const [list, setList] = useState([])

  useEffect(() => { 
    handleGetList()
  }, [])


  async function handleGetList() {
    const data = await axios.get('https://jbdev.com.br/list')

    
    console.log(data.data)
    setList(data.data)
  }

  return(
    <>      
      <div className="list">
        <div className="list__title">
          Lista de Entregas
        </div>
                
          <table className="list__table">
            <thead>
              <tr>
                <th width="20%">Cliente</th>                
                <th width="15%">Data</th>                
                <th width="20%">Ponto de Partida</th>                
                <th width="20%">Ponto de Chegada</th>                
                <th width="15%"></th>  
              </tr>
            </thead>

            <tbody>
            { 
              list.map(item => (
                <tr key={item.id}>
                  <td>{item.client}</td>
                  <td>{item.deliveryDate}</td>
                  <td>{item.startPoint}</td>
                  <td>{item.endPoint}</td>
                  <td><span>Ver Trajeto</span></td>
                </tr>
              )) 
            }
            </tbody>                       
          </table>        
      </div>   
    </>
  )
}