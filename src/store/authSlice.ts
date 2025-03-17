import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User } from 'firebase/auth'; // اضافه کردن نوع User از Firebase

interface AuthState{
    email:string;
    password:string;
    isLogin:boolean;
    error:string;
    isAuthenticated: boolean, 
    user: User|null, 
}

const initialState:AuthState={
    email:'',
    password:'',
    isLogin:true,
    error:'',
    isAuthenticated: false, // اضافه شده برای ذخیره وضعیت ورود
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
        toggleIsLogin(state){
            state.isLogin=!state.isLogin
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
          },
          clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
          },
    }
})

export const {setEmail,setPassword,setError,toggleIsLogin,setUser, clearUser}= authSlice.actions
export const authSliceReducer=authSlice.reducer