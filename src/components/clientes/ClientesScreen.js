import React, { useContext } from 'react'
import { ClienteContext } from '../../hooks/context'
import { ClientesTable } from './ClientesTable';

import './clientes.css'
import { ClientesSrchAddBar } from './ClientesSrchAddBar';
import { ClientesTopBar } from './ClientesTopBar';


export const ClientesScreen = () => {

    const cliente = useContext(ClienteContext);

    return (

        <div className='clientes-container'>
            <div className='table-container'>
                <ClientesTopBar />
                <ClientesSrchAddBar/>
                <ClientesTable cliente={cliente} />
            </div>
        </div>

            
    )
}
