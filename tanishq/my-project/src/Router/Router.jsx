import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../UI/Component/Header/Header'
import Home from '../UI/Page/User/Home/Home'
import Gold from '../UI/Page/User/Gold/Gold'
import Diamond from '../UI/Page/User/Diamond/Diamond'
import Errings from '../UI/Page/User/Errings/Errings'
import Rings from '../UI/Page/User/Rings/Rings'
import Collection from '../UI/Page/User/Collections/Collection'
import Wedding from '../UI/Page/User/Wedding/Wedding'
import Gifting from '../UI/Page/User/Gifting/Gifting'
import GoldenHarvest from '../UI/Page/User/GoldenHarvest/GoldenHarvest'
import More from '../UI/Page/User/More/More'
import All_Jewellery from '../UI/Page/User/All-Jewellery/All_Jewellery'
import Footer from '../UI/Component/Footer/Footer'
import PageNotFound from './PageNotFound'
import ProfilePage from '../UI/Page/User/ProfilePage/ProfilePage'
import WishList from '../UI/Page/User/WishList/WishList'
import Login from '../UI/Page/User/Login/Login'
import Register from '../UI/Page/User/Register/Register'
import CartPage from '../UI/Page/User/Cart/CartPage'
import Store from '../UI/Page/User/Store/Store'


export default function Router() {
  return (
    <div>
            <BrowserRouter>
            <Header/>       
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/all_jewellery" element={<All_Jewellery/>}/>
                <Route path="/gold" element={<Gold/>}/>
                <Route path="/diamond" element={<Diamond/>}/>
                <Route path="/errings" element={<Errings/>}/>
                <Route path="/rings" element={<Rings/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/wedding" element={<Wedding/>}/>
                <Route path="/gifting" element={<Gifting/>}/>
                <Route path="/goldenHarvest" element={<GoldenHarvest/>}/>
                <Route path="/more" element={<More/>}/>
                <Route path="/profilePage" element={<ProfilePage/>}/>
                <Route path="/wishList" element={<WishList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cartpage" element={<CartPage/>}/>
                <Route path="/store" element={<Store/>}/>

            <Route path="*" element={<PageNotFound />} />



            </Routes>
            <Footer/>
            </BrowserRouter>
    </div>
  )
}
