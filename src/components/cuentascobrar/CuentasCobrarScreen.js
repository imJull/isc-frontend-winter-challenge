import React, { useContext} from 'react'
import { CuentaCobrarContex, ClienteContext, AbonosContext } from '../../hooks/context'
import { CuentasSrchAddBar } from './CuentasSrchAddBar';
import { CuentasTopBar } from './CuentasTopBar';
import { CuentasTable } from './CuentasTable';

import './cuentas.css'

export const CuentasCobrarScreen = () => {
    
    const [abonos, setAbonos] =  useContext(AbonosContext);
    const clientes = useContext(ClienteContext);
    const [cuentasCobrar, setCuentasCobrar] = useContext(CuentaCobrarContex);


    return (
        <div className='table-container'>
            <div className='clientes-container'>
                <CuentasTopBar />
                <CuentasSrchAddBar cuentasCobrar={cuentasCobrar}/>
                <CuentasTable abonos={abonos} clientes={clientes} cuentasCobrar={cuentasCobrar}/>
                <pre>{JSON.stringify(abonos, null, 3)}</pre>

                
            </div>
        </div>
    )
}
