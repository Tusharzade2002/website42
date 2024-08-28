import React from 'react'
import Foodcard from '../../Component/Foodcard/Foodcard'
import './Home.css'
function Home() {
  return (
    <div className='main-container'>
       <h1 className='Brand-name'>Gabbar Da Dhaba</h1>
       <div className='food-card-container'>
      <Foodcard 
      imgurl="https://img.freepik.com/premium-photo/juicy
      -aloo-paratha-cutlets-popular-street-food-aloo-parat
      ha-alu-paratha-picture_636537-377633.jpg?w=740"
      title="Alu paratha"
      description="Delicious Alu paratha with fresh ingredients"
      isveg={true}
      />
       <Foodcard 
       imgurl="https://img.freepik.com/premium-photo/savory-biryani
       -with-succulent-chicken-rustic-tabledelectable-indian-cuisine_960396-874102.jpg?w=740"
      title="biryani"
      description="Delicious Biryani paratha with fresh ingredients"
      isveg={false}
      />
      </div>
    </div>
  )
}

export default Home