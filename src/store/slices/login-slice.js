import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { customAxios } from '../../services/auth-header'


    
export const loginAsync = createAsyncThunk('login/loginAsync', async(payload)=>{

    console.log("loginasync",payload)

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/login`,{email:payload.email,password:payload.password})
    console.log(response)
    localStorage.setItem('token',response.data.token)
    return response.data

    
})



export const updateUser = createAsyncThunk('userReservation/updateUser', async(payload)=>{

    console.log("getuserreservation")

    const response = await customAxios.post(`${process.env.REACT_APP_BASE_URL}user/update`,{id:payload.id,name:payload.name,contact:payload.contact})
    console.log(response)
    // localStorage.setItem('token',response.data.token)
    return response.data

    
})

const initialState = {
    user:{},
    loginResponse:false,
    token:'',
    updateUserResponse:false
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


        [updateUser.pending]:()=>{
            console.log("Pending")
        },
        [updateUser.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, updateUserResponse:true}

        },
        [updateUser.rejected]:()=>{
            console.log("Rejected");
            return {updateUserResponse:false}

        }
       
    }
})


export const getLoginResponse = (state)=>state.loginResponse
export const getLogedInUser = (state)=>state.user
export default loginSlice.reducer;