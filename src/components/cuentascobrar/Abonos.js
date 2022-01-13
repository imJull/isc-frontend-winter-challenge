import React, { useState, useEffect } from 'react'

export const Abonos = ({abonos, cc}) => {
        
  
    return (
        <>
            {
                abonos.map(abn => {
                    console.log(abn.cuentas_por_cobrarId)
                })
                
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