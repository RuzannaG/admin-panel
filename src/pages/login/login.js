import { useRef, useEffect, useState} from "react"
import { useNavigate } from "react-router";

export const Login=()=>{
const inputRef=useRef();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const navigate=useNavigate();

const hndleEmail =(e)=>{
  setEmail(e.target.value)

}
const handlePassword=(e)=>{
setPassword(e.target.value)
}
const handleClik =()=>{
  if(email==='admin@mail.ru' && password==="admin"){
      navigate('/user')
  }
}
  
useEffect(()=>{
inputRef.current.focus();
},[])

    return(
        <div className="background">
             <div className="container">
      <div className="login">
        <form>
          <h1>Login In</h1>
          <hr />
          <p>Explore the World!</p>
          <label>Email</label>
          <input type="text" placeholder="Email" onChange={hndleEmail}
            ref={inputRef} />
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={handlePassword}/>
          <button onClick={handleClik} ><span>Submit</span></button>
          <p><a href="#">Forgot Password?</a></p>
        <closeform></closeform></form>
      </div>
      <div className="pic">
        <img src="https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1210502593.jpg" />
      </div>
    </div>
        </div>
    )
}
