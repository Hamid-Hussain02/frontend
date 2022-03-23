import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


    
export const signupAsync = createAsyncThunk('signup/signupAsync', async(payload)=>{

    console.log("loginasync",payload)

        const {email,name,role,contact,password}=payload
    const response = await axios.post(`http://127.0.0.1:3000/api/user/create`,{email,name,role,contact,password})
    console.log(response)
    return response.data

    
})

const initialState = {
    user:{},
    signupResponse:false
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    extraReducers:{
        [signupAsync.pending]:()=>{
            console.log("Pending")
        },
        [signupAsync.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, signupResponse:true}

        },
        [signupAsync.rejected]:()=>{
            console.log("Rejected");

        },
    }
})


export const getsignupResponse = (state)=>state.signupResponse
export default signupSlice.reducer;