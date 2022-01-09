import React, { useEffect, useState } from 'react'

import { getAbonos } from './helpers/getAbonos'
import { getClientes, getClientesIdCC } from './helpers/getClientes'
import { getCuentasPorCobrar } from './helpers/getCuentasPorCobrar'

import { ClienteContext, AbonosContext, CuentaCobrarContex } from './hooks/context'

import { AppRouter } from './router/AppRouter'



export const MainApp = () => {

    const [clientes, setClientes] = useState([]);
    const [abonos, setAbonos] = useState([]);
    const [Ccobrar, setCcobrar] = useState([]);

    useEffect(() => {
        const traerC = async () =>{
            const c = await getClientes();
            setClientes(c)
        }
        traerC()
        
    },[])
    useEffect(() => {
        const traerA = async () =>{
            const a = await getAbonos();
            setAbonos(a)
        }
        traerA()
        
    },[])
    useEffect(() => {
        const traerCC = async () =>{
            const cc = await getCuentasPorCobrar();
            setCcobrar(cc)
        }
        traerCC()
        
    },[])
    
    return (
        <ClienteContext.Provider value={clientes}>
            <AbonosContext.Provider value={abonos}>
               <CuentaCobrarContex.Provider value={Ccobrar}>
                    <AppRouter />
                </CuentaCobrarContex.Provider> 
            </AbonosContext.Provider>
        </ClienteContext.Provider>
    )
}
