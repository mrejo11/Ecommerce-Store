"use client";

import { useState } from "react";
import getProduct from "../actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modalSlice";
import { AppDispatch } from "@/store/store";
import { Product } from "@/type";


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); // save input change
  const [isOpen, setIsOpen] = useState(false); // for open and close menu

   const dispatch = useDispatch<AppDispatch>();


      // handle click on product
    const handleProductClick = (product: Product) => {
      dispatch(openModal(product));  //show open modal window
      setIsOpen(false);
    };



  //fetch Data with usequery
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
    staleTime: 86400 * 1000,
  });

  //when user type in to input element
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true); // menue is open
    if(e.target.value.length===0)
        setIsOpen(false)
  };
  //producy fillter base on search term
  const filterProduct = products?.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  // close menu when mouse over the menu
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // isloading state
  if (isLoading) return <div> Loading ... </div>;

  //error handling
  if (error) return <div> error for data fetching </div>;

  return (
    <div className="flex items-center justify-center p-4 relative">
      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearchTerm}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* accordion menu  */}
      {isOpen && (filterProduct?.length ?? 0) > 0 && (
        <div
          className="absolute top-16 z-20 w-full bg-gray-300/80 border rounded-md shadow-lg max-h-80 text-xl overflow-y-auto mt-1"
          onMouseLeave={handleMouseLeave}
        >
          {filterProduct?.map((product) => (
            <div
              key={product.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={()=>handleProductClick(product)}
            >
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <div className="mr-2">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* message when product not found */}
      {isOpen && filterProduct?.length === 0 && searchTerm && (
        <div className="absolute z-20 w-full bg-white border rounded-md shadow-lg p-2 mt-1">
          <p className="text-gray-500">product not found</p>
        </div>
      )}
    </div>
  );
}
