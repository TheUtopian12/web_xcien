import React from 'react'
import "./card.css"
import antena from '../../assets/Images/antenas-telefonia-telecomunicaciones (1).jpg'

const Card = ({titulo, descripcion, imagen}) => {
  
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={imagen} alt="Avatar" style={{width:"300px", height:"150px", borderRadius:"25px 25px 0 0"}}/>
        <h3>{titulo}</h3>
      </div>
      <div className="flip-card-back">
        <h2>{titulo}</h2>
        <br />
        <p>{descripcion}</p>
        
        <a href=''>Más Informacion</a>
      </div>
    </div>
  </div>
  )
}

export default Card