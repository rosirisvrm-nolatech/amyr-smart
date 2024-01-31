'use client'
import React from 'react';
import { Grid, Box, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
import PageContainer from '@/app/components/shared/PageContainer';
import { PrivateRoute } from "../components/shared/PrivateRoute";
import { useAppSelector } from '../redux/hooks';

const PlanInformation = () => {
  const userAuth = useAppSelector(state => state.auth.user)
  console.log('userAuth dash:', userAuth);

  // const theme = useTheme()
  // const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <PrivateRoute>
      <PageContainer title="Plan Information" description="Plan Information">
        <Box sx={{ height: '800px' }}>
          <Grid container spacing={3} sx={{ p: '40px 20px' }}>
            <Grid item xs={12}>
              <Typography variant="h2">
                Información del plan
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default PlanInformation;