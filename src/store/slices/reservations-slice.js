import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


    
export const reservationsAsync = createAsyncThunk('reservations/reservationsAsync', async()=>{

    console.log("reservationsasync")

    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}reservation/`,)
    console.log(response)
    // localStorage.setItem('token',response.data.token)
    return response.data

    
})

export const setCurrentBill = createAsyncThunk('reservations/setCurrentBill', async(payload)=>{

    console.log("reservationsasync")


    // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}reservation/`,)
    console.log(payload)
    // localStorage.setItem('token',response.data.token)
    return payload

    
})

const initialState = {
    reservations:[],
    loading:true,
    currentBill:{}
}

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers:{
        // loggedIn:(state,{payload})=>{
        //     state.user= payload;
        // }
    },
    extraReducers:{
        [reservationsAsync.pending]:()=>{
            console.log("Pending")
        },
        [reservationsAsync.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, reservations:payload,loading:false}

        },
        [reservationsAsync.rejected]:()=>{
            console.log("Rejected");
            return {loading:false}

        },

        [setCurrentBill.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, currentBill:payload}

        },
       
    }
})


export const getAllReservations = (state)=>state.reservations
export const getReservationsState = (state)=>state.loading
export const getCurrentBill = (state)=>state.currentBill
// export const getLoginResponse = (state)=>state.loginResponse
// export const getLogedInUser = (state)=>state.user
export default reservationsSlice.reducer;