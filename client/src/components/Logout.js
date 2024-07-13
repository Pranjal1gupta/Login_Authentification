import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const history=useNavigate();

    // promises
    useEffect(()=>{
        fetch("/logout",{
            method: "GET",
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json",
        },
        credentials:"include"
    }).then((res)=>{
        localStorage.clear();
        history("/login");
        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
    }).catch((err)=>{
        console.log(err);
    })
    });

  return (
    <>

    </>
  )
}

export default Logout