import { Button } from 'flowbite-react'
import React from 'react'
import { Table } from 'reactstrap'

export default function TableCom({DeleteData,updateHandler,data}) {
  return (
    <div>
            <Table bordered  className="shadow-2xl ">
          <thead>
            <tr>
              <th>SR.No</th>
              <th>First Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.count?.map?.((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td className="flex gap-3">
                  <Button onClick={() => DeleteData(i)}>Delete</Button>
                  <Button onClick={() => updateHandler(e, i)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}
