import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";


export default function ProductPage({refetch,refresh,toggle,setDefaultData,setupdateMode }) {
    let [productdata, setProductData] = useState([]);

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
                      <img src={e.thumbnail} />
                    </td>
                    <td>{e.brand}</td>
                    <td>{e.gender}</td>
                    <td>{e.price}</td>
                   
                    <td className="">
                      <div className="d-flex   gap-2 text-uppercase ">
                        <th>{e.category[0]}</th>
                        <th>{e.category[1]}</th>
                        <th>{e.category[2]}</th>
                      </div>
                    </td>
                    <td className="">
                      <div className="d-flex   gap-2 text-uppercase ">
                        <th>{e.color[0]}</th>
                        <th>{e.color[1]}</th>
                        <th>{e.color[2]}</th>
                      </div>
                    </td>
  
                    <td className="">
                      <div className="d-flex    gap-2 ">
                        <th className="border border-1 p-1 border-black ">
                          {e.size[0]}
                        </th>
                        <th className="border border-1 p-1 border-black ">
                          {e.size[1]}
                        </th>
                        <th className="border border-1 p-1 border-black ">
                          {e.size[2]}
                        </th>
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
