import React, {useState} from 'react'
import {TableRow, TableCell, Button} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CuentasAbonarBTN } from './CuentasAbonarBTN';

export const CuentasTableList = ({clientes}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


    return (
        <>
          {
            clientes.map(cli => {
              const { nombre, id, cuentas_por_cobrar } = cli;
              
              return (
                      
                   		<TableRow
                          key={id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <>
                          
                          {cuentas_por_cobrar.map(cc =>(
                            <>
                            <TableCell>
                              <span>{cc.cliente_nombre}</span>
                              <span>{cc.cliente_identificacion}</span>
                              <span>{cc.numero_factura}</span></TableCell>
                            <TableCell align="center">{cc.condicion}</TableCell>
                            <TableCell align="center">{cc.plazo_vencimiento}</TableCell>
                            <TableCell align="center">{cc.total_original}</TableCell>
                            <TableCell align="center">nah</TableCell>
                            <TableCell align="center">{cc.saldo_restante}</TableCell>
                            <TableCell align="right">
                                {(cc.saldo_restante <= 0) ? 
                                    <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'green'}} /><span >Pagado</span></div>
                                    : 
                                    <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'orange' }} /><span >Pendiente</span> </div>   
                                }
                            </TableCell>
                            <TableCell align='center'>
                              <Button  
                                  disabled={(cc.saldo_restante <= 0)}
                                  variant="contained"
                                  onClick={handleClickOpen}>Abonar
                              </Button>

                            </TableCell>
                            
                            </>
                          ))}
                          
                        </>
                      </TableRow>
                      
              )
            })
          }
          <CuentasAbonarBTN open={open} handleClose={handleClose}/>
        </>
    )
}

