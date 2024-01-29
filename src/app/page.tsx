'use client'
import React from 'react';
import { Grid, Box, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
import PageContainer from '@/app/components/shared/PageContainer';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { IconAlertOctagon, IconAlarmOff, IconAlarm } from "@tabler/icons-react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OilBarrelOutlinedIcon from '@mui/icons-material/OilBarrelOutlined';
import { PrivateRoute } from "./components/shared/PrivateRoute";
import Map from './components/dashboard/Map';
import { useAppSelector } from './redux/hooks';
import { MetricsIndicator } from './components/dashboard/MetricsIndicator';
import type { MetricsIndicatorProps } from './components/dashboard/MetricsIndicator';

const MapTitle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '16px 24px',
}));

const metrics: MetricsIndicatorProps[] = [
  {
    icon: ArticleOutlinedIcon,
    title: 'ETAS activos',
    number: 3,
    unit: '',
  },
  {
    icon: IconAlarmOff,
    title: 'ETAS en retrazo',
    number: 0,
    unit: '',
  },
  {
    icon: IconAlarm,
    title: 'Entregas a tiempo',
    number: 95,
    unit: '%',
  },
  {
    icon: CalendarMonthIcon,
    title: 'Tiempo viaje promedio',
    number: 43.5,
    unit: 'días',
  },
  {
    icon: OilBarrelOutlinedIcon,
    title: 'Combustible diario',
    number: 158.51,
    unit: 'tons',
  },
  {
    icon: IconAlertOctagon,
    title: 'Procesos reportados',
    number: 5,
    unit: '',
  }
];

const Dashboard = () => {
  const userAuth = useAppSelector(state => state.auth.user)
  console.log('userAuth dash:', userAuth);

  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <PrivateRoute>
      <PageContainer title="Dashboard" description="Dashboard">
        <Box>
          <Grid container spacing={3} sx={{ p: '40px 20px' }}>
            <Grid item xs={12}>
              <Typography variant="h2">
                Bienvenido
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Administra las programaciones de los planes ETAS de tus buques.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5">
                Métricas de hoy
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                {metrics.length > 0 && metrics.map((item, index) => ( 
                  <React.Fragment key={item.title}>
                    {(index === 3 && mdUp) && 
                      <Grid item md={3} sm={1} xs={12}>
                      </Grid>
                    }

                    <Grid item md={3} sm={5} xs={12}>
                      <MetricsIndicator metrics={item} />
                    </Grid>
                  </React.Fragment>
                ))}    
              </Grid>
            </Grid>
          </Grid>

          <Box>
            <MapTitle>
              <Typography variant="subtitle1" color="text.secondary">
                Map
              </Typography>
            </MapTitle>
            <Map />
          </Box>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default Dashboard;