import React, { useState, useEffect } from 'react'
import { getAbonosId } from '../../helpers/getAbonos'


export const Abonos = ({cc}) => {
    const [abonos, setAbonos] = useState([])
    const [abono, setAbono] = useState([])

    useEffect(() => {
        const fetchAbonosId = async (id) => {
            const abns = await getAbonosId(id)
            setAbonos(abns)
        }
        fetchAbonosId(cc.id)
    },[])
  
    return (
        <>
           {
               abonos.map((abn) => abn.monto )
           } 
        </>
    )
}
/* 
{
    abonos.map(abn => {
        const sumarMontos = () => {
            console.log(abn.monto + " " + abn.id + " " + abn.cuentas_por_cobrarId)
            return abn.monto
        }
        return(
            <span key={abn.id}>
                {
                    (abn.cuentas_por_cobrarId === cc.id) ? <p>{sumarMontos()}</p> : ""
                }
            </span>
        )
    })
} */