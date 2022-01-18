
import React from 'react'
import TableBody from '@mui/material/TableBody';
import { Abonos } from './Abonos';


export const CuentasTableList = ({ cuentasCobrar }) => {

    return (
        <>
          {
            cuentasCobrar.map(cc => {

              return(
                <TableBody key={cc.id}>
                  <Abonos key={cc.numero_factura} cc={cc} />
                </TableBody>
              )
            })
          }
        </>
    )
}

