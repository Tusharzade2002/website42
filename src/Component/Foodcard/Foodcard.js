import React from 'react'
import './Foodcard.css'
function Foodcard({title ,description}) {

  
  return (
    <div className='Foodcard'>
      <h1 className='card-title'>{title}</h1>
      <h2 className='card-description'>{description}</h2>
    </div>
  )
}

export default Foodcard