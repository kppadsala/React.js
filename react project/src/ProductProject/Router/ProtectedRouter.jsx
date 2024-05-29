import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRouter({component}) {
    const navigate=useNavigate()

    useEffect(()=>{
        const data=localStorage.getItem("loginuser");
        if(!data){
            navigate("/")
        }
    })
  return (
    <div>{component }</div>
  )
}

