'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';;
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Stack } from "@mui/material";
import Profile from '../../layout/header/Profile';
import Logo from '../../components/shared/Logo';
import Settings from '../../layout/header/Settings';
import Notifications from './Notifications';
import Search from '../../layout/header/Search';

// const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#1C1E25',
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

type Props = {
  open: boolean;
  isLogin?: boolean
}

export function Header({ open, isLogin = false }: Props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar>
          <Logo />
          <Box flexGrow={1} />
          {!isLogin && 
          <Stack spacing={1} direction="row" alignItems="center">
            <Search />
            <Notifications />
            <Settings />
            <Profile />
          </Stack>}
        </Toolbar>
      </AppBar>
    </>
  );
}