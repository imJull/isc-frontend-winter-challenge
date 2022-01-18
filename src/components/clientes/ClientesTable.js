
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ClientesTableList } from './ClientesTableList';

export const ClientesTable = ({cliente}) => {

  return (

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell align="left">Tipo</TableCell>
              <TableCell align="left">Identificaión</TableCell>
              <TableCell align="left">Telefono</TableCell>
              <TableCell align="left">Horario</TableCell>
              <TableCell align="center">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
              <ClientesTableList cliente={cliente} />
          
          </TableBody>
        </Table>
    </TableContainer>
   
  );
}