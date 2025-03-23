import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Cart from '../page/Cart'
import NavBar from '../page/NavBar'

export default function PageRouter() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}
