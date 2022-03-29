import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { createReservation , closeSnackbar} from '../store/slices/reservations-slice';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});






export default function OutlinedCard() {

    const {createReservationResponse}= useSelector((state)=>state.reservations)
    console.log(createReservationResponse)


    const dispatch= useDispatch()
        const validationSchema = yup.object({
        user_id: yup
          .string('User Id')
          .required('User Id is required'),
        room_id: yup
          .string('Room Number')
          .required('Room Number is required'),
        bill_id: yup
          .string('Bill Id')
          .required('Bill Id is required'),
      });
      
    
        const formik = useFormik({
          initialValues: {
            user_id: '',
            room_id: '',
            bill_id: ''
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            console.log("onsubmit")
            const {user_id,room_id, bill_id}=values
    
        console.log({
          user_id,
          room_id,
          bill_id
        });
        const reservationData={
          user_id,
          room_id,
          bill_id
        }
    
    
        //   dispatch(loginAsync(loginData))
        dispatch(createReservation(reservationData))
          },
        });


        const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log('handleclose')
    dispatch(closeSnackbar())
    setOpen(false);
  };

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("handlesubmit")
    }

    useEffect(()=>{
        if(createReservationResponse){
            handleClick()
        }
    },[createReservationResponse])

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            Close
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );


  return (
    <Box sx={{ minWidth: 275 }}  component="form" onSubmit={formik.handleSubmit} >
      <Card variant="outlined">
      
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'start'}}>
          {/* <Box component='form' onSubmit={handleSubmit}> */}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Make New Reservation
      </Typography>


      <TextField
          id="standard-required"
          label="Customer Id"
          name="user_id"
          
          variant="standard"
          value={formik.values.user_id}
          onChange={formik.handleChange}
          error={formik.touched.user_id && Boolean(formik.errors.user_id)}
          helperText={formik.touched.user_id && formik.errors.user_id}
        />

        <TextField
          id="standard-required"
          label="Room Id"
          name="room_id"
          
          variant="standard"
          value={formik.values.room_id}
          onChange={formik.handleChange}
          error={formik.touched.room_id && Boolean(formik.errors.room_id)}
          helperText={formik.touched.room_id && formik.errors.room_id}

        />
        
        <TextField
          id="standard-required"
          label="Bill Id"
          name="bill_id"
          
          variant="standard"
          value={formik.values.bill_id}
          onChange={formik.handleChange}
          error={formik.touched.bill_id && Boolean(formik.errors.bill_id)}
          helperText={formik.touched.bill_id && formik.errors.bill_id}
        />

        {/* <Box component="div" sx={{display:'flex', justifyContent:}}>
        <Button size="small" type="submit">Learn More</Button>
        </Box> */}
        {/* </Box> */}

        
    </CardContent>
    <CardActions sx={{display:'flex',justifyContent:'end'}}>
      <Button size="small" type="submit">Make Reservation</Button>
    </CardActions>
      
      </Card>

     

      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical:'top', horizontal:'right' }}


        autoHideDuration={6000}
        onClose={handleClose}
        message="Reservation Created"
        action={action}
      >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Reservation Created
  </Alert>
  </Snackbar>
    </Box>
  );
}
