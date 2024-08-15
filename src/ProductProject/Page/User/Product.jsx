import React, { useEffect, useState } from 'react'
import ProductPage from './ProductPage'
import ProductModal from '../../Component/Modals/ProductModal';
import { Button } from 'reactstrap';

export default function Product() {
  let Product={
    title:"",
    description:"",
    brand:"",
    gender:"",
    category:[],
    colors:[],
    Price:"",
    Discount:"",
    Thumbnail:"",
    size:[]
  
  }

  let [refresh,setrefresh]=useState(true);
  const refetch = ()=> setrefresh(!refresh);

  let [modal, setModal] = useState(false);  
  const toggle = () => setModal(!modal);

let [defaultData,setDefaultData]=useState(Product);
let [updateMode,setupdateMode]=useState(false)
console.log(" defaultData:", defaultData)

useEffect(()=>{
  if(!modal){
    setDefaultData(Product);
  }
}, [modal])
  return (
    <div>
       <div className="d-flex justify-content-between align-items-center border border-1 border-black p-2 mx-3 mt-3 ">
            <p className="h1 fw-bold text-center">Product Table</p>
            <Button color="danger" onClick={toggle}>
        Add Product
      </Button>
          </div>
        
      <ProductPage refetch={refetch} refresh={refresh} toggle={toggle} setDefaultData={setDefaultData} setupdateMode={setupdateMode}/>
      <ProductModal refetch={refetch} toggle={toggle} modal={modal}  defaultData={defaultData} updateMode={updateMode}/>
    </div>
  )
}

