import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  {customAxios }  from '../../services/auth-header'





    
export const getUserReservation = createAsyncThunk('userReservation/getUserReservation', async(payload)=>{

    console.log("getuserreservation")

    const response = await customAxios.post(`${process.env.REACT_APP_BASE_URL}reservation/getUserReservation`,{user_id:payload})
    console.log(response)
    // localStorage.setItem('token',response.data.token)
    return response.data

    
})









const initialState = {
    reservation:{},
    loading:false
}

const customerSlice = createSlice({
    name: 'userReservation',
    initialState,
    reducers:{
        // loggedIn:(state,{payload})=>{
        //     state.user= payload;
        // }
    },
    extraReducers:{
        [getUserReservation.pending]:()=>{
            console.log("Pending")
        },
        [getUserReservation.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully",payload)
            
            return {...state, reservation:payload,loading:false}

        },
        [getUserReservation.rejected]:()=>{
            console.log("Rejected");
            return {loading:false}

        }
       
    }
})



// export const getReservationsState = (state)=>state.loading
// export const getCurrentBill = (state)=>state.currentBill
// export const getLoginResponse = (state)=>state.loginResponse
// export const getLogedInUser = (state)=>state.user
export default customerSlice.reducer;