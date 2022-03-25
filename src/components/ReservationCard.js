import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Invoice from './invoice'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentBill, setCurrentBill } from '../store/slices/reservations-slice';
import { useNavigate } from 'react-router-dom';






export default function ReservationCard(props) {
    // console.log(props)
    const [showInvoice, setShowInvoice ]= useState(false)
    const {currentBill} = useSelector((state)=>state.reservations)
    const dispatch = useDispatch()
    const navigate =useNavigate();

    console.log("billupdated", currentBill)
    function updateBill(bill){
      console.log("jlskdf",bill)
      dispatch(setCurrentBill(bill))
    }


    
    useEffect(()=>{
      console.log(currentBill)
      if(currentBill.id){
        navigate('/invoice', { replace: true })
      }
    },[currentBill])
    

    if(showInvoice){
      return(
        <Invoice key={props.reservation.id} reservation={props.reservation}/>
      )
    }
  return (
    <Box sx={{ minWidth: 275 }}>
       
      <Card variant="outlined">

      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Reservation Card
      </Typography>
      <Typography variant="h5" component="div">
       Reservation Details
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Customer id : {props.reservation.user_id}
      </Typography>
      <Typography variant="body2">
        Reservation id : {props.reservation.id}
      </Typography>
      <Typography variant="body2">
        Reservation  number : {props.reservation.room_id}
      </Typography>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'end'}}>
      <Button size="small" key={props.reservation.id}  onClick={()=>updateBill(props.reservation.Bill)}  >Get Invoice</Button>
    </CardActions>
  </React.Fragment>


  {/* { showInvoice? <Invoice key={props.reservation.id} reservation={props.reservation}/>:<></>} */}
      </Card>
    </Box>
  );
}
