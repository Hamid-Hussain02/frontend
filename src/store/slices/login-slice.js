import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


    
export const loginAsync = createAsyncThunk('login/loginAsync', async(payload)=>{

    console.log("loginasync",payload)

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/login`,{email:payload.email,password:payload.password})
    console.log(response)
    localStorage.setItem('token',response.data.token)
    return response.data

    
})

const initialState = {
    user:{},
    loginResponse:false,
    token:'',
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
            
            return {...state, user:payload.user,token:payload.token,loginResponse:true}

        },
        [loginAsync.rejected]:()=>{
            console.log("Rejected");

        },
       
    }
})


export const getLoginResponse = (state)=>state.loginResponse
export const getLogedInUser = (state)=>state.user
export default loginSlice.reducer;