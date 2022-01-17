import React, { useState,useEffect } from 'react'
import {TableRow, TableCell} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { getAbonosId, getAbonos } from '../../helpers/getAbonos'

import { CuentasOpenBTN } from './CuentasOpenBTN';
import { Abonos } from './Abonos';


export const CuentasTableList2 = ({ cuentasCobrar, }) => {

  const [abonos, setAbonos] = useState([])
    
/*   const abonosIdHandler = (ccid) => {
    const fetchAbonosId = async (id) => {
      const abns = await getAbonosId(id)
      setAbonos(abns)
  }
  console.log(abonos)
  fetchAbonosId(ccid)
}
 */
/*   useEffect(() => {
      
        const fetchAbonosId = async (id) => {
                  const abns = await getAbonosId(id)
                  setAbonos(abns)
              }
              console.log(abonos)
              fetchAbonosId()
      
  },[]) */
 

    
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

