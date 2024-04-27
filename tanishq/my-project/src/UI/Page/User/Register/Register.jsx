import { TextInput } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate=useNavigate();

  return (
    <div className='m-8 flex justify-center items-center '>
        <div className='border-[1px] border-gray-300 w-[50%] m-8 flex justify-start p-8 flex-col gap-4'>
<p className='text-2xl'>Register</p>
<p className='text-gray-400'>If you have an account with us, please log in.</p>
<span className='flex items-center justify-between'>
    <label >NAME *</label>
    <p className='text-gray-400'>* Required Fields</p>
</span>
    <TextInput  type="text" required />

    <label >E-MAIL *</label>
    <TextInput  type="text" required />

    <label>PASSWORD *</label>
    <TextInput  type="password" required />
    
    <label>CONFORM PASSWORD *</label>
    <TextInput  type="password" required />

    <label>MOBAIL NUMBER *</label>
    <TextInput  type="number" required />

    

    <span className='flex items-center justify-between'>
    <button
                className="w-25 text-[#D11E33] border-[2px] border-[#D11E33] px-7 py-2 rounded-md font-medium bold hover:bg-[#D11E33] hover:text-white hover:ease-in duration-500"
              >
                REGISTER
              </button>
    <p className='text-[#d11e33cb]'>Lost your password?</p>
</span> 
<span className='flex gap-2'>
<p className='text-gray-400'>You Have Already Account? </p>
<p className='text-[#D11E33] cursor-pointer hover:border-b-2 border-[#D11E33]' 
onClick={() => navigate("/Login")}>Login</p>
</span>
        </div>
    </div>
  )
}
