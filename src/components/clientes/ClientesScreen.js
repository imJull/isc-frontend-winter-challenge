import { Container } from '@mui/material';
import React, { useContext } from 'react'
import { ClienteContext } from '../../hooks/context'
import { ClientesTable } from './ClientesTable';

export const ClientesScreen = () => {

    const cliente = useContext(ClienteContext);

    return (
        <Container>
            <h1>Clientes</h1>
            <ClientesTable cliente={cliente} />
            
        </Container>
    )
}
