"use client"
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormProvider as Form, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { AuthTextField } from "./AuthTextField";
import { login } from "@/app/redux/services/authService";
import { setAuth } from "@/app/redux/slices/authSlice"; 

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: string | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {

  const userAuth = useAppSelector(state => state.auth.user)
  console.log('userAuth login:', userAuth);

  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico debe ser una dirección de correo electrónico válida').required('El correo electronico es requerido'),
    password: Yup.string().required('Se requiere una contraseña'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
  
  const onSubmit = () => {
    setLoading(true)

    setTimeout(async () => {
      console.log('methods.getValues() :', methods.getValues());
      const { email: username, password } = methods.getValues()
      
      const loginResponse = await login({ username, password })
  
      if(loginResponse){
        dispatch(setAuth(loginResponse))
        setLoading(false)
      }
    }, 2000)
  }

  return(
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>

        {title && (
          <Typography fontWeight="400" variant="subtitle1" mb={1} sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        )}

        {subtext}

        <Stack>
          <AuthTextField name='email' label="Email" />

          <AuthTextField 
            name='password' 
            label="Contraseña" 
            sx={{ my: "25px" }} 
            type={showPassword ? 'text' : 'password'}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Box>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            size="large"
            fullWidth      
            type="submit"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'secondary.main'
              }
            }}
          >
            {!loading ? 'Iniciar sesión' : <CircularProgress size={24} sx={{ color: '#FFF' }} />}
          </Button>
        </Box>

        {subtitle}

      </form>
    </Form>
  )
};

export default AuthLogin;
