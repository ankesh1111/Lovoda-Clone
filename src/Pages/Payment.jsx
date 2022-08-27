import payment from "../assets/payment.png"
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useState } from "react";
function Payment(){

    const [user, setUser] = useState({
        savedaddress:"",
        country:"",
        firstname:"",
        lastname:"",
        address:"",
        city:"",
        phone:""

    })

    const [obj, setObj] = useState([]);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value
        console.log(name,value)

        setUser({...user, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();

        const newObj = {...user, id:new Date().getTime().toString()}
        alert("Payment successfull")
        console.log(obj);
        setObj([...obj, newObj]);
        console.log(obj)
    }



    return (
        <div>

            <br />
            <br />
        
        <div id="pay">
            <div>
             <h1 class="LO">LOVODA</h1>

             <div id="pay1">
              <p  >cart > </p>
              <p class="a1">Information > </p>
              <p class="a1">Shipping ></p>
              <p class="a1">Payment </p>
             </div>
             
             <p>Express checkout</p>
             <div>
                <img  style={{marginLeft:"10PX", marginTop:"-10PX"}} src={payment}/>
             </div>

             <p>OR</p>
              
              <p class="a2">Contact information</p>
              <p class="a3">    <FaUserAlt /></p>
          

              <p class="a4">Chetan@gmail.com</p>
              <p class="a5">logout</p>
              <p class="a6"><input type="checkbox" /></p>
              
              <p class="a7">Email me with news and offers</p>


            <p class="a8">  Shipping address</p>
          

            <form action="" onSubmit={handleSubmit}>

               <input 
                id="input"
                type="text" 
                value={user.savedaddress}
                onChange={handleChange}
                name="savedaddress"
                placeholder="saved address" 
                />
               <br />
               <br />

               <input  
               id="input"  
               type="text" 
               value={user.country}
               onChange={handleChange}
               name="country"
               placeholder="Country/region"
               />

               <br />
               <br />
               <input  
               id="input" 
               type="text" 
               value={user.firstname}
               onChange={handleChange}
               name="firstname"
               placeholder="First name"
               />

               <br />
               <br />
               <input  
               id="input" 
               type="text" 
               value={user.lastname}
               onChange={handleChange}
               name="lastname"
               placeholder="Last name" 
               />
               <br />
               <br />
               
               <input  
               id="input" 
               type="text" 
               value={user.address}
               onChange={handleChange}
               name="address"
               placeholder="Address"
               />
               <br />
               <br />
              
               <input  
               id="input" 
               type="text" 
               value={user.city}
               onChange={handleChange}
               name="city"
               placeholder="City" 
               />
               <br />
               <br />
               <input 
                id="input" 
                type="number"
                value={user.phone}
                onChange={handleChange}
                name="phone"
                 placeholder="phone"
                 />
              <br />
              <br />

              <input id="su" type="submit" />
              <br />
                <br />
              <button><Link to="/"> Continue to Shoping</Link>   </button>



            </form>

            </div>






            <div class="r1">
                <img src=" https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395" alt="" />

                <p class="r2">Evermore Ear Cuff Earrings</p>

                <p class="r3">$10.00</p>
                <br />
                <br />

                <hr />

                <input id="input1" type="text" placeholder="Gift card or discount code" />
                 
                <button >Apply</button>

                <hr />

                <p class="r4">Subtotal</p>
                <p class="r5">$10.00</p>
                <p class="r4">Shipping</p>
                <p class="r5">Calculated at next step</p>
                <hr />
                <p class="r4">Total</p>
                <p class="r5">$10.00</p>
            </div>









        </div>












        </div>
    )
}
export default Payment