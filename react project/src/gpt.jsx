// src/UserForm.js
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const UserForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const onSubmit = (data) => {
    const updatedUsers = [...users, { ...data, id: Date.now() }];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    reset();
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleUpdate = (id, updatedData) => {
    const updatedUsers = users.map(user => user.id === id ? { ...user, ...updatedData } : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Name" variant="outlined" />}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Email" variant="outlined" />}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      <h3>Users List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Button variant="contained" color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
            <Button variant="contained" color="primary" onClick={() => handleUpdate(user.id, { name: 'Updated Name', email: 'updated@example.com' })}>Update</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
