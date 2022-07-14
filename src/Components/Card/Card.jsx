import React from 'react'
import "./card.css"
import antena from '../../assets/Images/antenas-telefonia-telecomunicaciones (1).jpg'

const Card = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={antena} alt="Avatar" style={{width:"300px", height:"150px", borderRadius:"25px 25px 0 0"}}/>
        <h3>Internet</h3>
      </div>
      <div className="flip-card-back">
        <h1>Internet</h1>
        <br />
        <p>Mejoramos la seguridad de tu empresa con una conexion interna</p>
        <br />
        <a href=''>Más Informacion</a>
      </div>
    </div>
  </div>
  )
}

export default Card