import React, { useContext } from 'react'
import { CuentaCobrarContex } from '../../hooks/context'
import { CuentasSrchAddBar } from './CuentasSrchAddBar';
import { CuentasTopBar } from './CuentasTopBar';
import { CuentasTable } from './CuentasTable';

import './cuentas.css'

export const CuentasCobrarScreen = () => {
    const cuentasCobrar = useContext(CuentaCobrarContex);
    return (
        <div className='table-container'>
            <div className='clientes-container'>
                <CuentasTopBar />
                <CuentasSrchAddBar />
                <CuentasTable cuentasCobrar={cuentasCobrar} />

                <pre>{JSON.stringify(cuentasCobrar, null, 3)}</pre>
            </div>
        </div>
    )
}
