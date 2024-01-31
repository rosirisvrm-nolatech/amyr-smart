'use client'
import * as React from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Grid, styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ActionButton } from './ActionButton';
import { CustomInput } from '../form/CustomInput';

const DialogStyled = styled(Dialog)(() => ({
  '.MuiDialog-paper': {
    borderRadius: 16,
    padding: '40px',
  }
}));

type Props = {
    openEtaForm: boolean;
    handleCloseEtaForm: any;
}

type DefaultValues = {
    planName: string;
    duration: string;
    startDate: string;
    route: string;
    alternateRoute: string;
    ship: string;
}

const routes = [
    {
        value: 0,
        label: 'Ruta 1 - Coordenadas de la ruta...',
    },
    {
        value: 1,
        label: 'Ruta 2 - Coordenadas de la ruta...',
    },
    {
        value: 2,
        label: 'Mejor ruta sugerida',
    }
]

const ships = [
    {
        value: 0,
        label: 'Buque 1',
    },
    {
        value: 1,
        label: 'Buque 2',
    },
    {
        value: 2,
        label: 'Buque 3',
    }
]

function EtaModalForm({ openEtaForm, handleCloseEtaForm }: Props) {

    const router = useRouter()

    const defaultValues: DefaultValues = {
        planName: '',
        duration: '',
        startDate: '',
        route: '',
        alternateRoute: '',
        ship: '',
    }

    const validations = {
        required: {
            value: true,
            message: 'El campo es requerido'
        }
    }

    const { 
        control, 
        handleSubmit, 
        formState: { errors },
        reset,
      } = useForm({ 
        defaultValues 
      });

    const onSubmit = (event: any) => {
        console.log('event ', event);  
        setTimeout(() => {
            router.push('/informacion-plan')
            onClose()
        }, 2000)
    }

    const onClose = () => {
        reset()
        handleCloseEtaForm()
    }

  return (
     <DialogStyled
        fullWidth
        maxWidth='sm'
        open={openEtaForm}
        onClose={onClose}
      >
        <DialogTitle variant='h4' sx={{ color: 'text.primary', textAlign: 'center', fontSize: 24, p: 0 }}>
          Nuevo Plan ETA
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent sx={{ px: 0 }}>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CustomInput
                            id="planName"
                            name="planName"
                            type='text'
                            placeholder='Nombre del plan'
                            control={control}
                            validations={validations}
                            isError={errors?.planName}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomInput
                            id="duration"
                            name="duration"
                            type='text'
                            placeholder='Duración'
                            control={control}
                            validations={validations}
                            isError={errors?.duration}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomInput
                            id="startDate"
                            name="startDate"
                            type='text'
                            placeholder='Fecha de inicio'
                            control={control}
                            validations={validations}
                            isError={errors?.startDate}
                            elementType='date'
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <CustomInput
                            id="route"
                            name="route"
                            placeholder='Ruta'
                            elementType='select'
                            control={control}
                            validations={validations}
                            isError={errors?.route}
                            selectOptions={routes}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomInput
                            id="alternateRoute"
                            name="alternateRoute"
                            placeholder='Ruta alterna'
                            elementType='select'
                            control={control}
                            validations={validations}
                            isError={errors?.alternateRoute}
                            selectOptions={routes}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomInput
                            id="ship"
                            name="ship"
                            placeholder='Buque'
                            elementType='select'
                            control={control}
                            validations={validations}
                            isError={errors?.ship}
                            selectOptions={ships}
                        />
                    </Grid>
                </Grid>
        
                
            </DialogContent>

            <DialogActions sx={{ pt: 3, pb: 0, px: 0 }}>
                <ActionButton type='submit'>
                    Crear ETA
                </ActionButton>
            </DialogActions>
        </form>
      </DialogStyled>
  );
}

export { EtaModalForm };