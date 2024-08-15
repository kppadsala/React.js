import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from './redux/productSlice';

export default function ProductCom() {
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log("=-=-=-=-=-=-");
    dispatch(getproduct())
  },[]);

  let productSlice=useSelector((store)=>store.productSlice)
  console.log("🚀 ~ file: ProductCom.jsx:13 ~ ProductCom ~ productSlice:", productSlice);
  if(productSlice.error){
    alert(productSlice.error)
  }
  if(productSlice.pending){
    return <h1>Loding.....</h1>
  }
  return (
    <div >ProductCom</div>
  )
}
