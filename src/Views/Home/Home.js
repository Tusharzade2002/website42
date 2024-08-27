import React from 'react'
import Foodcard from '../../Component/Foodcard/Foodcard'
import './Home.css'
function Home() {
  return (
    <div className='main-container'>
       <h1 className='Brand-name'>Gabbar Da Dhaba</h1>
      <Foodcard 
      imgurl="https://img.freepik.com/premium-photo/juicy
      -aloo-paratha-cutlets-popular-street-food-aloo-parat
      ha-alu-paratha-picture_636537-377633.jpg?w=740"
      title="Alu paratha"
      description="Delicious Alu paratha with fresh ingredients"
      isveg={true}
      />
       <Foodcard 
      title="biryani"
      description="Delicious Biryani paratha with fresh ingredients"
      isveg={false}
      />
    </div>
  )
}

export default Home