import React, { useEffect, useState } from 'react'

const SecurePage = () => {

    const email = localStorage.getItem("loginemail");
    console.log(email);

    const [getuserdata, setuserdata] = useState([]);

    const getdata = async () => {
        const signupdata = await fetch(`/getdata/${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const sdata = await signupdata.json();
        if (!sdata || signupdata.status === 404) {
          alert("Error");
          console.log("error")
        }
        else {
          setuserdata(sdata);
          console.log(sdata)
          console.log("Data has been retrive");
         }
      }
      useEffect(() => {
        getdata();
      }, [])
      

  return (
    <>
    <div className="container">
    <div className="content" style={{"marginTop":"200px"}}>
          <p>Welcome Back</p>
          <h2>{getuserdata.name}</h2>
          {/* <p>Happy to see you back</p> */}
          </div>
    </div>
    
    </>
  )
}

export default SecurePage