import React, { useContext } from 'react'
import { CuentaCobrarContex, AbonosContext } from '../../hooks/context'
import { CuentasTopBar } from './CuentasTopBar';
import { CuentasSrchAddBar } from './CuentasSrchAddBar';
import { CuentasTable } from './CuentasTable';

import './cuentas.css'

export const CuentasCobrarScreen = () => {

    const [abonos] =  useContext(AbonosContext);
    const [cuentasCobrar] = useContext(CuentaCobrarContex);


    return (
        <div className='table-container'>
            <div className='clientes-container'>
                <CuentasTopBar />
                <CuentasSrchAddBar cuentasCobrar={cuentasCobrar}/>
                <CuentasTable abonos={abonos} cuentasCobrar={cuentasCobrar}/>                
            </div>
        </div>
    )
}
