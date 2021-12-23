import React from 'react'
import {TableRow, TableCell} from '@mui/material';


export const ClientesTableList = ({cliente}) => {
  
    return (
        <>
            {
              cliente.map(cli => {
                const { nombre, tipo, identificacion, telefono, horario, estado} = cli;
                return(
                  <TableRow
                      key={identificacion}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{nombre}
                    </TableCell>
                    <TableCell align="right">{tipo}</TableCell>
                    <TableCell align="right">{identificacion}</TableCell>
                    <TableCell align="right">{telefono}</TableCell>
                    <TableCell align="right">{horario}</TableCell>
                    <TableCell align="right">{(estado) ? 'Activo' :'Inactivo' }</TableCell>
                  
                  </TableRow>
                )
              })
            }
        </>
    )
}
