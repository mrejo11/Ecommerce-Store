import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";

// تابع برای گرفتن سبد خرید از localStorage
const loadCartFromStorage = (): Product[] => {
    if (typeof window !== "undefined") { // چک کردن اینکه توی مرورگر هستیم
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  };
interface ProductModalState{
    isOpen:boolean;
    selectedProduct:Product|null;
    cart:Product[];

}
const initialState:ProductModalState={
    isOpen:false,
    selectedProduct:null,
    cart:loadCartFromStorage(),
}

export const ProductModalsSlice=createSlice({
    name:"productModal",
    initialState,
    reducers:{
        //open modal and selected product
        openModal(state,action:PayloadAction<Product>){
            state.isOpen=true;
            state.selectedProduct=action.payload;
        },
        //close modal and reset cart
        closeModal(state){
            state.isOpen=false
            state.selectedProduct=null
        },
        //add product to buy basket
        addToCart(state,action:PayloadAction<Product>){
            state.cart.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    }
})

export const {openModal,closeModal,addToCart}=ProductModalsSlice.actions;
export const ProductModalReducer=ProductModalsSlice.reducer;