import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

export default function UserForm1() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const cities = ["Surat", "Vapi", "Tapi", "Navsari", "Valsad"];
  //   const hobbies=["reading","traveling","runnig","tracking"]

  const onSubmit = (data) => {
    const selectedCities = cities.filter((city) => data[city]);
    data.city = selectedCities;
    // const selectedhobbies = hobbies.filter(hobbies => data[hobbies]);
    // data.hobbies = selectedhobbies;

    if (editIndex >= 0) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setUsers(updatedUsers);
      setEditIndex(-1);
    } else {
      setUsers([...users, data]);
    }
    reset();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const user = users[index];
    reset(user);
    user.city.forEach((city) => setValue(city, true));
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  //   const options = [
  //     { value: 'reading', label: 'Reading' },
  //     { value: 'traveling', label: 'Traveling' },
  //     { value: 'cooking', label: 'Cooking' },
  //     // Add more options as needed
  //   ];

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <div className="mt-1">
            {cities.map((city, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input
                  {...register(city)}
                  type="checkbox"
                  className="border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50"
                />
                <span className="ml-2">{city}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="male"
                className="border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                {...register("gender")}
                type="radio"
                value="female"
                className="border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Hobbies</label>
          <div className="mt-1">
            {hobbies.map((hobbies, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input {...register(hobbies)} type="checkbox" className="border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50" />
                <span className="ml-2">{hobbies}</span>
              </label>
            ))}
          </div>
        </div> */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Hobbies</label>
          <Select
            {...register('hobbies')}
            isMulti
            options={options}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {editIndex >= 0 ? "Update" : "Submit"}
        </button>
      </form>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hobbies</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.city.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.hobbies?.map?.((hobby) => hobby.label).join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
