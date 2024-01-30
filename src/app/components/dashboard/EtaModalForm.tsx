'use client'
import * as React from 'react';
import { Grid, styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { ActionButton  } from './ActionButton';

const DialogStyled = styled(Dialog)(() => ({
  '.MuiDialog-paper': {
    borderRadius: 16,
    padding: '40px',
  }
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

type Props = {
    openEtaForm: boolean;
    handleCloseEtaForm: any;
}

function EtaModalForm({ openEtaForm, handleCloseEtaForm }: Props) {

  return (
     <DialogStyled
        fullWidth
        maxWidth='sm'
        open={openEtaForm}
        onClose={handleCloseEtaForm}
      >
        <DialogTitle sx={{ color: 'text.primary', textAlign: 'center', fontSize: 20 }}>
          Nuevo Plan ETA
        </DialogTitle>

        <DialogContent sx={{ px: 0 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BootstrapInput
                        id="planName"
                        name="planName"
                        type='text'
                    />
                </Grid>
            </Grid>
      
      
        </DialogContent>

        <DialogActions sx={{ p: 0 }}>
          <ActionButton onClick={handleCloseEtaForm}>
            Crear ETA
          </ActionButton>
        </DialogActions>
      </DialogStyled>
  );
}

export { EtaModalForm };