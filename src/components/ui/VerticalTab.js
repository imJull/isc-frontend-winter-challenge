import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Logo from '../../../src/assets/FendiLogo.png';

import './tab.css'

export const VerticalTab = () => {

    return (
        <div className='container'>
            <div className='nav-container'>
                <h3>GXYARD</h3>
                <img src={Logo} alt='logo'/>


                <nav className='nav'>
                    <NavLink to="/clientes" className={({isActive}) => (isActive ? "active" : "inactive")}>
                          <PeopleAltOutlinedIcon/> Clientes                          
                    </NavLink>

                    <NavLink to="/cuentascobrar" className={({isActive}) => (isActive ? "active" : "inactive")}>
                        <AttachMoneyIcon/> Cuentas por Cobrar
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
