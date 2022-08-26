import { Link } from "react-router-dom";
 import "./Navbar.css"
 import { FaUserAlt,FaSearch,FaCartArrowDown } from "react-icons/fa";
 function Navbar(){

    return (
        <div>
          
            <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>

            <hr />
            <div id="navbar">
                
                
                <div class="l2">
        <h2>LOVODA</h2>
        <p class="e1"><Link to="/">Home</Link> </p>
        <p class="e1"><Link to="/new">New</Link> </p>
        <p class="e1"><Link to="/shopall">Shop All</Link> </p>
        <p class="e1"><Link to="/earning">Earning</Link></p>
        <p class="e1"><Link to="/necklaces">Necklaces</Link> </p>
        <p class="e1"><Link to="/bracelets"> Bracelets</Link></p>
        <p class="e1"><Link to="/rings"> Rings</Link> </p>
        <p class="e1"><Link to="/shopsocial"> Shop Social</Link></p>
                </div>

                <div class="l3">
                   
                      <p class="fa"><Link to="/search"><FaSearch/></Link></p>
                      <p class="fa"><Link  to="/Login">< FaUserAlt/></Link></p>
                      <p class="fa"><Link to="/cart"><FaCartArrowDown/></Link>1</p>
                       
                     
                  
                   

                </div>
            </div>
          
        </div>
    )
}
export default Navbar;