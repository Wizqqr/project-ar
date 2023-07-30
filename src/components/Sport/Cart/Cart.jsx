import React from 'react'
import './Cart.css'

const Cart=(props)=>{
    const {image,title,down,btn,price}=props
    return(
        <div className="card">
              {/* <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div> */}
      
        <div className='cart'>
                   <img src={image} alt="image catalog" />
                   <p className="price">{price}$</p>
        <div className="block_title">
            <p className="title">{title}</p>
            <p className="down">{down}</p>
    
       <button className="btn">{btn}</button>
        </div>
    </div>
    </div>
    // </div>
    // </div>
    )
}

export default Cart