import React, { useState, useEffect } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {TableRow, TableCell} from '@mui/material';

import { CuentasOpenBTN } from './CuentasOpenBTN';
import { getAbonosId } from '../../helpers/getAbonos'



export const Abonos = ({cc}) => {
    const [abonos, setAbonos] = useState([])

    useEffect(() => {
        const fetchAbonosId = async (id) => {
            const abns = await getAbonosId(id)
            setAbonos(abns)
        }
        fetchAbonosId(cc.id)
    },[])

    const totalAbonos = abonos.map(abn => (abn.monto)).reduce((a, b) => a+b, 0)
    const saldoRestante = cc.total_original - totalAbonos 

    return (
        <>
           <TableRow
                key={cc.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                <div className='cell-cliente'>  
                    <span><p>{cc.cliente_nombre}</p></span>
                    <span>Cédula: <p>{cc.cliente_identificacion}</p></span>
                    <span>Número de Factura: <p>{cc.numero_factura}</p></span>
                    </div>
                </TableCell>  
                <TableCell align="center">{cc.condicion}</TableCell>
                <TableCell align="center">{cc.plazo_vencimiento}</TableCell>
                <TableCell align="center">¢{cc.total_original}</TableCell>
                <TableCell key={cc.numero_factura} align="center">¢ 

                    {totalAbonos}
                
                </TableCell>
                <TableCell align="center">¢{ ( saldoRestante <= 0 ) ? 0 : saldoRestante } </TableCell>
                <TableCell align="right">
                    {(saldoRestante <= 0) ? 
                        <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'green'}} /><span >Pagado</span></div>
                        : 
                        <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'orange' }} /><span >Pendiente</span> </div>   
                    }
                </TableCell>
                <TableCell key={cc.id} align='center'>
                
                <div>
                    <CuentasOpenBTN key={cc.id} cc={cc} saldoRestante={saldoRestante}/>        
                </div>

                </TableCell>
                
            </TableRow> 
</>
    )
}
