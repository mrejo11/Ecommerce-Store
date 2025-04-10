"use client"
import CheckoutPage from "../components/CheckOutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCartTotal } from "../hooks/useTotalCart";
import ShowProductCheckout from "../components/ShowProductCheckout";
import { useRouter } from "next/navigation";
import {


} from "@/store/authSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

if(process.env.NEXT_PUBLIC_STRIPE_KEY=== undefined){
  throw new Error("NEXT_PUBLIC_STRIPE_KEY is not defined")
  
}
const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

export default function HomePayment(){
  const {  isLogin } = useSelector(
    (state: RootState) => state.authSlice
  );
  const router = useRouter();

  const amount=useCartTotal()

  useEffect(()=>{

    if(isLogin===false){
      router.push("/")
    }
  },[isLogin,router])

  if(isLogin===false){
    return null
  }
    return  (
        <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md">
          <div className="mb-10">
          <div><ShowProductCheckout /></div>
            <h1 className="text-4xl font-extrabold mb-2 font-mono">Grand Total</h1>
            <h2 className="text-2xl">
              <span className="font-bold"> ${amount}</span>
            </h2>
          </div>
    
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </main>
      );
}