import { Link } from "react-router-dom";
import image from "../assets/image.png"
import { FaTimes } from "react-icons/fa";
function Search(){


    return (
        <div>
            <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
            <hr />

            <input class="t1" type="text" placeholder="search"  />
           <Link to="/">< FaTimes/></Link> 

<br />
<br />
               <div>
                     <img src={image} />
                </div>
        </div>
    )
}
export default Search