'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { MainContent } from './MainContent';
import { EtaModalForm } from '../components/dashboard/EtaModalForm';

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();

  // -----------------------------------------------------------
  // Sidebar handlers

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // -----------------------------------------------------------
  // Eta modal form state and handlers

  const [openEtaForm, setOpenEtaForm] = React.useState(false);

  const handleOpenEtaForm = () => {
    setOpenEtaForm(true);
  };

  const handleCloseEtaForm = () => {
    setOpenEtaForm(false);
  };

  // -----------------------------------------------------------

  if(pathname === '/login' || pathname === '/recovery'){
    return children;
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', backgroundColor: '#fff' }}>
        <Header open={open} />
        <Sidebar 
          open={open} 
          handleDrawerOpen={handleDrawerOpen} 
          handleDrawerClose={handleDrawerClose} 
          handleOpenEtaForm={handleOpenEtaForm}
        />
        <MainContent>
          {children}
        </MainContent>
      </Box>
      
      <EtaModalForm 
        openEtaForm={openEtaForm}
        handleCloseEtaForm={handleCloseEtaForm}
      />
    </React.Fragment>
  );
}