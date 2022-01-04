import React, { useContext, useState } from 'react'
import { CuentaCobrarContex, ClienteContext } from '../../hooks/context'
import { CuentasSrchAddBar } from './CuentasSrchAddBar';
import { CuentasTopBar } from './CuentasTopBar';
import { CuentasTable } from './CuentasTable';

import './cuentas.css'

export const CuentasCobrarScreen = () => {
    const cuentasCobrar = useContext(CuentaCobrarContex);
    const clientes = useContext(ClienteContext);

    const [CuentasCobrar, setCuentasCobrar] = useState()

    return (
        <div className='table-container'>
            <div className='clientes-container'>
                <CuentasTopBar />
                <CuentasSrchAddBar />
                <CuentasTable clientes={clientes}/>
                <pre>{JSON.stringify(clientes, null, 3)}</pre>

                
            </div>
        </div>
    )
}
