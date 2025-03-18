import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User } from 'firebase/auth'; // اضافه کردن نوع User از Firebase

interface AuthState{
    email:string;
    password:string;
    isLogin:boolean;
    error:string;
    isLoading: boolean, 
    user: User|null, 
}

const initialState:AuthState={
    email:'',
    password:'',
    isLogin:true,
    error:'',
    isLoading:false,
    user: null, // اضافه شده برای ذخیره اطلاعات کاربر
}

export const authSlice=createSlice({
    name:"Authenticator",
    initialState,
    reducers:{
        setEmail(state,action:PayloadAction<string>){
            state.email=action.payload
        },
        setPassword(state,action:PayloadAction<string>){
            state.password=action.payload
        },
        setError(state,action:PayloadAction<string>){
            state.error=action.payload
        },
        setIsLogin(state,action:PayloadAction<boolean>){
            state.isLogin=action.payload
        },
        setIsLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload;
          },
          clearUser: (state) => {
            state.user = null;
          },
    }
})

export const {setEmail,setPassword,setError,setIsLogin,setIsLoading, clearUser}= authSlice.actions
export const authSliceReducer=authSlice.reducer