import { Container } from '@mui/material';
import React, { useContext } from 'react'
import { CuentaCobrarContex } from '../../hooks/context'

export const CuentasCobrarScreen = () => {
    const cuentasCobrar = useContext(CuentaCobrarContex);
    return (
        <Container>
            <h1>Estas son las cuentas por cobrar</h1>   
            <pre>{JSON.stringify(cuentasCobrar, null, 3)}</pre>
        </Container>
    )
}
