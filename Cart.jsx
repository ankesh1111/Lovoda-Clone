import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import CartItem from "./cartItem"
import Total from "./Total"
 
import cartpage from "../assets/cartpage.PNG"
import { useState } from "react"
import { Link } from "react-router-dom";
 


const initData=[
  {
    id:1,
    product_name:"Evermore Ear Cuff Earrings",
    image_url:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395",
    price:10,
    qty:1
  },
  // {
  //   id:2,
  //   product_name: "Wired Ear Cuff Earrings",
  //   image_url:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313",
  //   price:10,
  //   qty:1
  // },
  // {
  //   id:2,
  //   product_name: "Fern Ear Cuff Earrings",
  //   image_url:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226",
  //   price:10,
  //   qty:1
  // }
]



 
function calculateTotal(product) {
  return product.reduce((acc, c) => acc + c.qty * c.price, 0);
}



function Cart(){

  const [data, setData] = useState(initData)

  const handleChangeQty = (id, amount) => {
    let updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + amount
        };
      } else {
        return item;
      }
    });
    setData(updatedData);
  };

  return (
        <div>
          <Navbar/>
          <hr />
          <br />
        

      <h1 class="cart">Your cart</h1> 
      <p class="n1"> <Link to="/"> Continue shopping</Link></p>

           <br />
          

       <p class="p1">PRODUCT</p>
       <p class="p2"> QUANTITY</p>
       <p class="p3">TOTAL</p>
       <hr />
       <div id="img1">
         <img src=" https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395" alt="" />
       </div>
       <p class="p4">Evermore Ear Cuff Earrings</p>

       <p class="p5">$10.00</p>  
     
       {data.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          // label={item.product_name}
          qty={item.qty}
          price={item.price}
          // image_url={item.image_url}
          handleChangeQty={handleChangeQty}
        />
      ))}

      <Total id="total" total={calculateTotal(data)} />

        <br />
       <hr />
       <br />
{/* 
       <div id="img1">
         <img src=" https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395" alt="" />
       </div>
     

                <p class="p4">Evermore Ear Cuff Earrings</p>

                <p class="p5">$10.00</p> */}

                {/* <div id="q1"> */}
                  {/* <Quatity/> */}
                {/* <button class="e3" onClick={decrement} >-</button>
                <button class="e3">{count}</button>
                <button class="e3" onClick={increment}>+</button> */}
              {/* </div> */}

              {/* <p class="q2">$10.00</p> */}
 
              <br />
              <br />
              <br />
              <br />
              
             
              {/* <hr /> */}

              <p class="cl2">Subtotal   <Total id="total" total={calculateTotal(data)} /></p>
              <p class="cl3"> available for orders between $35 - $1,000 ⓘ</p>
              <p class="cl4">Taxes and shipping calculated at checkout</p>
              <button class="cl5"><Link to="/payment">Check out</Link></button>
           <br />
           <br />
              <div class="ca1">
                <img src={cartpage} />
              </div>
 
<br />
          <h1 class="cla">Featured collection</h1>

          <div id="container1">
                <div>
                <Link to="/productpage">  <img 
                     src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100309-1__20452_823x.jpg?v=1645111798" /></Link>
                    <p class="w2">Evermore Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                <Link to="/productpage"> 
                <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100310-3__23072_1100x.jpg?v=1645111847" /></Link>
                   
                    <p class="w3">Wired Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                  
                <Link to="/productpage"> 
                  <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100440-3__37743_823x.jpg?v=1645113344" /></Link>
                    <p class="w3">Fern Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                <Link to="/productpage">
                  <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/010100443-1__54184_823x.jpg?v=1645113115" /></Link>
                    <p class="w2">Blossom Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
             </div>
             <br />
             
             <button><Link to="/new">View All</Link></button>
           





       



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
export default Cart