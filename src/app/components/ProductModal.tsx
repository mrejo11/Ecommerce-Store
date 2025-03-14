import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { closeModal, addToCart } from "@/store/modalSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";//remember for use next13+ otherwise next/Rouetr in next13-

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

function ProductModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, selectedProduct } = useSelector(
    (state: RootState) => state.productModal
  );

  const [isAdd, setIsAdd] = useState(false);
  const router=useRouter()

  useEffect(() => {
    setIsAdd(false);
  }, [isOpen]);

  if (!isOpen || !selectedProduct) return null;

  const handleAddtocart = () => {
    if(!isAdd){
      dispatch(addToCart(selectedProduct));
      setIsAdd(true);
    }else{
      router.push("/Cart")
    }

  };

  return (
    <motion.div
      className="fixed inset-0 z-10 bg-gray-800/80 flex justify-center items-center"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      onClick={() => dispatch(closeModal())}
    >
     
      <motion.div
        className="grid md:grid-cols-2 bg-white p-5 rounded-lg w-full max-w-10/12 h-screen md:h-[90vh]"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >       
        <div className=" md:flex items-center ">
          <Image
            src={selectedProduct.image}
            alt="product image"
            width={500}
            height={300}
           
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">
            {selectedProduct.title.slice(0, 100)}
          </h2>
          <p className="text-3xl mb-2 font-bold before:content-['$'] before:text-green-500">
            {selectedProduct.price}
          </p>
          <p>
            <span className="font-bold">Brand:</span> {selectedProduct.brand}
          </p>
          <p>
            <span className="font-bold">Moddel:</span> {selectedProduct.model}
          </p>
          <p>
            <span className="font-bold">Color:</span> {selectedProduct.color}
          </p>
          <h3 className="hidden md:flex md:text-xl font-bold mt-2">
            About this product:
          </h3>
          <p className="hidden md:flex text-gray-700 mb-2 md:truncat md:w-150">
            {selectedProduct.description.slice(0,550)}
          </p>
          <div className="flex gap-2">

            <Button
              className={`mt-2 rounded-2xl ${
                isAdd ? "bg-red-600 hover:bg-red-400" : ""
              }`}
              onClick={handleAddtocart}
            >
              <ShoppingBag />
              {isAdd ? "Go To Cart" : "Add To Cart"}
            </Button>
            
            {/* delete button */}
            <button
              className=" md:-translate-y-[480px] md:translate-x-[440px] bg-white text-red-600 px-4 py-2 rounded hover:bg-red-400 hover:text-white"
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
