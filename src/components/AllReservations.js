import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReservations, reservationsAsync, getReservationsState } from '../store/slices/reservations-slice';
import ReservationCard from './ReservationCard'
import Box from '@mui/material/Box';


import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const AllReservations =()=>{

    const dispatch=useDispatch()
    // const [isLoading,setIsLoading]=useState(true)
    const reservations = useSelector(getAllReservations)
    const isLoading = useSelector(getReservationsState)
    console.log(reservations,isLoading)
    

    useEffect(()=>{
        console.log("useeffect")  
        dispatch(reservationsAsync())
    },[dispatch]);

    
    if(!reservations.reservations.length){
        console.log("jfldskf")
        return(
            <div>
                Loading...
            </div>
        )
    }
//    const renderReservations=()=>{
//         return reservations.length>1? reservations.map((reservation)=>{<ReservationCard reservation={reservation}/>}):'Not Found';
//     };


    return(
        <Box >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {/* <ReservationCard/> */}
                {reservations.reservations.map((reservation)=>
                  <Grid item xs={4}>
                  <ReservationCard key={reservation.id} reservation={reservation}/>
                </Grid>
                )}
                </Grid>
            </Box>
        </Box>
    )
}

export default AllReservations