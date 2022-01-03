
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const CuentasTable = () => {

  return (

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell align="center">Condicion</TableCell>
            <TableCell align="center">Plazo de Vencimiento</TableCell>
            <TableCell align="center">Total Original</TableCell>
            <TableCell align="center">Total Abonos</TableCell>
            <TableCell align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            
         
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}