import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import Header from './Header'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
