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
      description="Delicious Biryani  with fresh ingredients"
      isveg={false}
      />
      <Foodcard 
       imgurl="https://img.freepik.com/premium-photo/chicken-curry-pan-with-lemongrass_1174497-78536.jpg?w=740"
      title="Chiken curry"
      description="Delicious Chiken curry with fresh ingredients"
      isveg={false}
      />
      <Foodcard 
       imgurl="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?t
       =st=1724862230~exp=1724865830~hmac=3a1c8ea1b8efb3f7f1713e9af11634c98198dd029ea50edb6ba11a412e17bdd0&w=740"
      title="Panner Tikka"
      description="Delicious Panner Tikka with fresh ingredients"
      isveg={false}
      />
      </div>
    </div>
  )
}

export default Home