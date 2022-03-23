import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import movieApi from '../../common/apis/movieApi'
// import { APIKey } from '../../common/apis/movieApiKey'
import axios from 'axios'


    
export const signupAsync = createAsyncThunk('signup/signupAsync', async(payload)=>{

    console.log("loginasync",payload)
    // const movieText = "Harry"
        // i=tt3896198&apikey=1efb613b

        const {email,name,role,contact,password}=payload
    const response = await axios.post(`http://127.0.0.1:3000/api/user/create`,{email,name,role,contact,password})
    console.log(response)
    return response.data
    // dispatch(addMovies(response.data))

    
})

// export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async()=>{


//     const seriesText = "Friends"
//         // i=tt3896198&apikey=1efb613b
//     const response = await movieApi.get(`?i=tt3896198&apikey=${APIKey}&s=${seriesText}&type=series`)
//     console.log(response)
//     return response.data
//     // dispatch(addMovies(response.data))

    
// })


const initialState = {
    user:{},
    signupResponse:false
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    // reducers:{
    //     loggedIn:(state,{payload})=>{
    //         state.user= payload;
    //     }
    // },
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
        // [fetchAsyncShows.fulfilled]:(state,{payload})=>{
        //     console.log("Fetched Successfully")
        //     return {...state, shows:payload}

        // },
    }
})

// export const {addMovies} = loginSlice.actions
// export const getAllMovies = (state)=>state.movies.movies
export const getsignupResponse = (state)=>state.signupResponse
export default signupSlice.reducer;