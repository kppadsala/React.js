import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-around gap-3'>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <NavLink to={"/contact"}>CONTACT</NavLink>
        <NavLink to={"/login"}>LOGIN</NavLink>
        <NavLink to={"/register"}>REGISTER</NavLink>

    </div>
  )
}
