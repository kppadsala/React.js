import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate=useNavigate()
  return (
    <div>
        <p className='text-2xl'>You have  Account ? Click <p className='text-red-600 cursor-pointer' onClick={()=>navigate("/login")}>Login</p></p>
    </div>
  )
}
