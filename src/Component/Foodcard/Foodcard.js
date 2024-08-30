import React from 'react'
import './Foodcard.css'
import  veg from './icons8-veg-48.png'
import  nonveg  from './icons8-non-veg-48.png'

function Foodcard({imgurl,title ,description,isveg,price}) { 
  return (
    <div className='Foodcard'>
      <img 
      src={imgurl}
      className='food-card-image'
      alt='food'
      />
      <h1 className='card-title'>{title}</h1>
      <h2 className='card-description'>{description}</h2>
      <img className='card-type' src={ isveg ? veg : nonveg} alt="icon"/>

     {
      price ? <p className='food-card-price'> ₹ {price}</p> :<p className='food-not-avialble'> Not Available</p>
     }
     <button className='Buy-btn'>Add To Card</button>
    </div>
  )
}

export default Foodcard