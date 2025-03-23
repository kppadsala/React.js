import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCart } from "../Redux/CartProductSlice";

export default function Cart() {
  const Cartitems = useSelector((state) => state.cart);

  const dispatch=useDispatch();

  const removeToCartHandler = (item) => {
    dispatch(removeProductCart({ id: item.id })); 
           toast.success("Product Added In Cart SuccesFully")
       
    
  };

  return (
    <div className="grid grid-cols-5 gap-5 p-8">
     {Cartitems?.map((items) => (
        <div key={items.id} className="border h-[80%] flex justify-between flex-col items-center border-gray-300 rounded-md p-4">
          <img src={items.image} alt="img" className="w-[80%] h-[50%] " />
          <h4 className='text-center'>{items.title}</h4>
          <h5>Price : ${items.price}</h5>
          <button onClick={()=>removeToCartHandler(items)} 
          className="bg-red-500 hover:bg-red-600 text-white transition delay-100 duration-200 ease-in-out px-4 py-1 mt-2 rounded cursor-pointer">Remove To Cart</button>
        </div>
      ))}
    </div>
  );
}
