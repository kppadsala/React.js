import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProduct, fetchAllProduct } from "../../../Api/Product";
import { toast } from "react-toastify";

export default function ProductTable() {
  let [productdata, setProductData] = useState([]);

  let sizeData = ["1.5", "2", "3", "4"];

  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct();
      if (error) toast.error("somthing went wrong");
      else {
        setProductData(data.data);
      }
    })();
  });

  const updateHandler = ()=>{
   
  }

  const deleteHandler = async (productId) => {
    
      const { error, data } = await deleteProduct(productId);
      console.log("🚀 ~ file: Store.jsx:30 ~ deleteHandler ~ data:", data)
      if (error) {
        toast.error("Failed to delete product");
      } else {
        
        setProductData(prevProductData =>
          prevProductData.filter(product => product.id !== productId)
        );
        toast.success("Product deleted successfully");
      }
   
  };
  

  return (
    <div>
      <div className="mx-3 my-9  px-8 ">
        <Table responsive>
          <thead>
            <tr className="text-2xl text-black bg-[#d6b8b9e2] ">
              <th>Sr.No</th>
              <th>Image</th>
              <th>Brand </th>
              <th>Gender</th>
              <th>Price</th>
              <th>category</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg ">
            {productdata?.map?.((e, i) => {
              return (
                <tr key={i} className="border-b-[2px] ">
                  <td scope="row" className="px-[2rem] py-4">
                    {i + 1}
                  </td>
                  <td>
                    <img src={e.thumbnail} className="w-[70px] h-[70px]"/>
                  </td>
                  <td className="capitalize">{e.brand}</td>
                  <td className="capitalize">{e.gender}</td>
                  <td>{e.price}</td>

                  <td className="">
                    <div className="grid  text-uppercase">
                      {e?.category?.map((category, i) => (
                        <th key={i} className="capitalize">{category}</th>
                      ))}
                    </div>
                  </td>
                 

                  <td className="">
                    <div className="flex gap-2">
                      {sizeData?.map((size, i) => (
                        <span
                          key={i}
                          className={`border-[1px] p-1 font-semibold text-black bg-gray-300  ${
                            e?.size?.includes(size) ? " text-gray-500" : ""
                          }`}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-3">
                      <FaRegEdit className="text-blue-700 text-2xl cursor-pointer "
                       onClick={()=>updateHandler()}/>
                      <RiDeleteBin5Line className="text-danger text-2xl text-red-600 cursor-pointer" 
                       onClick={()=>deleteHandler(e.id)}/>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


