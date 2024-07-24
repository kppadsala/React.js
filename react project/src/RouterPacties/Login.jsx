import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate();

  return (
    <div>
        <p className='text-2xl'>You have Not Account ? Click <p className='text-red-600 cursor-pointer' onClick={()=>navigate("/register")}>Register</p></p>
    </div>
  )
}
