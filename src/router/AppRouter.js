import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClientesScreen } from '../components/clientes/ClientesScreen'
import { CuentasCobrarScreen } from '../components/cuentascobrar/CuentasCobrarScreen'
import { VerticalTab } from '../components/ui/VerticalTab'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <VerticalTab />

            <Routes>
                <Route path="/clientes" element={<ClientesScreen/>}/>
                <Route path="/cuentas" element={<CuentasCobrarScreen/>}/>
                
                <Route path="/" element={<ClientesScreen/>}/>

            </Routes>            
        </BrowserRouter>
    )
}
