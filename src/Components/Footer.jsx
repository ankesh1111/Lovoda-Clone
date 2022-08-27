
 import footer from "../assets/footer.png"
 import {  FaFacebook,FaInstagramSquare,FaTiktok,FaPinterestP } from "react-icons/fa";
function Footer(){

    return (
        <div>
  <div id="container4">
          <div class="c1">
            <h5>Info</h5>
            <p class="s1">Search</p>
            <p class="s2">Terms of Service</p>
            <p class="s3">Refund policy</p>
            <p class="s4">Wholesale</p>
            <p class="s5">Wholesale Signup Form</p>
            <p >Shipping</p>
            <h5 class="h5">Subscribe to our emails</h5>
            <input type="text" id="pla" placeholder="Email"/>
           <div class="i">
           <FaFacebook/>
            <div class="i2"><FaInstagramSquare/></div>
            <div class="i3"><FaTiktok/></div>
            <div class="i4"><FaPinterestP/></div>
           
           
          
            </div> 
      </div>

        <div class="c2">
          <h5 class="d1">Contact Us!</h5>
          <p>Need to talk? Reach us via email, phone or text!</p>
          <h4>Email: Customerservice@Lovoda.com</h4>
          <h4 class="d2">Phone: (443) 500-1200</h4>
          <p class="d3">**Msg &data rates may apply</p>
        </div>
      </div>            
      
    <br />
    <br />
    <hr />
            
                {/* FOOTER SECTION SECOND-2  */}
      
       <div id="container5">
        <div>
          <img class="c1" src={footer}  />
        </div>

       </div>

       <p class="a1">@ 2022, Lovoda Powered by Shopify</p>





        </div>
    )
}
export default Footer;