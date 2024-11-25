import axios from "axios";
import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

let intiData = { name: "", gender: "", phone: "" };
export default function UserApi() {
  const [newItem, setNewItem] = useState(intiData);
  const [itemArr, setItemArr] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(()=>{
    const fetchData=async()=>{

        try {
            const response=await axios.get("https://66c73bbf732bf1b79fa5d542.mockapi.io/crud");
            
            console.log("===>", response?.data);
            setItemArr(response?.data)
        } 
        catch (error) {
      console.log("fetch", error);
            
        }
    }
    fetchData();
  },[]);

  

  const handleCreateSubmit = async () => {
    try {
      const response = await axios.post(
        "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud",
        newItem
      );
      setItemArr([...itemArr, response.data]);
      setNewItem(intiData); // Reset the form after creating a new item
    } catch (error) {
      console.log("Create Error:", error);
    }
  };

  const updateData = (data) => {
    setEditData(data);
    setNewItem(data); // Populate the form with selected data
  };

  const UpdateHandler = async () => {
    try {
      const response = await axios.put(
        `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${editData.id}`,
        newItem
      );
      setItemArr(itemArr.map((e) => (e.id === editData.id ? response.data : e)));
      setEditData(null);
      setNewItem(intiData); // Reset the form after updating
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  const DeleteHandler=async(deleteData)=>{
    try {
        const response=await axios.delete(    `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${deleteData.id}`);
        setItemArr(itemArr.filter((e)=>e.id !== deleteData.id))
    } catch (error) {
      console.log("Update Error:", error);
        
    }
  }

//   const UpdateHandler = async () => {
//     try {
//       const response = await axios.put(
//         "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/",newItem
//       );
//       setItemArr(itemArr.map((d) => (d.id === editItem.id ? editItem : d)));
//       setEditData(null)
//     } catch (error) {
//       console.log("Create Error:", error);
//     }
//   };
  return (
    <div>
      <div className="flex justify-center flex-col items-center p-3 border-2 border-gray-500 m-5">
        <h3>{editData ? "Update Item" : "Create New Item"}</h3>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gender"
            value={newItem.gender}
            onChange={(e) => setNewItem({ ...newItem, gender: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={newItem.phone}
            onChange={(e) => setNewItem({ ...newItem, phone: e.target.value })}
          />
          <Button onClick={editData ? UpdateHandler : handleCreateSubmit}>
            {editData ? "Update" : "Create"}
          </Button>
        </div>
        
      </div>
      <Table bordered responsive size="sm">
        <thead>
          <tr className="flex justify-between px-3">
            <th className="">Sr.No</th>
            <th className="">Name</th>
            <th className="">Gender</th>
            <th className="">Phone</th>
            <th className="">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {itemArr?.map?.((e, i) => (
            <tr className="flex justify-around" key={e.id}>
              <td className="">{i + 1}</td>
              <td className="w-[20%] capitalize">{e?.name}</td>
              <td className="w-[10%] capitalize">{e?.gender}</td>
              <td className="w-[10%] capitalize">{e?.phone}</td>
              <td className="flex gap-3">
                <Button onClick={() => updateData(e)}>Edit</Button>
                <Button onClick={() => DeleteHandler(e)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
