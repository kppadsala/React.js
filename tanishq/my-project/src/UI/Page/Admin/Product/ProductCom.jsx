import React, { useEffect, useState }  from 'react'
import ProductTable from './ProductTable'
import { createProduct, deleteProduct, fetchAllProduct } from "../../../Api/Product";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { ProductModal } from '../../../Modal/ProductModal';
import { Button } from 'flowbite-react';


export default function ProductCom() {
  // =========Refetch Flag/ReFresh Page State And Function=====================
  const [refetchFlag,setRefetchFlag]=useState(true);
  const refetch=()=> setRefetchFlag(!refetchFlag);

  // ===============Product Data Store/Set ===========================
  let [productdata, setProductData] = useState([]);
  // ===================Set Cookie==========================
  const [cookie] = useCookies([]);
  const [openModal, setOpenModal] = useState(false);

// ==========================GetData From API========================
useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct();
      if (error) toast.error("somthing went wrong");
      else {
        setProductData(data.data);
      }
    })();
  },[refetchFlag]);
  
  // ==========================Update Data In API========================
  const updateHandler = ()=>{
    setOpenModal(true);
    console.log("🚀 ~ file: ProductCom.jsx:32 ~ updateHandler ~ updateHandler:", updateHandler)
  }

  // ==========================Delete Data In API========================
  const deleteHandler = async (productId) => {
    const { error, data } = await deleteProduct(productId, cookie?.token);
    if (error) {
      toast.error("Failed to delete product");

    } else {
      refetch();
      toast.success("Product deleted successfully");
    }
  };

  const addProduct = (newProduct) => {
    
    setProductData([...productdata, newProduct]);
  };


    

  return (
    <div className='px-[3rem] flex flex-col gap-5'>
      <div className='flex justify-end gap-4'>

      <Button onClick={() => setOpenModal(true)}>Add Product</Button>
      </div>

      <ProductModal openModal={openModal} setOpenModal={setOpenModal} addProduct={addProduct}/>
      <ProductTable productdata={productdata} deleteHandler={deleteHandler} updateHandler={updateHandler}  />
    </div>
  )
}



