import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    email:string;
    password:string;
    isLogin:boolean;
    error:string;
    isLoading: boolean, 
}

const initialState:AuthState={
    email:'',
    password:'',
    isLogin:true,
    error:'',
    isLoading:false,
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
         }
       
})

export const {setEmail,setPassword,setError,setIsLogin,setIsLoading}= authSlice.actions
export const authSliceReducer=authSlice.reducer