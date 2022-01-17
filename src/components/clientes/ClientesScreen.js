import React, { useContext } from 'react'
import { ClienteContext, AddButtonContext } from '../../hooks/context'
import { ClientesTable } from './ClientesTable';

import './clientes.css'
import { ClientesSrchAddBar } from './ClientesSrchAddBar';
import { ClientesTopBar } from './ClientesTopBar';


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
