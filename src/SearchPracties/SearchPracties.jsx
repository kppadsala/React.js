import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Table } from "reactstrap";
import data from "../SearchPracties/data";
console.log("🚀 ~ data:", data);

export default function SearchPracties() {
  let [value, setValue] = useState(data);
  let [search, setSearch] = useState("");

  // CHAT GPT CODE ==>CODE  IS TRUE
//   useEffect(() => {
//     let searchData = data.filter((e) =>
//       e.name.toLowerCase().includes(search.toLowerCase()) ||
//       e.lastname.toLowerCase().includes(search.toLowerCase())
//     );
//     setValue(searchData);
//   }, [search]);

useEffect(()=>{
    let searchData=data.filter(
     (e)=>
         e.name.includes(search) || 
         e.lastname.includes(search) || 
         e.age.includes(search) 
        );
    setValue(searchData)
},[search])


  return (
    <>
      <div className="m-5 p-3 border-2 border-black">
        <form>
          <FormGroup className="flex justify-center items-center gap-3">
            <Label for="exampleSearch">Search</Label>
            <Input
              className="border-2"
              name="search"
              placeholder="Search Text"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormGroup>
        </form>
      </div>
      <div className="m-5 border-2 border-black">
        <Table bordered responsive striped>
          <thead>
            <tr>
              <th>SR.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {value.map((e, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
