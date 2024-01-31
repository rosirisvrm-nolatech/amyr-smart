import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import { FormProvider as Form, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { register } from "@/app/redux/services/authService";
import { AuthTextField } from "./AuthTextField";

interface registerType {
    title?: string;
    subtitle?: string;
    subtext?: string;
  }

const AuthRecovery = ({ title, subtitle, subtext }: registerType) => {

  const userAuth = useAppSelector(state => state.auth.user)
  console.log('userAuth register:', userAuth);

  const router = useRouter()

  if(userAuth) {
    router.push('/')
  }

  const [loading, setLoading] = useState(false);

  const RegisterSchema = Yup.object().shape({
    // name: Yup.string().required('Se requiere un nombre'),
    email: Yup.string().email('El correo electrónico debe ser una dirección de correo electrónico válida').required('El correo electronico es requerido'),
    // password: Yup.string().required('Se requiere una contraseña'),
  });

  const defaultValues = {
    // name: '',
    email: '',
    // password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
  } = methods;
  
  const onSubmit = () => {
    setLoading(true)

    setTimeout(async () => {
      console.log('methods.getValues() :', methods.getValues());
      
      const registerResponse = await register(methods.getValues())
  
      if(registerResponse){

        router.push('/login')

        setLoading(false)
      }
    }, 2000)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>

        {title && (
          <Typography variant="subtitle1" mb={1} sx={{ textAlign: 'center', fontSize: 18 }}>
              {title}
          </Typography>
        )}

        {subtext && (
          <Box mx={8}>
            <Typography variant="subtitle2" mb={1} sx={{ textAlign: 'center', fontSize: 14 }}>
              {subtext}
            </Typography>
          </Box>
        )}

        <Box>
            <Stack mb={3}>
                {/* <AuthTextField name='name' label="Name" /> */}

                <AuthTextField name='email' label="Email" sx={{ mt: "25px" }} />
                
                {/* <AuthTextField name='password' label="Password" sx={{ mt: "25px" }} /> */}
            </Stack>
            <Button color="secondary" variant="contained" size="large" fullWidth type='submit' sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'secondary.main'
              }
            }}>
                {!loading ? 'Siguiente' : <CircularProgress size={24} sx={{ color: '#FFF' }} />}
            </Button>
        </Box>

        {subtitle}

      </form>
    </Form>
  );
}

export default AuthRecovery;
