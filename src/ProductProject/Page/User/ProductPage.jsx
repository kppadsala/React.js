import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";


export default function ProductPage({refetch,refresh,toggle,setDefaultData,setupdateMode }) {
    let [productdata, setProductData] = useState([]);
    const sizeData = ["1.5", "2", "3", "4"];

    useEffect(() => {
      axios({
        method: "get",
        url: " http://localhost:9999/product/getAll",
      })
        .then((res) => {
          // console.log("Product Res=>", res.data);
      setupdateMode(false)

          setProductData(res.data.data);
        })
        .catch((err) => {
          console.log("Product Error=>", err);
        });
    }, [refresh]);
  
    const deleteHandler = (id) => {
    // console.log("🚀 ~ file: Product.jsx:27 ~ deleteHandler ~ e:", e);
    axios({
      method: "delete",
      url: "http://localhost:9999/product/delete/" + id,
    })
      .then((res) => {
        console.log("🚀 ~ file: Product.jsx:33 ~ .then ~ res:", res)
        refetch();
            toast.success("Your Data is Deleted");
  
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
    };

    const updateHandler=(e) => {
      console.log("updatehandler e==> ", e)
      setDefaultData(e);
      toggle();
      setupdateMode(true)
    }
  
    return (
      <>
        <div className="mx-3   p-2 border border-1 border-black ">
          <Table responsive>
            <thead>
              <tr className="h5">
                <th>Sr.No</th>
                <th>Image</th>
                <th>Brand </th>
                <th>Gender</th>
                <th>Price</th>
                <th>category</th>
                <th>Color</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productdata?.map?.((e, i) => {
                return (
                  <tr key={i}>
                    <td scope="row">{i + 1}</td>
                    <td>
                      <img className="w-25 h-25" src={e.thumbnail} />
                    </td>
                    <td>{e.brand}</td>
                    <td>{e.gender}</td>
                    <td>{e.price}</td>
                   
                    <td className="">
                      <div className="d-grid   gap-2 text-uppercase ">
                      {e?.category?.map((category, i) => (
                        <th key={i} className="capitalize">{category}</th>
                      ))}
                      </div>
                    </td>
                    <td className="">
                      <div className="d-flex   gap-2 text-uppercase ">
                      {e?.color?.map((color, i) => (
                        <th key={i} className="capitalize">{color}</th>
                      ))}
                      </div>
                    </td>
  
                    <td className="">
                      <div className="d-flex    gap-2 ">
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
                      <div className="d-flex gap-3">
                        <FaRegEdit className="text-success h5 " onClick={()=>updateHandler(e)}/>
                        <RiDeleteBin5Line
                          className="text-danger h4"
                          onClick={() => deleteHandler(e._id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
}
