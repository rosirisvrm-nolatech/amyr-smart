'use client'
import React, { useEffect, useState } from 'react';
import { 
  Button, 
  Box, 
  Typography, 
  Stack, 
  styled, 
  Divider, 
  Checkbox, 
  IconButton, 
  Popover, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  TableCell, 
  TableRow
} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputBase from '@mui/material/InputBase';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconList, IconChartLine } from '@tabler/icons-react';
import PageContainer from '@/app/components/shared/PageContainer';
import { PrivateRoute } from "../components/shared/PrivateRoute";
import TableComponent from '../components/dashboard/TableComponent';

const ExportButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: 0,
  padding: '15px 30px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const TabStyled = styled(Tab)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontWeight: 500,
}))

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: 'solid 1px #f1f1f1',
//     fontSize: 12,
//     padding: '6px 10px',
//     color: theme.palette.primary.main,
//     // transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     // fontFamily: [
//     //   '-apple-system',
//     //   'BlinkMacSystemFont',
//     //   '"Segoe UI"',
//     //   'Roboto',
//     //   '"Helvetica Neue"',
//     //   'Arial',
//     //   'sans-serif',
//     //   '"Apple Color Emoji"',
//     //   '"Segoe UI Emoji"',
//     //   '"Segoe UI Symbol"',
//     // ].join(','),
//     // '&:focus': {
//     //   borderRadius: 4,
//     //   borderColor: '#80bdff',
//     //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     // },
//   },
// }));

const StyledButton = styled(Button)(() => ({
  minWidth: '38px',
  borderRadius: '4px',
  padding: '5px',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `solid 1px ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

export interface Data {
  id: string;
  name: string;
  flag: any;
  picture: any;
  destinationPort: string;
  etaReport: string;
  status: string;
  checked: boolean;
}

const data: Data[] = [
  {
    id: '0',
    name: 'QUEEN MARY 3',
    flag: 'https://flagcdn.com/ve.svg',
    picture: 'https://definicion.de/wp-content/uploads/2012/10/buque-1.jpg',
    destinationPort: 'Belen, Brazil',
    etaReport: '523U6532',
    status: 'active',
    checked: false,
  },
  {
    id: '1',
    name: 'EVER GIVEN 1000',
    flag: "https://flagcdn.com/ve.svg",
    picture: 'https://www.legaltoday.com/wp-content/uploads/2021/03/BUQUE.jpg',
    destinationPort: 'Belen, Brazil',
    etaReport: '985G4754',
    status: 'complete',
    checked: false,
  },
  {
    id: '2',
    name: 'APOLO 2000',
    flag: 'https://flagcdn.com/br.svg',
    picture: 'https://revistamaritima.files.wordpress.com/2016/01/embargos.png?w=863&h=444',
    destinationPort: 'Belen, Brazil',
    etaReport: '77R643R',
    status: 'active',
    checked: false,
  },
  {
    id: '3',
    name: 'INTERMARINE OF THE SEAS',
    flag: 'https://flagcdn.com/br.svg',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-kenf_XtjmFDbd85Agaf49Nd_hoj5039cA&usqp=CAU',
    destinationPort: 'Belen, Brazil',
    etaReport: '6362E39U',
    status: 'complete',
    checked: false,
  },
];

const headers = [
  // 'Checkbox',
  'Bandera',
  'Nombre del buque',
  'Foto',
  'Puerto de destino',
  'Reporte ETA',
  // 'Actions',
]

const EtasPage = () => {
  const [value, setValue] = useState('1');
  const [listMode, setListMode] = React.useState(true);
  const [etas, setEtas] = useState(data)
  // const [loading, setLoading] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // const [select, setSelect] = React.useState('list');

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangeToList = () => {
    setListMode(true)
  }

  const handleChangeToChart = () => {
    setListMode(false)
  }

  // useEffect(() => {
    
  //   console.log('filterEtas :', filterEtas);
  //   setEtas(filterEtas)

  // }, [value])

    // const handleSelect = (event: { target: { value: string } }) => {
    //   setSelect(event.target.value);
    // };

  const filterEtas = value === '1' ? etas.filter(eta => eta.status === 'active') : etas.filter(eta => eta.status === 'complete')
  console.log('filterEtas :', filterEtas);

  return (
    <PrivateRoute>
      <PageContainer title="ETAS" description="ETAS">
        <Box sx={{ p: '40px 30px' }}>
          <Stack 
            direction="row" 
            justifyContent="space-between"
            alignItems="center"
            pb={4}
          >
            <Typography variant="h2">
              ETAS
            </Typography>

            <ExportButton 
              variant='contained' 
              color='secondary' 
              disableElevation
            >
              Exportar data
            </ExportButton>
          </Stack>

          <Divider />

          <Box pt={4} sx={{ width: '100%', typography: 'body1', minHeight: 500 }}>
            <TabContext value={value}>

              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList 
                  onChange={handleChange} 
                  aria-label="lab API tabs example" 
                  textColor="primary" 
                  indicatorColor="secondary"
                >
                  <TabStyled label="Activos" value="1" />
                  <TabStyled label="Completados" value="2" />
                </TabList>
              </Box>
              
              {/* <TabPanel value="1" sx={{ px: 0 }}> */}

                {/* <Stack direction="row" alignItems="center" spacing={2}>
                  <InputLabel id="demo-customized-select-label" sx={{ fontWeight: 600 }}>Vista</InputLabel>

                  <FormControl sx={{ width: '142px' }} variant="standard">  
                    <Select
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={select}
                      onChange={handleSelect}
                      input={<BootstrapInput />}
                      IconComponent={ExpandMoreOutlinedIcon}
                    >
                      <MenuItem value='list'>Lista</MenuItem>
                      <MenuItem value='chart'>Gráfico</MenuItem>
                    </Select>
                  </FormControl>
                </Stack> */}

                <Stack direction="row" alignItems="center" justifyContent='end' spacing={2} sx={{ pt: 3 }}>  
                  <StyledButton 
                    variant="contained" 
                    disableElevation 
                    sx={{ 
                      color: listMode ? 'text.secondary' : 'primary.main',
                      backgroundColor: listMode ? 'secondary.main' : 'text.secondary',
                      '&:hover': {
                        color: listMode ? 'text.secondary' : 'primary.main',
                        backgroundColor: listMode ? 'secondary.main' : 'text.secondary',
                      }
                    }}
                    onClick={handleChangeToList}
                  >
                    <IconList />
                  </StyledButton>

                  {/* <StyledButton 
                    variant="contained" 
                    disableElevation 
                    color='secondary'
                    sx={{ 
                      color: listMode ? 'primary.main' : 'text.secondary',
                      backgroundColor: listMode ? 'text.secondary' : 'secondary.main',
                      '&:hover': {
                        color: listMode ? 'primary.main' : 'text.secondary',
                        backgroundColor: listMode ? 'text.secondary' : 'secondary.main',
                      }
                    }}
                    onClick={handleChangeToChart}
                  >
                    <IconChartLine />
                  </StyledButton> */}
                </Stack>
            
                {listMode ? 
                  <TableComponent 
                    headers={headers} 
                    data={filterEtas}
                    // loading={loading}
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
                            <img src={row.flag} style={{ width: 42, height: 28  }} />
                          </StyledTableCell>
                          
                          <StyledTableCell align='center'>  
                            <Typography variant="body1">
                              {row.name}
                            </Typography>
                          </StyledTableCell>

                          <StyledTableCell align='center'>
                            <img src={row.picture} style={{ width: '57px', height: '43px', borderRadius: '2px' }} />
                          </StyledTableCell>

                          <StyledTableCell align='center'>
                            <Typography variant="body1">
                              {row.destinationPort}
                            </Typography>
                          </StyledTableCell>

                          <StyledTableCell align='center'>
                            <Typography variant="body1">
                              {row.etaReport}
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
                  : 
                  <Box></Box>
                }
              {/* </TabPanel> */}

              {/* <TabPanel value="2">
                
              </TabPanel> */}
            </TabContext>
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
                  <ListItemText primary="Crear notificación" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleClose}>
                <ListItemButton>
                  <ListItemText primary="Ver en mapa" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleClose}>
                <ListItemButton>
                  <ListItemText primary="Ver detalles" />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </Box>
      </PageContainer>
    </PrivateRoute>
  )
}

export default EtasPage;
