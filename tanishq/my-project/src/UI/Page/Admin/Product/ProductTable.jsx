import React from "react";
import { Table } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


export default function ProductTable({updateHandler,deleteHandler,productdata,openModal}) {
  
  const sizeData = ["1.5", "2", "3", "4"];
  
return (
    <div>
      <div className="">
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
                  <td scope="row" className="px-[2rem] py-8">
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
                      {e?.category?.map?.((category, i) => (
                        <th key={i} className="capitalize">{category}</th>
                      ))}
                    </div>
                  </td>
                 

                  <td className="">
                    <div className="flex gap-2">
                      {sizeData?.map((size, i) => (
                        <span
                          key={i}
                          className={
                            e.size.includes(size)
                              ? ` rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-black bg-gray-200`
                              : " rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-gray-400 bg-gray-100"
                          }
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-3">
                      <FaRegEdit className="text-blue-700 text-2xl cursor-pointer "
                      onClick={updateHandler}
                     />
                      <RiDeleteBin5Line className="text-danger text-2xl text-red-600 cursor-pointer" 
                       onClick={()=>deleteHandler(e._id)}/>
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


