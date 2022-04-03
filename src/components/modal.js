import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, bgcolor:'#1976d2' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {


    const {currentBill} = useSelector((state)=>state.reservations)
  console.log(currentBill)


  const getDate = (date)=> {
    return new Date(date).toLocaleDateString()
}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Invoice
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        width="500px"

      >
        <BootstrapDialogTitle id="customized-dialog-title" sx={{color:'white'}} onClose={handleClose}>
          Invoice
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Table sx={{ width:'400px' }} aria-label="caption table">

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
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
