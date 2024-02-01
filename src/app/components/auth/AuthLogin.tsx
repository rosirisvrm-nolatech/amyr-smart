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
  // console.log('userAuth login:', userAuth);

  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Se requiere un usuario'),
    password: Yup.string().required('Se requiere una contraseña'),
  });

  const defaultValues = {
    username: '',
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
      // console.log('methods.getValues() :', methods.getValues());
      const { username, password } = methods.getValues()
      
      const loginResponse = await login({ username, password })
  
      if(loginResponse){
        dispatch(setAuth(loginResponse))
        setLoading(false)
      }
    }, 2000)
  }

  return(
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        {title && (
          <Typography fontWeight="500" variant="subtitle1" mb={3} sx={{ textAlign: 'center', fontSize: 18 }}>
            {title}
          </Typography>
        )}

        {subtext && 
          <Typography variant="subtitle2" mb={1} sx={{ textAlign: 'center', fontSize: 14 }}>
            {subtext}
          </Typography>
        }

        <Stack>
          <AuthTextField name='username' placeholder="Usuario" />

          <AuthTextField 
            name='password' 
            placeholder="Contraseña" 
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

        <Box mt={3}>
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
