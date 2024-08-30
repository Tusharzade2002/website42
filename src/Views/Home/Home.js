import React from 'react'
import Foodcard from '../../Component/Foodcard/Foodcard'
import './Home.css'
import { PRODUCTS  , MAIN_TITLE , TAGLINE ,THEME} from '../../Config/data'

function Home() {

  
  return (
    <div className='main-container' style={{backgroundColor:THEME.background}}>
       <h1 className='Brand-name' style={{color:THEME.highlight,margin:0}}>{MAIN_TITLE}</h1>
       <h3 className='Brand-title'  style={{color:THEME.title}}>{TAGLINE}</h3>
       <div className='food-card-container' style={{color:THEME.cardcolor}}> 
               {
                PRODUCTS.map((fooditems)=>{
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