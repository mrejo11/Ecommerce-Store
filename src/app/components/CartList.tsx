"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeCart, updateProductQuantity } from "@/store/modalSlice";
import { Product } from "@/type";
import Image from "next/image";

export default function CartList() {
  const cart = useSelector((state: RootState) => state.productModal.cart);
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = cart
    .reduce((sum, product) => sum + product.price * (product.quantity ?? 1), 0)
    .toFixed(2);

  const handleRemoveCart = (product: Product) => dispatch(removeCart(product));
  const handleIncrement = (id: number, quantity: number) =>
    dispatch(
      updateProductQuantity({ productId: id, newQuantity: quantity + 1 })
    );
  const handleDecrement = (id: number, quantity: number) => {
    if (quantity > 1)
      dispatch(
        updateProductQuantity({ productId: id, newQuantity: quantity - 1 })
      );
  };

  return (
    <div className="container mx-auto p-4 md:grid md:grid-cols-12 md:gap-4">
      {/* product list cart */}
      <div className="col-span-8 mt-4 md:max-h-[80vh] overflow-auto custom-scrollbar-hide">
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
              <div className="flex items-center gap-1">
                <span
                  className="text-xl bg-gray-100 rounded-full w-6 h-6 flex justify-center cursor-pointer"
                  onClick={() =>
                    handleDecrement(product.id, product.quantity ?? 1)
                  }
                >
                  -
                </span>
                <input
                  type="number"
                  className="w-10 bg-white border border-black rounded-2xl text-center"
                  value={product.quantity ?? 1}
                  readOnly
                />
                <span
                  className="text-xl bg-gray-100 rounded-full w-6 h-6 flex justify-center cursor-pointer"
                  onClick={() =>
                    handleIncrement(product.id, product.quantity ?? 1)
                  }
                >
                  +
                </span>
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

      {/*  order summary */}
      <div className="mt-4 md:mt-0 md:col-span-4 md:sticky md:top-4 bg-gray-100 p-4 rounded-xl shadow-lg w-full md:w-80 h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <p className="text-gray-600">Total items: {cart.length}</p>
        <p className="text-gray-600">Total price: ${totalPrice}</p>
      </div>
    </div>
  );
}
