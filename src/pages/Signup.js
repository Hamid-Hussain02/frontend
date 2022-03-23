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


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { signupAsync } from '../store/slices/signup-slice';

const theme = createTheme();

const Signup=()=>{

    
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        console.log("jfldskfj")
        event.preventDefault();
        const data = new FormData(event.currentTarget); 
        const signupData={
            name:data.get('name'),
            role: data.get('role'),
            email: data.get('email'),
            password: data.get('password'),
            contact: data.get('contact'),
        }

        dispatch(signupAsync(signupData))
      };
      

      

    
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
      {/* <CardMedia
        component="img"
        height="50"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent sx={{p:'10%'}}>




          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
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
              Sign In
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
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

        </Box>
      
    )
}

export default Signup;