import {
    Typography,
    Box,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableContainer,
    TableCell,
    styled,
  } from "@mui/material";
  import Loading from "../shared/Loading";
  
  const StyledTableHead = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));
  
  const TableComponent = ({
    data,
    headers,
    render,
    loading,
  }: {
    data: any,
    headers: any,
    render: any
    loading?: boolean,
  }) => {
  
    return (    
        <Box sx={{ overflow: "auto", mt: 6, mx: 5 }}>
          <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
            <TableContainer sx={{ 
                borderRadius: '6px',
                border: 'solid 1px #f1f1f1',
              }}>
                <Table sx={{ whiteSpace: "nowrap" }}>
  
  
                  <StyledTableHead>
                    <TableRow>
                      <TableCell align='center'>
                          
                      </TableCell>
                      {headers.map((header: any, index: any) => (
                        <TableCell key={header} align='center'>
                          <Typography variant="subtitle2" fontWeight={500} sx={{ color: 'text.secondary' }}>
                            {header}
                          </Typography>
                        </TableCell>
                      ))}
                      <TableCell align='center'>
                          
                      </TableCell>
                    </TableRow>
                  </StyledTableHead>
  
  
                  <TableBody>
                    {loading ? 
                      <Loading /> :
                      data.length > 0 && data.map((row: any, index: any) => render(row, index))
                    }
                  </TableBody>
                </Table>
            </TableContainer>
          </Box>
        </Box>
    );
  };
  
  export default TableComponent;
  