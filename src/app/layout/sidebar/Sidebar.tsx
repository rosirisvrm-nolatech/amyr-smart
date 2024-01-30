'use client'
import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MuiButton from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SidebarItems from '../../layout/sidebar/SidebarItems';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(9)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(9)} + 1px)`,
  // },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  minHeight: '88px',
  // ...theme.mixins.toolbar,
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

const Button = styled(MuiButton)(({ theme }) => ({
  minWidth: '38px',
  borderRadius: '4px',
  transition: theme.transitions.create('padding', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  }
}));

type Props = {
    open: boolean;
    handleDrawerOpen: any;
    handleDrawerClose: any;
    handleOpenEtaForm: any;
}

export function Sidebar({ open, handleDrawerOpen, handleDrawerClose, handleOpenEtaForm }: Props) {

  const handleOpenETAModal = () => {
    handleOpenEtaForm()
  }

  return (
    <Drawer 
      variant="permanent" 
      open={open} 
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <DrawerHeader />

      <Box sx={{ p: open ? '44px 50px' : '44px 20px'}}>
        
        <Button 
          variant="contained" 
          disableElevation 
          color='primary'
          sx={{
            p: open ? '5px 20px 5px 10px' : '5px',
          }}
          onClick={handleOpenETAModal}
        >
          <AddCircleOutlineIcon sx={{ mr: open ? 2 : 0 }} />
          {open && 'Nuevo Plan ETA'}
        </Button>

        <Divider sx={{ my: '22px' }} />

        <SidebarItems open={open} />   

      </Box>
    </Drawer>
  );
}