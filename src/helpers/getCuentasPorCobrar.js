

export const getCuentasPorCobrar = async () => {
    try{
        const url = 'http://localhost:5000/cuentas_por_cobrar';
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }catch(error){
        console.log(error)
    }
}

