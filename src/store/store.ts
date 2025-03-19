import { configureStore } from "@reduxjs/toolkit";
import { productFilterReducer } from "./sortSlice";
import { ProductModalReducer } from "./modalSlice";
import { authSliceReducer } from "./authSlice";



export const store = configureStore({
  reducer: {
    productFilters: productFilterReducer,
    productModal: ProductModalReducer,
    authSlice: authSliceReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;