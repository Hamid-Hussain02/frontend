import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// import { useSelector } from 'react-redux';
// import { getAllReservations } from '../store/slices/reservations-slice';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentBill, setCurrentBill } from '../store/slices/reservations-slice';
import { useNavigate } from 'react-router-dom';
import { getDialogContentTextUtilityClass } from '@mui/material';

import { getAllReservations, reservationsAsync, getReservationsState } from '../store/slices/reservations-slice';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const getDate = (date)=> {
    return new Date(date).toLocaleDateString()
}

export default function BasicTable() {
    const reservations = useSelector(getAllReservations)
    console.log(reservations)


    const [showInvoice, setShowInvoice ]= useState(false)
    const {currentBill} = useSelector((state)=>state.reservations)
    const dispatch = useDispatch()
    const navigate =useNavigate();

    console.log("billupdated", currentBill)
    function updateBill(bill){
      console.log("jlskdf",bill)
      dispatch(setCurrentBill(bill))
      navigate('/invoice')
    }


    useEffect(()=>{
        console.log("useeffect")  
        dispatch(reservationsAsync())
    },[dispatch]);

    // useEffect(()=>{
    //   console.log(currentBill)
    //   if(currentBill.id){
    //     // navigate('/home', { replace: true })
    //   }
    // },[currentBill])


    if(!reservations.reservations.length){
        console.log("jfldskf")
        return(
            <div>
                Loading...
            </div>
        )
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reservation Id</TableCell>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="center">Room Id</TableCell>
            <TableCell align="center">Bill Id</TableCell>
            <TableCell align="center">Invoice</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.reservations.map((reservation) => (
            <TableRow
              key={reservation.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {reservation.id}
              </TableCell>
              <TableCell align="right">{reservation.user_id}</TableCell>
              <TableCell align="center">{reservation.room_id?reservation.room_id:'-'}</TableCell>
              <TableCell align="center">{reservation.bill_id}</TableCell>
              <TableCell align="center"><Button variant="outlined" size="small" key={reservation.id} onClick={()=>updateBill(reservation.Bill)}>Invoice</Button></TableCell>
              <TableCell align="center">{getDate(reservation.createdAt)}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
