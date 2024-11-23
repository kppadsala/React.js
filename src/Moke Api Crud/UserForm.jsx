import axios from "axios";
import { Button, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";

let intiData = { name: "", gender: "", phone: "" };
export default function UserForm() {
  const [newItem, setNewItem] = useState(intiData);
  const [itemArr, setItemArr] = useState([]);
  const [editData, setEditData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responce = await axios.get(
          "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud"
        );
        setItemArr(responce.data);
      } catch (error) {
        console.log("FeatchData Error:", error);
      }
    };
    fetchData();
  }, []);


  const handleCreateSubmit = async () => {
    try {
      let responce = await axios.post(
        "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud",
        newItem
      );
      setItemArr([...itemArr, responce.data]);
    } catch (error) {
      console.log("Create Error:", error);
    }
  };

  const updateData = (data) => {
    console.log("🚀 ~ updateData ~ data:", data);
    setEditData(data);
    setNewItem(data);
  };

  const handleUpdateSubmit = async () => {
    try {
      let responce = await axios.put(
        `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${editData.id}`,
        newItem
      );
      setItemArr(
        itemArr.filter((e) => (e.id === editData.id ? responce.data : e))
      );
      setEditData(null);
      setNewItem(intiData);
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  const DeleteHandler = async (deleteData) => {
    try {
      let responce = await axios.delete(
        `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${deleteData.id}`
      );
      setItemArr(itemArr.filter((e) => e.id === deleteData.id));
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };



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
          <Button onClick={handleCreateSubmit}>Create</Button>
          <Button onClick={handleUpdateSubmit}>Update</Button>
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
              <td className="w-[10%] ">{e?.phone}</td>
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
