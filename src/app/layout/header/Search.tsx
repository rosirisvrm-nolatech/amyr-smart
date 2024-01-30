import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { IconButton } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Search = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        onClick={handleClickOpen}
      >
       <IconSearch />
      </IconButton>

      <Dialog
        fullWidth
        maxWidth='xl'
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle sx={{ 
          color: 'text.primary'
        }}>
          Notificaciones
        </DialogTitle> */}

        <DialogContent sx={{ height: 500 }}>

          {/* <DialogContentText sx={{ 
            color: 'text.primary'
          }}>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
      
        </DialogContent>

        {/* <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>



    </>
  );
};

export default Search;
