import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"; // persistStore رو اینجا اضافه کن
import storage from "redux-persist/lib/storage"; // پیش‌فرض localStorage
import { productFilterReducer } from "./sortSlice";
import { ProductModalReducer } from "./modalSlice";
import { authSliceReducer } from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    productFilters: productFilterReducer,
    productModal: ProductModalReducer,
    authSlice: persistedReducer,
  },
});

export const persistor = persistStore(store); // اینجا persistStore استفاده شده

// تایپ‌ها
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;