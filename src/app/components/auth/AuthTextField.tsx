import React from "react";
import { Controller } from 'react-hook-form';
import { Box, Typography } from "@mui/material";
import CustomTextField from "../form/theme-elements/CustomTextField";

type Props = {
  name: string,
  label: string,
  placeholder?: string,
  sx?: object,
  type?: string,
  inputProps?: any,
}

const AuthTextField = ({ name, label, placeholder = '', sx, type = 'text', inputProps }: Props) => {
  return (
    <Box sx={sx}>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        component="label"
        htmlFor={name}
        mb="5px"
      >
        {label}
      </Typography>
    
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <CustomTextField
            {...field}
            variant="outlined"
            fullWidth
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            helperText={error?.message}
            placeholder={placeholder}
            type={type}
            InputProps={inputProps || null}
          />
        )}
      />
    </Box>
  )
}

export { AuthTextField };