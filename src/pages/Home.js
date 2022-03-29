import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import UserReservation from '../components/userReservation';
import UserInvoice from '../components/userInvoice'
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserReservation } from '../store/slices/cutomer-slice';
import UserProfile from '../components/userProfile'
// import '../assets/colors/colors.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const Home =()=> {





    const { user } = useSelector((state)=>state.login)
    console.log(user)
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()
    const { reservation}= useSelector((state)=>state.userReservation)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

    useEffect(()=>{
        dispatch(getUserReservation(user.id))
    },[])
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} sx={{height:'100vh'}}>
        <Grid item xs sx={{bgcolor:'white',margin:'auto'}}>

            



        <Grid item xs sx={{bgcolor:'white',margin:'auto', display:'flex', flexDirection:'row', justifyContent:'start' }}>
            <Grid item xs={4} sx={{bgcolor:'white',margin:'auto'}}>
            <HomeIcon color="primary" sx={{ fontSize:200 }} />

            </Grid>
            <Grid item xs={8} sx={{bgcolor:'white', }} my='auto'>

            <Typography sx={{  textTransform:'capitalize', textAlign:'start', fontWeight:'bold' }} variant="h6" color="primary" component='div' gutterBottom>
        Hi, {user.name} welcome to HMS.
      </Typography>

      <Typography sx={{  textAlign:'start',  }} variant="h8" color="text.secondary" component='div' gutterBottom>
        Here you can find your reservation details and your bill for that reservation.
      </Typography>

            </Grid>
        </Grid>
        

        <Box sx={{  display:'flex', justifyContent:'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My Reservation" {...a11yProps(0)} />
          <Tab label="Invoice" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />

        </Tabs>
      </Box>
          
        </Grid>
        <Divider orientation="vertical" flexItem sx={{mt:'50px',}}>
        <Typography sx={{  textAlign:'center', fontWeight:'bold'  }} variant="h8" color="primary" component='div' gutterBottom>
        HMS
      </Typography>
      <Typography sx={{  textAlign:'center',  }} variant="h8" color="text.secondary" component='div' gutterBottom>
        Hotel Management System
      </Typography>
      </Divider>
        <Grid item xs sx={{bgcolor:'white',margin:'auto'}}>




        <Box sx={{ width: '100%' }}>
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />

        </Tabs>
      </Box> */}
      <TabPanel value={value} index={0}>
       
        <UserReservation reservation={reservation} />
      </TabPanel>
      <TabPanel value={value} index={1}>
    
        <UserInvoice bill={reservation.Bill}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
    
        <UserProfile />
      </TabPanel>
      
        </Box>
          
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Home
