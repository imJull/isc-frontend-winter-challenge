import React, { useState } from 'react'

export const Abonos = ({abonos, cc}) => {
    
    const [abono, setAbono] = useState(abonos)
    
    return (
        <>
            {
                abono.map(abn => {
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
            }
        </>
    )
}
