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
import { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import CloseIcon from '@mui/icons-material/Close';
import { createReservation , closeSnackbar} from '../store/slices/reservations-slice';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/slices/login-slice';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const UserProfile=()=> {


  const {currentBill} = useSelector((state)=>state.reservations)
  const { user } = useSelector((state)=>state.login)
//   console.log(currentBill,props)
  const {updateUserResponse}= useSelector((state)=>state.login)
  

  console.log(updateUserResponse)
  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const validationSchema = yup.object({
    name: yup
      .string('Edit Name')
      .min(2, 'Name should be of minimum 6 characters length')
      .required('Name is required'),
    contact: yup
      .string('Edit Contact')
      .min(6, 'Contact should be of minimum 6 characters length')
      .required('Contact is required'),
  });
  

    const formik = useFormik({
      initialValues: {
        name: user.name,
        contact: user.contact,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("onsubmit")
        const {name,contact}=values

    console.log({
      name,
      contact
    });
    const userData={
      name,
      contact,
      id:user.id
    }


      dispatch(updateUser(userData))
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

  


      useEffect(()=>{
        if(updateUserResponse){
            handleClick()
        }
    },[updateUserResponse])

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
    <Box component={'div'}
    sx={{display:'flex',  flexDirection:'column', alignItems:'center'}}>
    <Card sx={{ width: 500 }}>

    <CardHeader sx={{bgcolor:'#1976d2',height:'50px', color:'white'}}
    title="User's Profile"
        
      ></CardHeader>
      <CardContent>

      <Box
      component="form"
      
      
      onSubmit={formik.handleSubmit}
    >



      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

      <Grid container spacing={2}>
        <Grid item xs={6} >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" value={user.name}/> */}
        <TextField
          label="Name"
          id="filled-size-small"
          variant="standard"
          size="small"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

{/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
            /> */}
        </Grid>
        <Grid item xs={6} >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <TextField
          label="Email"
          id="filled-size-small"
          variant="standard"
          size="small"
          value={user.email}
          InputProps={{
            readOnly: true,
          }}
        />
        </Grid>

        <Grid item xs={6} >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <TextField
          label="Contact"
          id="filled-size-small"
          variant="standard"
          size="small"
          name="contact"
          value={formik.values.contact}
          onChange={formik.handleChange}
          error={formik.touched.contact && Boolean(formik.errors.contact)}
          helperText={formik.touched.contact && formik.errors.contact}
        />
        </Grid>
        <Grid item xs={6} >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <TextField
          label="Role"
          id="filled-size-small"
          variant="standard"
          size="small"
          value={user.role}
          InputProps={{
            readOnly: true,
          }}
          disabled
        />
        
        </Grid>

        
      </Grid>




      <Grid container spacing={2} sx={{mt:'20px'}}>
        <Grid item xs={12}  textAlign='end'>
        
        <Button variant="contained"  type="submit" disableElevation>
         Save
        </Button>
        </Grid>
        

        
        </Grid>
      
    </Box>


 
             
                
      </CardContent>
      
    </Card>


    

    <Snackbar
        open={open}
        anchorOrigin={{ vertical:'top', horizontal:'right' }}


        autoHideDuration={6000}
        onClose={handleClose}
        message="Reservation Created"
        action={action}
      >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Profile Updated
  </Alert>
  </Snackbar>
    </Box>
  );
}

export default UserProfile
