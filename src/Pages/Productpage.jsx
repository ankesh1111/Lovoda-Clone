import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import star from "../assets/star.png"
import { useState } from "react"
import { Link } from "react-router-dom";
function ProductPage(){

   const [count, setCount] = useState("")

   function increment(){
    setCount(count+1)
   }

   function decrement(){
    setCount(count-1)
   }

   function addCart(){
    alert("Item added to your cart")
   }

   function buyProduct(){

   }


    return (
        <div>
          <Navbar/>
          <hr />
          <br />
        

          {/* <h1>Your cart</h1> */}

          <div id="cart">
            <div class="h1">
              <img  src=" https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395" /> 
              {/* <div class="h2">
              <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_1100x.jpg?v=1659450395" alt="" />
              </div> */}
            
            </div>

            <div>
              <p class="h3">LOVODA</p>
              <h1>Evermore Ear Cuff Earning</h1>
              <div class="h2">
                <img src={star}/>
              </div>

              <p class="h4">Ask a question</p>
              
              <p class="h6">$10.00</p>
              <p class="h7" >available for orders between $35 - $1,000</p>
              <p  class="h8" >Shipping calculated at checkout.</p>
              <p class="h3">Quantity</p>

              <div id="u1">
                <button class="b1" onClick={decrement} >-</button>
                <button class="b1">{count}</button>
                <button class="b1" onClick={increment}>+</button>
              </div>
              <br />
              <button class="b2" onClick={addCart}> Add to cart</button>
              <br />
              <br />
              
              <button class="b2">Add to wishlist</button>
              <br />
              <br />
              <button class="b3" onClick={buyProduct}><Link to="/payment">Buy it now</Link> </button>

              {/* <p class="h7">A two strand braided design ear cuff.</p>
              
              
                <p class="h9">Stainless Steel</p>
                <p class="h9">14k Gold Plating</p>
                <p class="h9">Measurement:</p>

             
                <p  class="h8">0.50in X 0.13 /1.27cm X 0.32cm</p> */}
           

              


            </div>





          </div>



          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer/>

          
        </div>
    )
}
export default ProductPage