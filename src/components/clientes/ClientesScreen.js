import { Container } from '@mui/material';
import React, { useContext } from 'react'
import { ClienteContext } from '../../hooks/context'
import { ClientesTable } from './ClientesTable';

import './clientes.css'


export const ClientesScreen = () => {

    const cliente = useContext(ClienteContext);

    return (
        
            <div className='table-container'>
                
                <h1>Clientes</h1>
                <ClientesTable cliente={cliente} />
            </div>
            
    )
}
