
export const postCuentasCobrar = async (cuentasCobrar) => {
  try{
    const url = `http://localhost:5000/cuentas_por_cobrar`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(cuentasCobrar),
    });
    
    const data = await res.json()
    return data

  }catch(error){
    console.log(error)
  }
    

}