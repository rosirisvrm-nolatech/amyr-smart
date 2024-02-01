'use client'
import React from 'react';
import { Box, Typography, styled, useTheme } from '@mui/material';
import { IconInfoCircle } from "@tabler/icons-react";

const MetricContainer = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
    border: `solid 2px ${theme.palette.secondary.main}`,
    backgroundColor: 'transparent',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
}));

const MetricTitleRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export type MetricsIndicatorProps = {
    icon: any,
    title: string,
    number?: any,
    unit?: string,
}

const MetricsIndicator = ({ 
    metrics, 
    oilData = false, 
    children 
} : { 
    metrics: MetricsIndicatorProps, 
    oilData?: boolean,
    children?: any,
}) => {
  const theme = useTheme()
  const Icon = metrics?.icon;

  return (
    <MetricContainer>
        <MetricTitleRow>
            <Icon style={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight='700' variant="subtitle2" sx={{ mx: 1 }}>
                {metrics?.title}
            </Typography>
            <IconInfoCircle />
        </MetricTitleRow>

        {!oilData ?
            <MetricTitleRow sx={{ mt: 4 }}>
                <Typography fontWeight='700' variant="subtitle1" sx={{ fontSize: '24px', mr: 1 }}>
                    {metrics?.number}
                </Typography>
                <Typography fontWeight='400' variant="caption" sx={{ fontSize: '20px' }}>
                    {metrics?.unit}
                </Typography>
            </MetricTitleRow> :
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                {children}
            </Box>
        }
    </MetricContainer>           
  )
}

export { MetricsIndicator };