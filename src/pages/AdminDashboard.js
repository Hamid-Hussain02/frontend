import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ReservationTable from '../components/AllReservations.js.js'
import MakeReservation from '../components/MakeReservation';
import AllReservations from '../components/AllReservations.js.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { switchComponent } from '../store/slices/reservations-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import UserProfile from '../components/userProfile.js';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
let allReservation=true




const  MiniDrawer =()=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()
  const { allReservationComponent } = useSelector((state)=>state.reservations)
  console.log("allreservationcomponent",allReservationComponent)
  
  const dispatch = useDispatch()

  const [selectedComponent, setselectedComponent] = useState({
    value: 'allReservations',
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getRoute = ()=>{
    return allReservation? (<AllReservations/>):(<MakeReservation/>)
  }
  const changeContent = (text)=>{
    console.log(text)

    text=='All Reservations'?allReservation=true:allReservation=false
    console.log(allReservation)
    setOpen(!open)
  }

  // useEffect(()=>{
  //   console.log("useeffect",allReservation)
  //   return allReservation? (<AllReservations/>):(<MakeReservation/>)
  // },[allReservationComponent])


  const getSelectedComponent=()=>{
    return allReservationComponent? (<AllReservations/>):(<MakeReservation/>)
  }

  useEffect(()=>{
    console.log("useeffect",allReservationComponent)
    getSelectedComponent()
    
  },[allReservationComponent])

  const getComponent=(index)=>{
    console.log("getcomponent",index)
    let value=index==0?'allReservations':index==1?'makeReservation':'Profile'
    setselectedComponent({ ...selectedComponent, value });
    // dispatch(switchComponent(!allReservationComponent))
  }

  
  const logOut = ()=>{
    localStorage.clear()
    navigate('/',{replace:true})
  }
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{mt:'100px'}}  >
          {['All Reservations','Make Reservation', 'Profile'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              
             onClick={()=>getComponent(index)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}



<ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                mt:'60%'
              }}

              onClick={()=>logOut()}
              

            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {selectedComponent.value=='allReservations'?(<><ReservationTable/></>):selectedComponent.value=='makeReservation'?(<><MakeReservation/></>):(<><UserProfile/></>)}
        
        
      </Box>
    </Box>
  );
}



export default MiniDrawer
