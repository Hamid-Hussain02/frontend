import React, { useEffect } from 'react'

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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/slices/login-slice';
import { useNavigate } from 'react-router-dom';
import { getLoginResponse } from '../store/slices/login-slice';

import { flexbox } from '@mui/system';


const theme = createTheme();

const Login=()=>{
  
  const dispatch= useDispatch()
  const navigate =useNavigate();
  const {loginResponse} = useSelector((state)=>state.login)
  const {user} = useSelector((state)=>state.login)
  console.log(loginResponse,user, useSelector((state)=>state.login))
  
  const handleSubmit = (event) => {
    console.log("jfldskfj")
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const loginData={
      email: data.get('email'),
      password: data.get('password'),
    }


      dispatch(loginAsync(loginData))
      
  
  };

  useEffect(()=>{
    console.log(loginResponse)
    if(loginResponse){

      user.role =='admin'?navigate('/admin-dashboard', { replace: true }):navigate('/home', { replace: true })
    }
    
  },[loginResponse])
    
    return(
      //   <ThemeProvider  theme={theme}>
      // <Container component="main" maxWidth="xs">
      //   <CssBaseline />

      
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            {/* <LockOutlinedIcon /> */}
          {/* </Avatar> */}

          <Card >
      {/* <CardMedia
        component="img"
        height="50"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent sx={{p:'10%'}}>

          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form"   onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Box sx={{display:'flex',  justifyContent:'space-between'}}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container sx={{justifyContent:'end'}}>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item >
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Box>


    //   </Container>
    // </ThemeProvider>
    )
}

export default Login;