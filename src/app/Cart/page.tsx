"use client";
import { useRouter } from "next/navigation";
import { MoveLeft, ShoppingBasket } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CartList from '../components/CartList'

export default function Cart() {
  // catch arry of product that add to cart state in the product modal component
  const cart = useSelector((state: RootState) => state.productModal.cart);
  const router = useRouter();
  

  const handleClick = () => {
    router.push("/");
  };


  return (
    <div className="relative container mx-auto p-5">
      <div className="w-full p-5 bg-gray-400/30 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
          Shopping Cart{" "}
          <span className="text-xs font-medium">({cart.length} items)</span>
        </h1>
        <button
          className="flex items-center gap-2 self-start border border-gray-400 px-3 py-1.5 text-sm text-slate-600 font-medium hover:border-black rounded-md transition-colors md:absolute md:right-5 md:bottom-2 cursor-pointer"
          onClick={handleClick}
        >
          <MoveLeft />
          <span className="hidden md:block">Continue Shopping</span>
        </button>
      </div>
      <div className="">
        {cart.length === 0 ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="flex flex-col items-center text-2xl">
              <ShoppingBasket className="mb-6 w-72 h-72 bg-gray-300 text-blue-500 rounded-full" />
              <span className="absolute flex justify-center -translate-x-16 w-12 h-12 bg-orange-600  rounded-full text-white  font-bold text-4xl ">
                0
              </span>
              <p>your cart is empty</p>
            </div>
          </div>
        ) : (
         <CartList/>
        )}
      </div>
    </div>
  );
}
