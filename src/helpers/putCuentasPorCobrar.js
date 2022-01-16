
export const putCuentasCobrar = async (cuentasCobrar, id) => {

    const url = `http://localhost:5000/cuentas_por_cobrar${id}`;
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(cuentasCobrar),
    });
    
    const data = await res.json()
    console.log(data)
    

}