import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {TableRow, TableCell} from '@mui/material';

import './clientes.css';


export const ClientesTableList = ({ cliente }) => {
  
    return (
        <>
            {
              cliente.map(cli => {
                const { id, nombre, tipo, identificacion, telefono, horario, estado} = cli;
                return(
                  <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{nombre}
                    </TableCell>
                    <TableCell align="left">{tipo}</TableCell>
                    <TableCell align="left">{identificacion}</TableCell>
                    <TableCell align="left">{telefono}</TableCell>
                    <TableCell align="left">{horario}</TableCell>
                    <TableCell align="center">
                        {(estado) ? 
                            <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'green'}} /><span >Activo</span></div>
                            : 
                            <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:"red" }} /><span >Deshabilitado</span> </div> }
                        </TableCell>
                  
                  </TableRow>
                )
              })
            }
        </>
    )
}
