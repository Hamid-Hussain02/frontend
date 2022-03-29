import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  {customAxios }  from '../../services/auth-header'




    
export const reservationsAsync = createAsyncThunk('reservations/reservationsAsync', async()=>{

    console.log("reservationsasync")

    const response = await customAxios.get(`${process.env.REACT_APP_BASE_URL}reservation/`,)
    console.log(response)
    // localStorage.setItem('token',response.data.token)
    return response.data

    
})

export const setCurrentBill = createAsyncThunk('reservations/setCurrentBill', async(payload)=>{

    console.log("reservationsasync")

    


    // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}reservation/`,{user_id,room_id,bill_id})
    console.log(payload)
    // localStorage.setItem('token',response.data.token)
    return payload

    
})

export const createReservation = createAsyncThunk('reservations/createReservation', async(payload)=>{
    

    console.log("reservationsasync")

    const { user_id, room_id, bill_id } = payload
    const response = await customAxios.post(`${process.env.REACT_APP_BASE_URL}reservation/create`,{user_id,room_id,bill_id})
    console.log(payload,response)
    // localStorage.setItem('token',response.data.token)
    return response.data

    
})

export const closeSnackbar = createAsyncThunk('reservations/closeSnackbar', async()=>{
    

    console.log("closeSnackbar")

    // const { user_id, room_id, bill_id } = payload
    // const response = await customAxios.post(`${process.env.REACT_APP_BASE_URL}reservation/create`,{user_id,room_id,bill_id})
    // console.log(payload,response)
    // localStorage.setItem('token',response.data.token)
    return 

    
})

export const switchComponent = createAsyncThunk('reservations/switchComponent', async(payload)=>{
    

    console.log("closeSnackbar",payload)

    // const { user_id, room_id, bill_id } = payload
    // const response = await customAxios.post(`${process.env.REACT_APP_BASE_URL}reservation/create`,{user_id,room_id,bill_id})
    // console.log(payload,response)
    // localStorage.setItem('token',response.data.token)
    return payload

    
})

const initialState = {
    reservations:[],
    loading:true,
    currentBill:{},
    createReservationResponse:false,
    allReservationComponent:true
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

        [createReservation.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, createReservationResponse:true}

        },

        [createReservation.pending]:()=>{
            console.log("Pending")
            
            // return {...state, currentBill:payload}

        },

        [createReservation.rejected]:()=>{
            console.log("Rejected")
            
            // return {...state, currentBill:payload}

        },

        [closeSnackbar.fulfilled]:()=>{
            console.log("Rejected")
            
            return {createReservationResponse:false}

        },

        [switchComponent.fulfilled]:(payload)=>{
            console.log("Rejected")
            
            return {allReservationComponent:payload}

        },
       
    }
})


export const getAllReservations = (state)=>state.reservations
export const getReservationsState = (state)=>state.loading
export const getCurrentBill = (state)=>state.currentBill
// export const getLoginResponse = (state)=>state.loginResponse
// export const getLogedInUser = (state)=>state.user
export default reservationsSlice.reducer;