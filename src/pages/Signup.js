import React from 'react'

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useFormik } from 'formik';
import * as yup from 'yup';



import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { signupAsync } from '../store/slices/signup-slice';

const theme = createTheme();

const Signup=()=>{

    
    const dispatch = useDispatch()
    const validationSchema = yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
      name: yup
        .string('Enter your name')
        .min(2, 'Name should be of minimum 2 characters length')
        .required('Name is required'),
      role: yup
        .string('Enter your role')
        .required('Role is required'),
      contact: yup
        .string('Enter your contact')
        .required('Contact is required'),
    });
    

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          name: '',
          role: '',
          contact:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          const {name,email,password,role,contact}=values


          console.log("jfldskfj")

        const signupData={
            name,
            role,
            email,
            password,
            contact,
        }

        dispatch(signupAsync(signupData))
        },
      });

    return(
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt:'5%'
          }}>

    <Card sx={{maxWidth:'600px'}}>
      <CardContent sx={{p:'10%'}}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="role"
              label="Role"
              name="role"
              autoComplete="role"
              autoFocus
              value={formik.values.role}
              onChange={formik.handleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact"
              name="contact"
              autoComplete="contact"
              autoFocus
              value={formik.values.contact}
              onChange={formik.handleChange}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
            />
            <Box   sx={{display:'flex', justifyContent:'space-between'}} >

            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
             <Box sx={{mt:'10px'}}>
                <Link href="/" variant="body2" >
                  {"Already have an account ? Log In"}
                </Link>
                </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container sx={{justifyContent:'end'}}>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account ? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </CardContent>
        </Card>

        </Box>
      
    )
}

export default Signup;