
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { CuentasTableList } from './CuentasTableList';


export const CuentasTable = ({abonos, cuentasCobrar, }) => {

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clientes (Cuentas totales: {cuentasCobrar.length})</TableCell>
            <TableCell align="center">Condición</TableCell>
            <TableCell align="center">Plazo de Vencimiento</TableCell>
            <TableCell align="center">Total Original</TableCell>
            <TableCell align="center">Total Abonos</TableCell>
            <TableCell align="center">Saldo Restante</TableCell>
            <TableCell align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
      
            <CuentasTableList abonos={abonos} cuentasCobrar={cuentasCobrar}/>
          
      </Table>
    </TableContainer>
   
  );
}