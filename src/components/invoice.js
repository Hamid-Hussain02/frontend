import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { useSelector } from 'react-redux';
import { getCurrentBill } from '../store/slices/reservations-slice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




export default function BasicCard() {


  const {currentBill} = useSelector((state)=>state.reservations)
  console.log(currentBill)


  const getDate = (date)=> {
    return new Date(date).toLocaleDateString()
}

  return (
    <Box component={'div'}
    sx={{display:'flex',  flexDirection:'column', alignItems:'center', mt:'5%'}}>
    <Card sx={{ width: 500 }}>

    <CardHeader sx={{bgcolor:'#1976d2',height:'50px', color:'white'}}
    title="Reservation Invoice"
        
      ></CardHeader>
      <CardContent>


 
             
                <Table sx={{  }} aria-label="caption table">

                <caption>Thank you. Have a nice day...!</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>Invoice</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow key={currentBill.id}>
              <TableCell component="th" scope="row">
                {'Customer Id'}
              </TableCell>
              <TableCell align="right">{currentBill.customer_id}</TableCell>

            </TableRow>
  
            <TableRow key={currentBill.reservation_id}>
              <TableCell component="th" scope="row">
                {'Reservation Id'}
              </TableCell>
              <TableCell align="right">{currentBill.reservation_id}</TableCell>


            </TableRow>


            <TableRow key={currentBill.createdAt}>
              <TableCell component="th" scope="row">
                {'Date'}
              </TableCell>
              <TableCell align="right">{getDate(currentBill.createdAt)}</TableCell>


            </TableRow>

            

            <TableRow key={currentBill.amount}>
              <TableCell component="th" scope="row">
                {'Amount'}
              </TableCell>
              <TableCell align="right">${currentBill.amount}</TableCell>


            </TableRow>


          
        </TableBody>
      </Table>
      </CardContent>
      
    </Card>


    
    </Box>
  );
}
