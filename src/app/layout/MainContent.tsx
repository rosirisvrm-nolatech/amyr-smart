'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DrawerHeader } from './sidebar/Sidebar';

type Props = {
    children: React.ReactNode;
}

export function MainContent({ children }: Props) {
  return (
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
  );
}