import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    email:string;
    password:string;
    isLogin:boolean;
    error:string;
    isLoading: boolean, 
    user:null
}

const initialState:AuthState={
    email:'',
    password:'',
    isLogin:false,
    error:'',
    isLoading:false,
    user:null
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
         setUser: (state, action) => {
            state.user = action.payload;
          },
          resetAuth(state) {
            // return to initialstate
            Object.assign(state, initialState);
        }
         }
       
})

export const {setEmail,setPassword,setError,setIsLogin,setIsLoading,setUser,resetAuth}= authSlice.actions
export const authSliceReducer=authSlice.reducer