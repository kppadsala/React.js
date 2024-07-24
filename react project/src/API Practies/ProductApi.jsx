import axios from "axios";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import UpdateProduct from "./UpdateProduct";

export default function ProductApi() {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const refetch = () => setRefresh(!refresh);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [refresh]);

  const DeleteHandler = (e) => {
    axios({
      method: "delete",
      url: "http://localhost:9999/product/delete/" + e._id,
    })
      .then((res) => {
        refetch();
        toast.success("Product Deleted Successfully");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div>
      <div className="flex justify-end px-5 m-4">
        <UpdateProduct
          onClick={() => setOpenModal(false)}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
      <div style={{ margin: "10px 50px", border: "1px solid gray" }}>
        <Table bordered responsive size="sm">
          <thead>
            <tr className="flex justify-between px-3">
              <th className="">Sr.No</th>
              <th className="">Title</th>
              <th className="">Thumbnail</th>
              <th className="">Brand</th>
              <th className="">Gender</th>
              <th className="">Price</th>
              <th className="">Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e, i) => (
              <tr className="flex justify-around" key={i}>
                <td className="">{i + 1}</td>
                <td className="w-[20%] capitalize">{e?.title}</td>
                <td className="w-[20%]">
                  <img src={e?.thumbnail} className="w-10 h-10" />
                </td>
                <td className="w-[10%] capitalize">{e?.brand}</td>
                <td className="w-[10%] capitalize">{e?.gender}</td>
                <td className="w-[10%]">{e?.price}</td>
                <td className="flex gap-3">
                  <Button onClick={() => setOpenModal(true)}>Edit</Button>
                  <Button onClick={() => DeleteHandler(e)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
