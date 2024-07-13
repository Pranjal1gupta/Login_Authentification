import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupimg from '../media/signup.jpg'

const Signup = () => {
  const history=useNavigate();
  const [user,setuUser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  });

    const handleInputs=(e)=>{
     console.log(e.target.value);
      const {name,value}=e.target;
      setuUser((preval)=>{
        return{
          ...preval,
          [name]:value
        }
      })
    };

    const PostData=async(e)=>{
      e.preventDefault();

      const {name,email,password,cpassword}=user;

      if( !name || !email || !password || !cpassword){
        window.alert("All fields are required")
      }
      else if(password !== cpassword){
        window.alert("Password and Confirm Password must be same");
      }
      else{
        const res=await fetch("/register",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name,
            email,
            password,
            cpassword
            })
        });
        const data =await res.json();

        if(data.status === 422 || !data){
          window.alert("Invalid registration");
          console.log("Invalid registration");
        }
        if (data.status===409){
          alert("Email already exists ")
        }
        else{
          window.alert("Registration Successful");
          console.log("Registration Successful");
          history("/login")
        }
      }
    }

  return (
    <>
    
      <div className="container card p-3 my-3">
        <div className="my-2">
            <h2 style={{"textAlign":"center"}}>Sign Up</h2>
        </div>
      
        <div className="row">
          <div className="col-sm-8">
            <form>
              <div className="form-group">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  required
                  className="form-control"
                />
              </div>
                <label htmlFor="email" >Email address</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  required
                  className="form-control"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  required
                  className="form-control"
                />
              </div>
              <center>
              <button type="submit" className="btn btn-primary" onClick={PostData}>
                Submit
              </button>
              </center>
            </form>
          </div>

          <div className="col-sm-3">
            <center>
              <img src={signupimg} alt="image" style={{"height":"250px", "width":"270px","margin":"50px"}}/>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
