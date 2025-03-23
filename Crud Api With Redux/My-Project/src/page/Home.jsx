import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addProductCart } from "../Redux/CartProductSlice";
import { toast } from "react-toastify";
import Loading from "./Loading";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export default function Home() {
  const dispatch = useDispatch();

  const { data: productData, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5000,
  });

  if (isLoading) return <h2><Loading/></h2>;
  if (isError) return <h2>Error fetching data!</h2>;

  const addHandler = (product) => {
    dispatch(addProductCart(product));
    toast.success("Product Added In Cart Successfully");
  };

  return (
    <div className="grid grid-cols-5 gap-5 p-8">
      {productData?.map((product) => (
        <div
          key={product.id}
          className="border h-[80%] flex justify-between flex-col items-center border-gray-300 rounded-md p-4"
        >
          <img src={product.image} alt="img" className="w-[80%] h-[50%]" />
          <h4 className="text-center">{product.title}</h4>
          <h5>Price : ${product.price}</h5>
          <button
            onClick={() => addHandler(product)}
            className="bg-violet-300 hover:bg-violet-400 transition delay-100 duration-200 ease-in-out px-4 py-1 mt-2 rounded cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
