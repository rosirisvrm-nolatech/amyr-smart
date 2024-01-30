import React from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { IconButton } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    color: theme.palette.text.secondary
  },
}));

const Notifications = () => {
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
        <StyledBadge 
          badgeContent={6} 
          color="secondary" 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <NotificationsOutlinedIcon />
        </StyledBadge>
      </IconButton>

      <Dialog
        fullWidth
        maxWidth='md'
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

export default Notifications;
