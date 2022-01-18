import React, { useContext } from 'react'
import { ClienteContext } from '../../hooks/context'
import { ClientesTopBar } from './ClientesTopBar';
import { ClientesSrchAddBar } from './ClientesSrchAddBar';
import { ClientesTable } from './ClientesTable';

import './clientes.css'

export const ClientesScreen = () => {

    const [cliente] = useContext(ClienteContext);
    

    return (

        <div className='clientes-container'>
            <div className='table-container'>
                
                    <ClientesTopBar />
                    <ClientesSrchAddBar/>
                    <ClientesTable cliente={cliente} />
                    <p>Total de Clientes: {cliente.length}</p>
                
            </div>
        </div>

            
    )
}
