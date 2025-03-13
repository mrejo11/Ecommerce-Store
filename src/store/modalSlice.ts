import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";


interface ProductModalState{
    isOpen:boolean;
    selectedProduct:Product|null;
    cart:Product[];

}
const initialState:ProductModalState={
    isOpen:false,
    selectedProduct:null,
    cart:[],
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
        },
    }
})

export const {openModal,closeModal,addToCart}=ProductModalsSlice.actions;
export const ProductModalReducer=ProductModalsSlice.reducer;