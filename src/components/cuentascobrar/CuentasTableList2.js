import React, { useState } from 'react'
import {TableRow, TableCell} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { CuentasOpenBTN } from './CuentasOpenBTN';
import { Abonos } from './Abonos';


export const CuentasTableList2 = ({ abonos, cuentasCobrar }) => {

    const [abono,setAbono] = useState(abonos);
    const [cuentaCobrar, setCuentaCobrar] = useState(cuentasCobrar);


    return (
        <>
          {
            cuentaCobrar.map(cc => {
              return(
                <TableBody key={cc.id}>
                  
                        <TableRow 
                          onClick={() => console.log("id de"+ cc.cliente_nombre+" " + cc.id + " Numero facturo " + cc.numero_factura)}
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
                          <TableCell key={cc.numero_factura} align="center">¢ 

                             <Abonos key={cc.numero_factura} abonos={abonos} cc={cc} />
                             
                          </TableCell>
                          <TableCell align="center">¢ {cc.saldo_restante = cc.total_original }</TableCell>
                          <TableCell align="right">
                              {(cc.saldo_restante <= 0) ? 
                                  <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'green'}} /><span >Pagado</span></div>
                                  : 
                                  <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'orange' }} /><span >Pendiente</span> </div>   
                              }
                          </TableCell>
                          <TableCell key={cc.id} align='center'>
                            
                            <div>
                              <CuentasOpenBTN key={cc.id} cc={cc} />        
                            </div>

                          </TableCell>
                          
                      </TableRow>
                      
                </TableBody>
              )
            })
          }
        </>
    )
}

