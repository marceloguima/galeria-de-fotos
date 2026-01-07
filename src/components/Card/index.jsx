import React from 'react'
import "./style.css"

const Card = ({endereco, alt, titulo}) => {
  return (
    <div className="card">
      <img src={endereco} alt={alt} />
      <h3>{titulo}</h3>
    </div>
  )
}

export default Card
