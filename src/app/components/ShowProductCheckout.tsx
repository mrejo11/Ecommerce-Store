"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeCart } from "@/store/modalSlice";
import { Product } from "@/type";
// import { useRouter } from "next/navigation";
import Image from "next/image";


export default function CartList() {
  const cart = useSelector((state: RootState) => state.productModal.cart);
    // catch isLogin from authSlice
    const isLogin = useSelector((state: RootState) => state.authSlice.isLogin);
   console.log("isLogin in CartList:", isLogin); // 
    const dispatch = useDispatch<AppDispatch>();


  const handleRemoveCart = (product: Product) => dispatch(removeCart(product));




  return (
    <div className="container mx-auto p-4">
      {/* product list cart */}
      <div className="col-span-8 mt-4 md:max-h-[80vh] overflow-auto custom-scrollbar-hide">
      <h1 className="text-2xl font-mono mb-4 font-bold">Shopping cart overview</h1>
        {cart.length ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between p-2 bg-gray-200 rounded-xl shadow-lg mb-4"
            >
              <Image
                src={product.image}
                alt="productPicture"
                width={100}
                height={100}
                className="object-cover"
              />
              <div className="text-center md:text-left my-2 md:my-0">
                <span className="font-bold">{product.title.slice(0, 50)}</span>
                <p className="text-gray-500">Color: {product.color}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
              </div>
              <button
                onClick={() => handleRemoveCart(product)}
                className="mt-2 md:mt-0 px-2 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Cart is empty</p>
        )}
      </div>
    </div>
  );
}
