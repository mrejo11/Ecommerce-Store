import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";

//for save arrys of product  in to cart page 
const loadCartFromStorage = (): Product[] => {
    if (typeof window !== "undefined") { //check if windows open in browser
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
};
interface ProductModalState {
    isOpen: boolean;
    selectedProduct: Product | null;
    cart: Product[];

}
const initialState: ProductModalState = {
    isOpen: false,
    selectedProduct: null,
    cart: loadCartFromStorage(),
}

export const ProductModalsSlice = createSlice({
    name: "productModal",
    initialState,
    reducers: {
        //open modal and selected product
        openModal(state, action: PayloadAction<Product>) {
            state.isOpen = true;
            state.selectedProduct = action.payload;
        },
        //close modal and reset cart
        closeModal(state) {
            state.isOpen = false
            state.selectedProduct = null
        },
        //add product to buy basket
        addToCart(state, action: PayloadAction<Product>) {
            state.cart.push(action.payload)
            //save product data after add product data in shopping cart
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeCart(state, action: PayloadAction<Product>) {
            state.cart = state.cart.filter((product) => {// bayad asighn konim ta arrayeh beroz beshe
                return product.id !== action.payload.id
            })
            //save new arry in localstorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
})

export const { openModal, closeModal, addToCart, removeCart } = ProductModalsSlice.actions;
export const ProductModalReducer = ProductModalsSlice.reducer;