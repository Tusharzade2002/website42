import React from 'react'
import Foodcard from '../../Component/Foodcard/Foodcard'
import './Home.css'
function Home() {
  return (
    <div className='main-container'>
       <h1 className='Brand-name'>Gabbar Da Dhaba</h1>
      <Foodcard 
      title="Alu paratha"
      description="Delicious Alu paratha with fresh ingredients"
      />
       <Foodcard 
      title="biryani"
      description="Delicious Biryani paratha with fresh ingredients"
      />
    </div>
  )
}

export default Home