import { useState } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


function Signup(){

   const [user, setUser] = useState({
    firstname:"",
    lastname:"",
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
            alert("Signup Successfull")
            console.log(obj)
             setObj([...obj, newObj])
             console.log(obj)


            //  setUser({firstname:"", lastname:"", email:"", password:""})
    }



    return (
        <div>
          <Navbar/>
          <hr />
          <br />
          <br />

          <h1>Create account</h1>
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
            value={user.firstname}
            onChange={handleChange}
            placeholder="First name" 
            name="firstname"
            
            />
                 <br />
                  <br />

            <input 
            id="t2"  
            type="text" 
            value= {user.lastname}
            onChange={handleChange}
            placeholder="Last name"
            name="lastname"
             />
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
               <p class="f2">Subscribe for Newsletter  <input style={{marginLeft:"-40px"}} type="checkbox" />  </p>
                 <br />

            <button type="submit">    Create </button>
          
        </form>

               {/* <div>
                {
                 obj.map((currElem)=>{
                    return (
                        <div>
                            <p>
                                {currElem.firstname}
                            </p>
                            <p>
                                {currElem.lastname}
                            </p>
                            <p>
                                {currElem.email}
                            </p>
                            <p>
                                {currElem.password}
                            </p>
                        </div>
                    )
                 })   
                }
               </div> */}
      
        



           

           <br />
           <br />
           <br />
           <br />
           <br />
          <Footer/>
        </div>
    )
}
export default Signup