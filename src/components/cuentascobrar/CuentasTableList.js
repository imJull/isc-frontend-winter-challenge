import React from 'react'
import {TableRow, TableCell} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { CuentasOpenBTN } from './CuentasOpenBTN';

export const CuentasTableList = ({clientes}) => {

    return (
        <>
          {
            clientes.map(cli => {
              const { id, cuentas_por_cobrar } = cli;
              
              return (
                      
                   		<TableBody key={id}>
                          
                          
                          {cuentas_por_cobrar.map(cc =>(
                            <TableRow 
                              onClick={() => console.log(id)}
                              key={cc.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                
                              <TableCell>
                                <div className='cell-cliente'>  
                                  <span><p>{cc.cliente_nombre}</p></span>
                                  <span>Cédula: <p>{cc.cliente_identificacion}</p></span>
                                  <span>Número de Factura: <p>{cc.numero_factura}</p></span>
                                  </div>
                              </TableCell>  
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
                                  <CuentasOpenBTN key={id} cc={cc} />        
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

