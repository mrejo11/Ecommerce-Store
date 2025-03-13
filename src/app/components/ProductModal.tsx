import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { closeModal, addToCart } from "@/store/modalSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
};


function ProductModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, selectedProduct } = useSelector(
    (state: RootState) => state.productModal
  );

  if (!isOpen || !selectedProduct) return null;

  const handleAddtocart = () => {
    dispatch(addToCart(selectedProduct));
  };

  return (
    <motion.div
    className="fixed inset-0 z-10 bg-gray-800/80 flex justify-center items-center"
    initial="hidden"
    animate={isOpen ? "visible" : "hidden"}
    onClick={() => dispatch(closeModal())}
  >
    <motion.div
      className="grid md:grid-cols-2 bg-white p-5 rounded-lg w-full max-w-7xl h-screen md:h-3/4 mx-4"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={(e) => e.stopPropagation()}
    >

        <div>
          <Image
            src={selectedProduct.image}
            alt="product image"
            width={600}
            height={300}
            className=" sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
          <p>{selectedProduct.price}:</p>
          <p>{selectedProduct.brand}:</p>
          <p>{selectedProduct.model}:</p>
          <p>{selectedProduct.color}:</p>
          <h3 className="hidden md:flex">About this product:</h3>
          <p className="hidden md:flex text-gray-700 mb-2">
            {selectedProduct.description}
          </p>
          <div className="flex gap-2">
            <Button className="mt-2 rounded-2xl" onClick={handleAddtocart}>
              <ShoppingBag />
              Add to Cart
            </Button>
            <button
              className="absolute top-0 right-4 md:top-32 md:right-[320px] bg-white text-red-600 px-4 py-2 rounded hover:bg-red-400 hover:text-white"
              onClick={() => dispatch(closeModal())}
            >
              <X />
            </button>
          </div>
        </div>
    </motion.div>
    </motion.div>
  );
}

export default ProductModal;
