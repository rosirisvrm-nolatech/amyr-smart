'use client'
import React, { useState } from 'react';
import { Button, Box, Typography, Stack, styled, Divider, Checkbox, IconButton, Popover, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { TableCell, TableRow } from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PageContainer from '@/app/components/shared/PageContainer';
import { PrivateRoute } from "../components/shared/PrivateRoute";
import TableComponent from '../components/dashboard/TableComponent';

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: 0,
  padding: '15px 30px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `solid 1px ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

export interface Data {
  id: string;
  name: string;
  embarque: string;
  arribo: any;
  state: any;
  checked: boolean;
}

const data: Data[] = [
  {
    id: '0',
    name: 'Ruta',
    embarque: 'Lorem Ipsum',
    arribo: 'Sit Amet',
    state: 'Activo',
    checked: false,
  },
  {
    id: '1',
    name: 'Ruta',
    embarque: 'Lorem Ipsum',
    arribo: 'Sit Amet',
    state: 'Activo',
    checked: false,
  },
  {
    id: '2',
    name: 'Ruta',
    embarque: 'Lorem Ipsum',
    arribo: 'Sit Amet',
    state: 'Activo',
    checked: false,
  },
  {
    id: '3',
    name: 'Ruta',
    embarque: 'Lorem Ipsum',
    arribo: 'Sit Amet',
    state: 'Activo',
    checked: false,
  },
  {
    id: '4',
    name: 'Ruta',
    embarque: 'Lorem Ipsum',
    arribo: 'Sit Amet',
    state: 'Activo',
    checked: false,
  },
];

const headers = [
  // 'Checkbox',
  'Nombre de la ruta',
  'Puerto de embarque',
  'Puerto de arribo',
  'Estado',
  // 'Actions',
]

const RoutesPage = () => {
  const [etas, setEtas] = useState(data)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeCheckbox = (event: any, index: any) => {
    let newEtas: Data[] = [...etas]
    newEtas[index] = {
      ...newEtas[index],
      checked: event.target.checked
    };
    console.log('event.target.checked :', event.target.checked, index);
    setEtas(newEtas)
  };

  return (
    <PrivateRoute>
      <PageContainer title="Rutas" description="Rutas">
        <Box sx={{ p: '40px 30px' }}>
          <Stack 
            direction="row" 
            justifyContent="space-between"
            alignItems="center"
            pb={4}
            px={5}
          >
            <Typography variant="h2">
              Registro de rutas
            </Typography>

            <ActionButton 
              variant='contained' 
              color='secondary' 
              disableElevation
            >
              Nueva ruta
            </ActionButton>
          </Stack>

          <Divider />

          <Box pt={4} sx={{ width: '100%', typography: 'body1', minHeight: 500 }}>
                    
              <TableComponent 
                headers={headers} 
                data={etas}
                render={
                  (row: any, index: any) => {

                  return (
                    <TableRow key={row.id} sx={{ backgroundColor: row.checked ? '#f1f1f1' : 'transparent' }}>

                      <StyledTableCell align='center' sx={{ borderRight: 'solid 1px #f1f1f1' }}>
                        <Checkbox
                          sx={{ color: 'primary.main' }}
                          checked={row.checked}
                          onChange={() => handleChangeCheckbox(event, index)}
                        />
                      </StyledTableCell>
                      
                      <StyledTableCell align='center'>  
                        <Typography variant="body1" fontWeight={700}>
                          {row.name} #{index + 1}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell align='center'>
                        <Typography variant="body1">
                          {row.embarque}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell align='center'>
                        <Typography variant="body1">
                          {row.arribo}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell align='center'>
                        <Typography variant="body1">
                          {row.state}
                        </Typography>
                      </StyledTableCell>

                      <StyledTableCell align='center' sx={{ borderLeft: 'solid 1px #f1f1f1' }}>
                        <IconButton onClick={handleClick}>
                          <MoreVertOutlinedIcon />
                        </IconButton>
                      </StyledTableCell>
                    </TableRow>
                  )
                }}
              />
            
          </Box>

          <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClose}>
                  <ListItemText primary="Ver" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleClose}>
                <ListItemButton>
                  <ListItemText primary="Editar" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleClose}>
                <ListItemButton>
                  <ListItemText primary="Desactivar" />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default RoutesPage;