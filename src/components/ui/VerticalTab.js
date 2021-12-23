import React from 'react'
import { Link } from 'react-router-dom'

export const VerticalTab = () => {
    return (
        <div>
            <h1>GXYARD</h1>
            <nav>
                <Link to="/clientes">Clientes</Link>
                <Link to="/cuentas">Cuentas por cobrar</Link>
            </nav>
        </div>
    )
}
