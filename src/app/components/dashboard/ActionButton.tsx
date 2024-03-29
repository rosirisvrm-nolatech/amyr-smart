import React from 'react'
import { Button, styled, CircularProgress } from '@mui/material';

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    borderRadius: 0,
    padding: '15px 30px',
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
    },
    '&:disabled': {
      color: theme.palette.text.secondary,
      backgroundColor: '#8c8c8c',
  },
  }));

type Props = {
    children: React.ReactNode;
    onClick?: any;
    type?: any;
    disabled?: boolean
}

function ActionButton({ children, onClick = null, type = 'button', disabled = false }: Props){
    return(
        <ButtonStyled onClick={onClick} type={type} disabled={disabled}>
            {children}
        </ButtonStyled>
    );
}

export { ActionButton };