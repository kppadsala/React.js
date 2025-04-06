import { useState } from "react";
import { useProductApi } from "../Services/product";

export default function Home() {
  const { data } = useProductApi();
  const [searchText, setSearchText] = useState("");

  const filteredProducts = data?.filter((product: any) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-5 bg-purple-300 min-h-screen">
      {/* 🔍 Search Input */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search product..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md px-4 py-1 rounded shadow border bg-white focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
      </div>

      {/* ✅ Show message if no products are found */}
      {filteredProducts?.length === 0 ? (
        <div className="flex items-center w-full justify-center">
          <h1 className="text-2xl font-bold text-gray-700">No products found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts?.map((product: any) => (
            <div key={product.id} className="border rounded p-4 shadow bg-white">
              <img src={product.image} alt={product.title} className="h-40 mx-auto mb-2" />
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-sm">{product.description.slice(0, 60)}...</p>
              <p className="mt-2 font-semibold text-green-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
