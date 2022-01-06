
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CuentasTableList } from './CuentasTableList';


export const CuentasTable = ({clientes}) => {

  return (

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell align="center">Condición</TableCell>
            <TableCell align="center">Plazo de Vencimiento</TableCell>
            <TableCell align="center">Total Original</TableCell>
            <TableCell align="center">Total Abonos</TableCell>
            <TableCell align="center">Saldo Restante</TableCell>
            <TableCell align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
        
         
            <CuentasTableList clientes={clientes} />
         
        
      </Table>
    </TableContainer>
   
  );
}