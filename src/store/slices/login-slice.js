import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


    
export const loginAsync = createAsyncThunk('login/loginAsync', async(payload)=>{

    console.log("loginasync",payload)

    const response = await axios.post(`http://127.0.0.1:3000/api/user/login`,{email:payload.email,password:payload.password})
    console.log(response)
    return response.data

    
})

const initialState = {
    user:{},
    loginResponse:false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        loggedIn:(state,{payload})=>{
            state.user= payload;
        }
    },
    extraReducers:{
        [loginAsync.pending]:()=>{
            console.log("Pending")
        },
        [loginAsync.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, user:payload,loginResponse:true}

        },
        [loginAsync.rejected]:()=>{
            console.log("Rejected");

        },
       
    }
})

export const getLoginResponse = (state)=>state.loginResponse
export default loginSlice.reducer;