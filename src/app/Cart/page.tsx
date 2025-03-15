'use client'
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";





export default function Cart() {

  // catch arry of product that add to cart state in the product modal component
  const cart=useSelector((state:RootState)=>state.productModal.cart)
  const router=useRouter()




const handleClick=()=>{
    router.push("/")
  }

  return (
<div className="relative container mx-auto p-5">
  <div className="w-full p-5 bg-gray-400/30 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col gap-4">
    <h1 className="text-3xl font-bold">Shopping Cart</h1>
    <button className="flex items-center gap-2 self-start border border-gray-400 px-3 py-1.5 text-sm text-slate-600 font-medium hover:border-black rounded-md transition-colors md:absolute md:right-5 md:bottom-2 cursor-pointer"
    onClick={handleClick}
    >
      <MoveLeft />
      <span className="hidden md:block">Continue Shopping</span>
    </button>
    {cart.length===0?(<p>The SHpping Bag IS Emty</p>) :(
      cart.map((product)=>{
        return <div key={product.id}>{product.title}</div>
      })
    )}
  </div>
</div>
  );
}
