import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function ProductApi() {
  const [data, setData] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", gender: "", phone: "" });
  const [editItem, setEditItem] = useState(null);

  // =================================FETCH DATA ============================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud",
        });
        console.log("Fetched Data:", response?.data);
        setData(response?.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  // =================================CREATE DATA============================
  const handleCreateSubmit = async () => {
    try {
      const response = await axios.post(
        "https://66c73bbf732bf1b79fa5d542.mockapi.io/crud",
        newItem
      );
      setData([...data, response.data]); // Update the state with the new item
      setNewItem({ name: "", gender: "", phone: "" }); // Clear the form after submission
    } catch (error) {
      console.log("Create Error:", error);
    }
  };

  // =================================UPDATE============================
  const UpdateHandler = (item) => {
    setEditItem(item); // Set the item to be edited
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(
        `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${editItem.id}`,
        editItem
      );
      setData(data.map((d) => (d.id === editItem.id ? editItem : d))); // Update the state with the edited item
      setEditItem(null); // Clear the editItem after updating
    } catch (error) {
      console.log("Update Error:", error);
    }
  };

  // =================================DELETE============================
  const DeleteHandler = async (item) => {
    try {
      await axios.delete(
        `https://66c73bbf732bf1b79fa5d542.mockapi.io/crud/${item.id}`
      );
      setData(data.filter((d) => d.id !== item.id)); // Update the state to remove the deleted item
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // ========================================================================

  return (
    <div>
      {/* Form for Creating New Item */}
      <div className="flex justify-center flex-col items-center p-3 border-2 border-gray-500 m-5">
        <h3>Create New Item</h3>
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
            onChange={(e) =>
              setNewItem({ ...newItem, gender: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            value={newItem.phone}
            onChange={(e) => setNewItem({ ...newItem, phone: e.target.value })}
          />
          <Button onClick={handleCreateSubmit}>Create</Button>
        </div>
      </div>

      {/* Form for Editing Existing Item */}
      {editItem ? (
        <div className="flex justify-center flex-col items-center p-3 border-2 border-gray-500 m-5">
          <h3>Edit Item</h3>
          <div className="flex justify-center items-center gap-2">
            <input
              type="text"
              value={editItem.name}
              onChange={(e) =>
                setEditItem({ ...editItem, name: e.target.value })
              }
            />
            <input
              type="text"
              value={editItem.gender}
              onChange={(e) =>
                setEditItem({ ...editItem, gender: e.target.value })
              }
            />
            <input
              type="text"
              value={editItem.phone}
              onChange={(e) =>
                setEditItem({ ...editItem, phone: e.target.value })
              }
            />
            <div className="flex justify-center items-center gap-2">
              <Button onClick={handleUpdateSubmit}>Save</Button>
              <Button onClick={() => setEditItem(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      ) : (
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
            {data?.map((e, i) => (
              <tr className="flex justify-around" key={i}>
                <td className="">{i + 1}</td>
                <td className="w-[20%] capitalize">{e?.name}</td>
                <td className="w-[10%] capitalize">{e?.gender}</td>
                <td className="w-[10%] capitalize">{e?.phone}</td>
                <td className="flex gap-3">
                  <Button onClick={() => UpdateHandler(e)}>Edit</Button>
                  <Button onClick={() => DeleteHandler(e)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}




// ========================================================================

//   return (
//     <div style={{ margin: "10px 50px", border: "1px solid gray" }}>
//       <Table bordered responsive size="sm">
//         <thead>
//           <tr className="flex justify-between px-3">
//             <th className="">Sr.No</th>
//             <th className="">name</th>
//             <th className="">gender</th>
//             <th className="">phone</th>
//             <th className="">Update/Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((e, i) => (
//             <tr className="flex justify-around" key={i}>
//               <td className="">{i + 1}</td>
//               <td className="w-[20%] capitalize">{e?.name}</td>
//               <td className="w-[10%] capitalize">{e?.gender}</td>
//               <td className="w-[10%] capitalize">{e?.phone}</td>
//               <td className="flex gap-3">
//                 <Button onClick={() => UpdateHandler(e)}>Edit</Button>
//                 <Button onClick={() => DeleteHandler(e)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }