import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){
 
    const [user, setUser] = useState({
       
        email:"",
        password:""
    
       })

    

    const [obj, setObj] = useState([])

   function handleChange(e){
       const name = e.target.name;
       const value=e.target.value
       console.log(name,value)

       setUser({...user , [name]:value})
    }

    function handleSubmit(e){
            e.preventDefault();

            const newObj = {...user, id:new Date().getTime().toString() }
            alert("Login Successfull")
            console.log(obj)
             setObj([...obj, newObj])
             console.log(obj)


          
    }
 

    return (
        <div>
          <Navbar/>
          <hr />
          <br />
          <br />
      
           <h1>Login</h1>
     <br />
    
    <form action="" onSubmit={handleSubmit}>
    <input style={{border:"2px solid blue",text:"blue",borderRadius:"2px solid blue"}} id="t2" type="text" placeholder="Continue with Facebook" />
      <br />
      <br />
      <input id="t2" type="text" placeholder="Google" />
      <br />
      <br />
      <input style={{background:"orange", color:"white" }} id="t2" type="text" placeholder="Amazon" />
      <br />
      <br />
      <input 
      id="t2" 
      type="text" 
      value= {user.email}
      onChange={handleChange}
      name="email"
      placeholder="Email"
      

       />
      <br />
      <br />
      <input 
      id="t2"  
      type="password" 
      value={user.password}
      onChange={handleChange}
      name="password"
      placeholder="Password" 
      
      />
          
          <br />
          <p class="f1">Forget your password?</p>
              
              <br />
        <button type="submit"><Link to="/"> Sign in</Link> </button>
    </form>
    
          <p class="s1"><Link to="/signup"> create account</Link></p>
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
export default Login