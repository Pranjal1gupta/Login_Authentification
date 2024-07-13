import React, { useState } from 'react'
import signupimg from '../media/login.jpg'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const history =useNavigate();
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');

  const loginUser= async(e)=>{
    e.preventDefault();

    if (!email || !password){
      window.alert("Please full all the fields")
    }
    else{
      const res=await fetch('/signin',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email, password
            })
      });
  
      const data=res.json();
  
      if(res.status===400 || !data){
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials")
      }
      else if(res.status===401){
        window.alert("Invalid Password ");
        console.log("Invalid Password")
      }
      else{
        window.alert("Login Successfull");
        localStorage.setItem("loginemail",email);
        console.log("Login Successfull")
        history("/securepage");
      }
    }
  }
  

  return (
    <>
    
    <div className="container card p-3 my-3">
        <div className="my-2">
            <h2 style={{"textAlign":"center"}}>Sign In</h2>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" >Email address</label>
                <input
                  type="email"
            
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="form-control"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className="form-control"
                />
              </div>
              <center>
              <button type="submit" onClick={loginUser} className="btn btn-primary">
                SignIn
              </button>
              </center>
            </form>
          </div>

          <div className="col-sm-3">
            <center>
              <img src={signupimg} alt="image" style={{"height":"200px", "width":"200px","margin":"30px"}}/>
            </center>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Login