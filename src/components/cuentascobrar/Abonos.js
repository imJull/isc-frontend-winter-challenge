import React, { useState, useEffect, useContext } from 'react'
import { getAbonosId } from '../../helpers/getAbonos'
import { CuentaCobrarContex, ClienteContext, AbonosContext } from '../../hooks/context'


export const Abonos = ({cc}) => {
    const [abonos, setAbonos] = useState([])
    const [cuentasCobrar, setCuentasCobrar] = useContext(CuentaCobrarContex);

    useEffect(() => {
        const fetchAbonosId = async (id) => {
            const abns = await getAbonosId(id)
            setAbonos(abns)
        }
        fetchAbonosId(cc.id)
    },[])

    const totalAbonos = abonos.map(abn => (abn.monto)).reduce((ab,sum) => ab+sum,0)

    return (
        <>
           {
               totalAbonos
                                      
           } 
        </>
    )
}
