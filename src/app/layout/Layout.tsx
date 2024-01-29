'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { MainContent } from './MainContent';

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if(pathname === '/login' || pathname === '/register'){
    return children;
  }

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#fff' }}>
     <Header open={open} />
     <Sidebar 
      open={open} 
      handleDrawerOpen={handleDrawerOpen} 
      handleDrawerClose={handleDrawerClose} 
     />
     <MainContent>
      {children}
     </MainContent>
    </Box>
  );
}