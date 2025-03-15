"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeCart } from "@/store/modalSlice";
import { Product } from "@/type";
// import { useState } from "react";
import Image from "next/image";
export default function CartList() {
  const cart = useSelector((state: RootState) => state.productModal.cart);
  const dispatch = useDispatch<AppDispatch>();
// const [count,setCount]=useState(0)

  const handleRemoveCart = (product: Product) => {
    dispatch(removeCart(product));
  };

//   const handleClick=()=>{
//     setCount(count+1)
//   }

return (
    <div className="flex flex-col md:flex-row w-full max-w-3xl mt-6 gap-4">
      <div className="flex-1">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center text-left p-2 shadow-lg bg-gray-200 rounded-xl mb-4"
          >
            <span>
              <Image
                src={product.image}
                alt="productPicture"
                width={100}
                height={100}
              />
            </span>
            <div>
              <span className="font-bold">
                {product.title.slice(0, 50)}
              </span>
              <p className="text-gray-500">color: {product.color}</p>
              <p className="text-gray-500">price: ${product.price}</p>
            </div>
            <button
              onClick={() => handleRemoveCart(product)}
              className="border p-2 text-white bg-red-500 rounded-lg hover:bg-red-700 font-medium cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex">
        Order Summary
      </div>
    </div>
  );
}  
