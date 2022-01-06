import React, {useState} from 'react'
import {TableRow, TableCell, Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CuentasAbonarBTN } from './CuentasAbonarBTN';

export const CuentasTableList = ({clientes}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id)
  };


  const handleClose = () => {
    setOpen(false);
  };
  


    return (
        <>
          {
            clientes.map(cli => {
              const { id, cuentas_por_cobrar } = cli;
              
              return (
                      
                   		<TableBody key={id}>
                          
                          
                          {cuentas_por_cobrar.map(cc =>(
                            <TableRow 
                              key={cc.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell>
                                <span>{cc.cliente_nombre}</span>
                                <span>{cc.cliente_identificacion}</span>
                                <span>{cc.numero_factura}</span></TableCell>
                              <TableCell align="center">{cc.condicion}</TableCell>
                              <TableCell align="center">{cc.plazo_vencimiento}</TableCell>
                              <TableCell align="center">¢ {cc.total_original}</TableCell>
                              <TableCell align="center">¢ nah</TableCell>
                              <TableCell align="center">¢ {cc.saldo_restante}</TableCell>
                              <TableCell align="right">
                                  {(cc.saldo_restante <= 0) ? 
                                      <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'green'}} /><span >Pagado</span></div>
                                      : 
                                      <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'orange' }} /><span >Pendiente</span> </div>   
                                  }
                              </TableCell>
                              <TableCell key={id} align='center'>
                                
                                <div>
                                  <Button  
                                      disabled={(cc.saldo_restante <= 0)}
                                      variant="contained"
                                      onClick={() => handleClickOpen(id)}>Abonar
                                      
                                  </Button>

                                  <CuentasAbonarBTN clientes={clientes} cli={cli} cc={cc} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
    
                                </div>

                              </TableCell>
                              
                            </TableRow>
                          ))}
                          
                        
                      </TableBody>
                      
              )
            })
          }
          
          
        </>
    )
}

