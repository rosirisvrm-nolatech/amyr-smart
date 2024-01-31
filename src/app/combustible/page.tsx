'use client'
import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Stack, styled, Divider, Grid, CircularProgress } from '@mui/material';
import { IconDropCircle } from "@tabler/icons-react";
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PageContainer from '@/app/components/shared/PageContainer';
import { PrivateRoute } from "../components/shared/PrivateRoute";
import { MetricsIndicator } from '../components/dashboard/MetricsIndicator';
import { 
    useGetOilConsumptionQuery, 
    useGetOilConsumptionDistanceQuery, 
    useGetVenezuelaBrazilQuery, 
    useGetBrazilVenezuelaQuery,
    useGetOilConsumptionOilCostQuery
} from '../redux/services/oilApi';

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  borderRadius: 0,
  padding: '15px 30px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
  },
  '&:disabled': {
    color: theme.palette.text.secondary,
    backgroundColor: '#8c8c8c',
},
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  'label + &': {
    marginTop: theme.spacing(0.5),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    border: 'solid 1px #f2f3f5',
    fontSize: 16,
    padding: theme.spacing(2),
    color: '#8c8c8c',
    transition: theme.transitions.create(['border-color']),
    '&:focus': {
      borderColor: '#8c8c8c',
    },
    '&::placeholder': {
      color: '#8c8c8c',
    },
  },
}));

const TabStyled = styled(Tab)(({ theme }) => ({
    color: theme.palette.grey[400],
    fontWeight: 500,
}))

const OilPage = () => {
  const [distance, setDistance] = useState('');
  const [velocity, setVelocity] = useState('');
  const [cost, setCost] = useState('');
  const [calculate, setCalculate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState({
    icon: IconDropCircle,
    title: 'Consumo Aproximado',
    number: 0,
    unit: '',
  });
  const [sumary, setSumary] = useState({
    consumo_ultimo_viaje: 0,
    promedio_por_dia: 0,
    distancia_recorrida: 0,
    velocidad_promedio:0
  });
  const [metricsCost, setMetricsCost] = useState({
    consumo_aprox: 0,
    cost_aprox: 0,
  });
  const [tabs, setTabs] = useState('1');

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
    clearFields()
  };

  const { data: oilConsumption } = useGetOilConsumptionQuery({
    distance: parseInt(distance),
    speed: parseInt(velocity),
  })

  const { data: oilConsumptionDistance } = useGetOilConsumptionDistanceQuery({
    distance: parseInt(distance),
  })

  const { data: sumaryVenezuelaBrasil } = useGetVenezuelaBrazilQuery()

  const { data: sumaryBrasilVenezuela } = useGetBrazilVenezuelaQuery()

  const { data: oilConsumptionOilCost } = useGetOilConsumptionOilCostQuery({
    distance: parseInt(distance),
    speed: parseInt(velocity),
    cost: parseInt(cost),
  })

  useEffect(() => {
    if(calculate){
        setLoading(false)
        setCalculate(false)
    }

    if(calculate && tabs === '1'){
        setMetrics({
            ...metrics,
            number: oilConsumption ? oilConsumption['consumo_aprox TM'] : 0,
            unit: 'TM',
        })
    }else if(calculate && tabs === '2'){
        setMetrics({
            ...metrics,
            number: oilConsumptionDistance ? oilConsumptionDistance['consumo_aprox TM'] : 0,
            unit: 'TM',
        })
    }else if(calculate && tabs === '3'){
        setSumary({
            consumo_ultimo_viaje: sumaryVenezuelaBrasil ? sumaryVenezuelaBrasil?.consumo_ultimo_viaje : 0,
            promedio_por_dia: sumaryVenezuelaBrasil ? sumaryVenezuelaBrasil?.promedio_por_dia : 0,
            distancia_recorrida: sumaryVenezuelaBrasil ? sumaryVenezuelaBrasil?.distancia_recorrida : 0,
            velocidad_promedio:sumaryVenezuelaBrasil ? sumaryVenezuelaBrasil?.velocidad_promedio : 0
        })
    }else if(calculate && tabs === '4'){
        setSumary({
            consumo_ultimo_viaje: sumaryBrasilVenezuela ? sumaryBrasilVenezuela?.consumo_ultimo_viaje : 0,
            promedio_por_dia: sumaryBrasilVenezuela ? sumaryBrasilVenezuela?.promedio_por_dia : 0,
            distancia_recorrida: sumaryBrasilVenezuela ? sumaryBrasilVenezuela?.distancia_recorrida : 0,
            velocidad_promedio:sumaryBrasilVenezuela ? sumaryBrasilVenezuela?.velocidad_promedio : 0
        })
    }else if(calculate && tabs === '5'){
        setMetricsCost({
            consumo_aprox: oilConsumptionOilCost ? oilConsumptionOilCost?.consumo_aprox : 0,
            cost_aprox: oilConsumptionOilCost ? oilConsumptionOilCost['costo$'] : 0,
        })
    }
  }, [calculate])
 
  const handleDistance = (event: { target: { value: any } }) => {
    setDistance(event.target.value);
  };

  const handleVelocity = (event: { target: { value: any } }) => {
    setVelocity(event.target.value);
  };

  const handleCost = (event: { target: { value: any } }) => {
    setCost(event.target.value);
  };

  const calculateOilConsumption = () => {
    setLoading(true)
    setTimeout(() => {
        setCalculate(true)
    }, 1000)
  }

  const clearFields = () => {
    setDistance('')
    setVelocity('')
    setCost('')
    setMetrics({
        ...metrics,
        number: 0,
        unit: '',
    })
    setSumary({
        consumo_ultimo_viaje: 0,
        promedio_por_dia: 0,
        distancia_recorrida: 0,
        velocidad_promedio:0
    })
    setMetricsCost({
        consumo_aprox: 0,
        cost_aprox: 0,
    })
  }

  return (
    <PrivateRoute>
      <PageContainer title="Combustible" description="Combustible">
        <Box py={5}>

            <Box px={4}>
                <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    alignItems="center"
                    pb={4}
                >
                    <Typography variant="h2">
                        Combustible
                    </Typography>
                </Stack>
            </Box>

            <Divider />

            <Box pt={4} px={4} sx={{ width: '100%', typography: 'body1', minHeight: 500 }}>
                <TabContext value={tabs}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList 
                            onChange={handleChangeTabs} 
                            aria-label="lab API tabs example" 
                            textColor="primary" 
                            indicatorColor="secondary"
                        >
                            <TabStyled label="Distancia / Velocidad" value="1" />
                            <TabStyled label="Distancia" value="2" />
                            <TabStyled label="Venezuela a Brasil" value="3" />
                            <TabStyled label="Brasil a Venezuela" value="4" />
                            <TabStyled label="Costo de combustible" value="5" />
                        </TabList>
                    </Box>

                    <TabPanel value="1" sx={{ px: 0, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Consumo de combustible por <strong>Distancia y Velocidad</strong>
                                </Typography>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Calcula el consumo de combustible por distancia a recorrer y velocidad del buque
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>  
                                <Stack direction="column" spacing={4}>
                                    <Box>
                                        <InputLabel id="distance-label" sx={{ fontSize: 14 }}>Distancia</InputLabel>
                                        <BootstrapInput
                                            id="distance"
                                            name="distance"
                                            type='text'
                                            value={distance}
                                            onChange={handleDistance}
                                        />
                                    </Box>
                                    <Box>
                                        <InputLabel id="velocity-label" sx={{ fontSize: 14 }}>Velocidad</InputLabel>
                                        <BootstrapInput
                                            id="velocity"
                                            name="velocity"
                                            type='text'
                                            value={velocity}
                                            onChange={handleVelocity}
                                        />
                                    </Box>
                                    <ActionButton 
                                        onClick={calculateOilConsumption} 
                                        disabled={!distance || !velocity}
                                    >
                                        Calcular
                                    </ActionButton>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                                    
                                        {loading ? 
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                                                <CircularProgress color='secondary' />
                                            </Box> :
                                            <MetricsIndicator metrics={metrics} />
                                        }

                                        {(distance && velocity) && 
                                            <ActionButton onClick={clearFields} sx={{ mt: 6 }}>
                                                Limpiar
                                            </ActionButton>
                                        }
                                </Box>
                            </Grid>
                        </Grid>    
                    </TabPanel>

                    <TabPanel value="2" sx={{ px: 0, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Consumo de combustible por <strong>Distancia</strong>
                                </Typography>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Calcula el consumo de combustible por distancia a recorrer del buque
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>  
                                <Stack direction="column" spacing={4}>
                                    <Box>
                                        <InputLabel id="distance-label" sx={{ fontSize: 14 }}>Distancia</InputLabel>
                                        <BootstrapInput
                                            id="distance"
                                            name="distance"
                                            type='text'
                                            value={distance}
                                            onChange={handleDistance}
                                        />
                                    </Box>
                                    <ActionButton 
                                        onClick={calculateOilConsumption} 
                                        disabled={!distance}
                                    >
                                        Calcular
                                    </ActionButton>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                                    {loading ? 
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                                            <CircularProgress color='secondary' />
                                        </Box> :
                                        <MetricsIndicator metrics={metrics} />
                                    }

                                    {(distance) && 
                                        <ActionButton onClick={clearFields} sx={{ mt: 6 }}>
                                            Limpiar
                                        </ActionButton>
                                    }
                                </Box>
                            </Grid>
                        </Grid>  
                    </TabPanel>

                    <TabPanel value="3" sx={{ px: 0, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    <strong>Venezuela a Brasil</strong>
                                </Typography>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Obtén los datos históricos del consumo de combustible del último viaje
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>  
                                <ActionButton onClick={calculateOilConsumption} sx={{ width: '100%' }}>
                                    Consultar
                                </ActionButton>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                                    {loading ? 
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                                            <CircularProgress color='secondary' />
                                        </Box> :
                                        <MetricsIndicator oilData metrics={metrics}>
                                            {(sumary?.consumo_ultimo_viaje !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Consumo Ultimo Viaje: 
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.consumo_ultimo_viaje}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}

                                            {(sumary?.promedio_por_dia !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Promedio por dia:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.promedio_por_dia}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}

                                            {(sumary?.distancia_recorrida !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Distancia Recorrida:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.distancia_recorrida}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}

                                            {(sumary?.velocidad_promedio !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Velocidad promedio:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.velocidad_promedio}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}
                                        </MetricsIndicator>
                                    }

                                    {(sumary?.consumo_ultimo_viaje !== 0) && 
                                        <ActionButton onClick={clearFields} sx={{ mt: 3 }}>
                                            Limpiar
                                        </ActionButton>
                                    }
                                </Box>
                            </Grid>
                        </Grid>  
                    </TabPanel>

                    <TabPanel value="4" sx={{ px: 0, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    <strong>Brasil a Venezuela</strong>
                                </Typography>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Obtén los datos históricos del consumo de combustible del último viaje
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>  
                                <ActionButton onClick={calculateOilConsumption} sx={{ width: '100%' }}>
                                    Consultar
                                </ActionButton>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                                    {loading ? 
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                                            <CircularProgress color='secondary' />
                                        </Box> :
                                        <MetricsIndicator oilData metrics={metrics}>
                                            {(sumary?.consumo_ultimo_viaje !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Consumo Ultimo Viaje: 
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.consumo_ultimo_viaje}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}


                                            {(sumary?.promedio_por_dia !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Promedio por dia:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.promedio_por_dia}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}

                                            {(sumary?.distancia_recorrida !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Distancia Recorrida:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.distancia_recorrida}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}

                                            {(sumary?.velocidad_promedio !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Velocidad promedio:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {sumary?.velocidad_promedio}
                                                    </Typography>
                                                    {/* <Typography fontWeight='400' variant="caption">
                                                        unit
                                                    </Typography> */}
                                                </Stack>
                                            )}
                                            
                                        </MetricsIndicator>
                                    }

                                    {(sumary?.consumo_ultimo_viaje !== 0) && 
                                        <ActionButton onClick={clearFields} sx={{ mt: 3 }}>
                                            Limpiar
                                        </ActionButton>
                                    }
                                </Box>
                            </Grid>
                        </Grid>  
                    </TabPanel>

                    <TabPanel value="5" sx={{ px: 0, pt: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    Costo de combustible según <strong>Precio de Combustible</strong>
                                </Typography>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    Calcula el costo de combustible por distancia a recorrer, velocidad del buque y precio del combustible
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>  
                                <Stack direction="column" spacing={4}>
                                    <Box>
                                        <InputLabel id="distance-label" sx={{ fontSize: 14 }}>Distancia</InputLabel>
                                        <BootstrapInput
                                            id="distance"
                                            name="distance"
                                            type='text'
                                            value={distance}
                                            onChange={handleDistance}
                                        />
                                    </Box>
                                    <Box>
                                        <InputLabel id="velocity-label" sx={{ fontSize: 14 }}>Velocidad</InputLabel>
                                        <BootstrapInput
                                            id="velocity"
                                            name="velocity"
                                            type='text'
                                            value={velocity}
                                            onChange={handleVelocity}
                                        />
                                    </Box>
                                    <Box>
                                        <InputLabel id="velocity-label" sx={{ fontSize: 14 }}>Costo</InputLabel>
                                        <BootstrapInput
                                            id="cost"
                                            name="cost"
                                            type='text'
                                            value={cost}
                                            onChange={handleCost}
                                        />
                                    </Box>
                                    <ActionButton 
                                        onClick={calculateOilConsumption} 
                                        disabled={!distance || !velocity || !cost}
                                    >
                                        Calcular
                                    </ActionButton>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                                    
                                    {loading ? 
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                                            <CircularProgress color='secondary' />
                                        </Box> :
                                        <MetricsIndicator oilData metrics={metrics}>
                                            {(metricsCost?.consumo_aprox !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Consumo Aproximado:
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {metricsCost?.consumo_aprox}
                                                    </Typography>
                                                    <Typography fontWeight='400' variant="caption">
                                                        TM
                                                    </Typography>
                                                </Stack>
                                            )}

                                            {(metricsCost?.cost_aprox !== 0) && (
                                                <Stack direction="row" spacing={2} alignItems='center'>
                                                    <Typography variant="subtitle1" fontWeight='700'>
                                                        Costo aproximado:
                                                    </Typography>
                                                    <Typography fontWeight='400' variant="caption">
                                                        $
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        {metricsCost?.cost_aprox}
                                                    </Typography>
                                                </Stack>
                                            )}
                                        </MetricsIndicator>
                                    }

                                    {(distance && velocity && cost) && 
                                        <ActionButton onClick={clearFields} sx={{ mt: 6 }}>
                                            Limpiar
                                        </ActionButton>
                                    }
                                </Box>
                            </Grid>
                        </Grid>    
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default OilPage;
