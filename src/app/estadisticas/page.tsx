'use client'
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/components/shared/PageContainer';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import { PrivateRoute } from "../components/shared/PrivateRoute";
import { MetricsIndicator } from '../components/dashboard/MetricsIndicator';
import type { MetricsIndicatorProps } from '../components/dashboard/MetricsIndicator';
import BarChart from '../components/dashboard/BarChart';

const metrics: MetricsIndicatorProps[] = [
  {
    icon: ArticleOutlinedIcon,
    title: 'ETAS',
    number: 2.081,
    unit: '',
  },
  {
    icon: DirectionsBoatOutlinedIcon,
    title: 'Buques',
    number: 150,
    unit: '',
  },
  {
    icon: ModeOfTravelOutlinedIcon,
    title: 'Rutas',
    number: 30,
    unit: '',
  },
];

const StatisticsPage = () => {

  return (
    <PrivateRoute>
      <PageContainer title="Estadísticas" description="Estadísticas">
        <Box>
          <Grid container spacing={3} sx={{ p: '40px 20px' }}>
            <Grid item xs={12}>
              <Typography variant="h2">
                Estadísticas
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                {metrics.length > 0 && metrics.map((item) => ( 
                  <React.Fragment key={item.title}>
                    <Grid item md={4} xs={12}>
                      <MetricsIndicator metrics={item} />
                    </Grid>
                  </React.Fragment>
                ))}    
              </Grid>
            </Grid>


            <Grid item xs={12}>
              <BarChart />
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default StatisticsPage;
