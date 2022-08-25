import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
 
import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Search from "../Pages/Search";
import Image from "../Pages/Image";
import New from "../Pages/New";
import ShopAll from "../Pages/ShopAll";
import Earning from "../Pages/Earning";
import Necklaces from "../Pages/Necklaces";
import Bracelets from "../Pages/Bracelets";
import Rings from "../Pages/Rings";
import ShopSocial from "../Pages/ShopSocial";
import Payment from "../Pages/Payment";
 

function AllRoutes(){


    return (
        <div>
           
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/image" element={<Image/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/shopall" element={<ShopAll/>}/>
            <Route path="/earning" element={<Earning/>}/>
            <Route path="/necklaces" element={<Necklaces/>}/>
            <Route path="/bracelets" element={<Bracelets/>}/>
            <Route path="/rings" element={<Rings/>}/>
            <Route path="/shopsocial" element={<ShopSocial/>}/>
            <Route path="/payment" element={<Payment/>}/>



           </Routes>
           
        </div>
    )
}
export default AllRoutes