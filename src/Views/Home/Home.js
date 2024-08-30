import React from 'react'
import Foodcard from '../../Component/Foodcard/Foodcard'
import './Home.css'
function Home() {

  const foods=[
    {
     imgurl:"https://img.freepik.com/premium-photo/juicy-aloo-paratha-cutlets-popular-street-food-aloo-paratha-alu-paratha-picture_636537-377534.jpg?w=740",
      title:"Alu paratha",
      description:"Delicious Alu paratha with fresh ingredients",
      isveg:true,
      price:"50",
    },
    {
        imgurl:"https://img.freepik.com/premium-photo/savory-biryani-with-succulent-chicken-rustic-tabledelectable-indian-cuisine_960396-874102.jpg?w=740",
        title:"Biryani",
        description:"Delicious Biryani with fresh ingredients",
        isveg:false,
        price:"100"
    },
   
    {
      imgurl:"https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?t=st=1724862230~exp=1724865830~hmac=3a1c8ea1b8efb3f7f1713e9af11634c98198dd029ea50edb6ba11a412e17bdd0&w=740",
      title:"Panner Tikka",
      description:"Delicious Panner Tikka with fresh ingredients",
      isveg:true,
      price:"150",
    },
    {
      imgurl:"https://img.freepik.com/free-photo/delicious-seafood-shrimps-mussels-pizza-black-wooden-table-italian-food-top-view_2829-6089.jpg?t=st=1725020447~exp=1725024047~hmac=5d7b8fb66914afe4974f14e21fc669f1980cdda46598698320698332b3556710&w=740",
      title:"Pizza",
      description:"Delicious Pizza with fresh ingredients",
      isveg:true,
      price:"150",
    },
    {
      imgurl:"https://img.freepik.com/premium-photo/chicken-curry-pan-with-lemongrass_1174497-78536.jpg?w=740",
      title:"Chicken Curry",
      description:"Delicious Chiken Curry with fresh ingredients",
      isveg:false,
      price:"120",
    },
    {
      imgurl:"https://img.freepik.com/free-photo/close-up-hamburgers-cutting-board_23-2148262994.jpg?t=st=1725020535~exp=1725024135~hmac=129cfdd99537961c4613a10e8d1a985e9e5d9357825bad9a1925969b3f4f4dc1&w=740",
      title:"Burgar",
      description:"Delicious Burgar with fresh ingredients",
      isveg:true,
      price:"150",
    },
    {
      imgurl:"https://img.freepik.com/free-photo/pakistani-food-cloth-view_23-2148825099.jpg?t=st=1725020620~exp=1725024220~hmac=dd16f651eccb770db52b4cd4ffdc7d4a917e1d8f17d2233db8bf9c43500bba41&w=740",
      title:"Naan",
      description:"Delicious Naan with fresh ingredients",
      isveg:true,
      price:"150",
    },
    {
      imgurl:"https://img.freepik.com/free-photo/green-curry-with-eggs-black-cups-with-lemon-lemongrass-chili-tomatoes_1150-25746.jpg?t=st=1725020829~exp=1725024429~hmac=34fe858ba9bd90b84b89920c70f16f14389244375d9acdc183aae563c389fb39&w=740",
      title:"Egg Curry",
      description:"Delicious Egg Curry with fresh ingredients",
      isveg:false,
      price:"150",
    },
    {
      imgurl:"https://img.freepik.com/free-photo/appetizing-healthy-rice-with-vegetables-white-plate-wooden-table_2829-19761.jpg?t=st=1725021250~exp=1725024850~hmac=841037d50e4fbf27c0f059e11278689cc10043fdf8876818049d736084decc4e&w=740",
      title:"Girra Rice",
      description:"Delicious Panner Tikka with fresh ingredients",
      isveg:true,
      price:"150",
    }
  ]
  return (
    <div className='main-container'>
       <h1 className='Brand-name'>Gabbar Da Dhaba</h1>
       <div className='food-card-container'> 
               {
                foods.map((fooditems)=>{
                return  <Foodcard 
                  imgurl={fooditems.imgurl}
                 title={fooditems.title}
                 description={fooditems.description}
                 isveg={fooditems.isveg}
                 price={fooditems.price}
                 />
                })
               }
      </div>
    </div>
  )
}

export default Home